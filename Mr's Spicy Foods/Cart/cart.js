
// Getting Data From User Order--> From 'Add To Cart Button'


document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const itemContainer = this.parentElement;
            const itemName = itemContainer.getAttribute("data-name");
            const optionSelector = itemContainer.querySelector(".option-selector");

            let selectedOption = optionSelector ? optionSelector.value.replace(/\s/g, "").toLowerCase() : null;
            let itemPrice = 0;

            if (selectedOption) {
                // Get the price using the dataset attribute
                itemPrice = parseInt(itemContainer.getAttribute(`data-${selectedOption}-price`)) || 0;
            } else {
                // For burgers or single-price items
                itemPrice = parseInt(itemContainer.getAttribute("data-price")) || 0;
                selectedOption = "Regular"; // Default name for burgers
            }

            const cartItem = {
                name: itemName,
                option: selectedOption,
                price: itemPrice,
                quantity: 1
            };

            addToCart(cartItem);
        });
    });

    // ✅ Function to update the cart count on the cart icon
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        const cartCountElement = document.querySelector(".cart-count");
        if (cartCountElement) {
            if (totalItems > 0) {
                cartCountElement.textContent = totalItems;
                cartCountElement.style.display = "flex";
            } else {
                cartCountElement.style.display = "none";
            }
        }
    }

    // ✅ Call updateCartCount when page loads
    updateCartCount();

    // ✅ Modify addToCart function to update cart count
    function addToCart(cartItem) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItemIndex = cart.findIndex(item => item.name === cartItem.name && item.option === cartItem.option);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push(cartItem);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert(`${cartItem.name} (${cartItem.option}) added to cart!`);
    }

    // ✅ Handling Cart Page - Update when item is removed or quantity changes
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function displayCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");

            itemDiv.innerHTML = `
                <p>${item.name} (${item.option}) - Rs. ${item.price}/-</p>
                <div class="quantity-controls" data-index="${index}">
                    <button class="decrease">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="increase">+</button>
                </div>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;

            total += item.price * item.quantity;
            cartItemsContainer.appendChild(itemDiv);
        });

        totalPriceElement.innerHTML = `Total: &nbsp;&nbsp;&nbsp;&nbsp; Rs. ${total} /-`;
    }

    // ✅ Handle quantity changes and removal in the cart
    cartItemsContainer.addEventListener("click", function (e) {
        const index = e.target.closest(".quantity-controls")?.getAttribute("data-index") || e.target.getAttribute("data-index");

        if (e.target.classList.contains("increase")) {
            cart[index].quantity++;
            updateCart();
        } else if (e.target.classList.contains("decrease") && cart[index].quantity > 1) {
            cart[index].quantity--;
            updateCart();
        } else if (e.target.classList.contains("remove-btn")) {
            cart.splice(index, 1);
            updateCart();
        }
    });

    function updateCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
        updateCartCount();  // ✅ Update the cart count when item is removed
    }






    // CheckOut Button

    const checkoutBtn = document.getElementById("checkout-btn");
    const addressInput = document.getElementById("address");
    const phoneInput = document.getElementById("phone");
    const addressError = document.getElementById("address-error");
    const phoneError = document.getElementById("phone-error");

    // Show error message and red border
    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        input.classList.add("input-error");
    }

    // Clear error message and red border
    function clearError(input, errorElement) {
        errorElement.textContent = "";
        input.classList.remove("input-error");
    }

    // Real-time validation for address
    addressInput.addEventListener("input", () => {
        if (addressInput.value.trim()) clearError(addressInput, addressError);
    });

    // Real-time validation for phone number
    phoneInput.addEventListener("input", () => {
        if (/^\d{11}$/.test(phoneInput.value.trim())) clearError(phoneInput, phoneError);
    });

    checkoutBtn.addEventListener("click", function () {
        const address = addressInput.value.trim();
        const phone = phoneInput.value.trim();
        let isValid = true;

        // ✅ Check if cart is empty first
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return; // Stop if cart is empty
        }

        // Address validation
        if (!address) {
            showError(addressInput, addressError, "Please enter your address.");
            isValid = false;
        }

        // Phone number validation
        if (!phone) {
            showError(phoneInput, phoneError, "Please enter your phone number.");
            isValid = false;
        } else if (!/^\d{11}$/.test(phone)) {
            showError(phoneInput, phoneError, "Phone number must be 11 digits.");
            isValid = false;
        }

        if (!isValid) return; // Stop submission if invalid

        // Save details and proceed
        localStorage.setItem("deliveryAddress", address);
        localStorage.setItem("phoneNumber", phone);

        alert("Details saved! Proceeding to checkout...");
        // window.location.href = "checkout.html";
    });


    displayCart();
});

