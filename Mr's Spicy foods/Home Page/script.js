// JavaScript functionality

// Login button functionality
// document.querySelector('nav button').addEventListener('click', function () {
//     alert('SigUp functionality will be added soon!');
// });

// Search input functionality
const searchInput = document.querySelector('#hero input');
const searchButton = document.querySelector('#hero button');

searchButton.addEventListener('click', function () {
    const searchQuery = searchInput.value;
    if (searchQuery) {
        alert(`You searched for: ${searchQuery}`);
    }
});
searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const searchQuery = searchInput.value;
        if (searchQuery) {
            alert(`You searched for: ${searchQuery}`);
        }
    }
});


// Animate elements on scroll
window.addEventListener('scroll', () => {
    const foodSection = document.getElementById('food-content');
    const sectionPosition = foodSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        foodSection.classList.add('animate');
    }
});

// Slider manual scroll functionality
const initializeSliderScroll = (container) => {
    const leftArrow = document.createElement('button');
    const rightArrow = document.createElement('button');

    // Add arrows for scrolling
    leftArrow.innerText = '←';
    rightArrow.innerText = '→';
    leftArrow.classList.add('slider-arrow', 'left-arrow');
    rightArrow.classList.add('slider-arrow', 'right-arrow');

    // Append the arrows to the slider container's parent (the section)
    container.parentElement.appendChild(leftArrow);
    container.parentElement.appendChild(rightArrow);

    // Scroll functionality for left and right arrows
    leftArrow.addEventListener('click', () => {
        container.scrollBy({
            left: -250, // Adjust to scroll one item at a time
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        container.scrollBy({
            left: 250, // Adjust to scroll one item at a time
            behavior: 'smooth'
        });
    });
};


// Optional: Add hover animations for social media icons used in footer
const socialIcons = document.querySelectorAll('.social-media a');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});




// Initialize sliders for both Pizza and Pulao sections
initializeSliderScroll(document.querySelector('#pizza-slider .slider-container'));
initializeSliderScroll(document.querySelector('#pulao-slider .slider-container'));
initializeSliderScroll(document.querySelector('#chicken-slider .slider-container'));
initializeSliderScroll(document.querySelector('#drinks-slider .slider-container'));
initializeSliderScroll(document.querySelector('#pasta-slider .slider-container'));
initializeSliderScroll(document.querySelector('#burger-slider .slider-container'));

