// Star Rating Functionality
const stars = document.querySelectorAll('.stars span');
const ratingInput = document.getElementById('rating');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        // Set rating value
        ratingInput.value = index + 1;

        // Remove 'selected' class from all stars
        stars.forEach((s, i) => {
            s.classList.toggle('selected', i <= index);
        });
    });

    // Add hover effect to stars
    star.addEventListener('mouseover', () => {
        stars.forEach((s, i) => {
            s.style.color = i <= index ? 'gold' : 'white';
        });
    });

    star.addEventListener('mouseout', () => {
        stars.forEach((s, i) => {
            s.style.color = s.classList.contains('selected') ? 'gold' : 'white';
        });
    });
});

// Form Submission Event
const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission to a server

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const rating = document.getElementById('rating').value;
    const imageUpload = document.getElementById('imageUpload').value;

    // Display form data or process it (This can be customized to fit your requirements)
    alert(`Thank you, ${name}, for your feedback!\nRating: ${rating} stars\nMessage: ${message}`);
    
    // Reset form
    feedbackForm.reset();
    stars.forEach(star => {
        star.style.color = '#ddd';
        star.classList.remove('selected');
    });
});
