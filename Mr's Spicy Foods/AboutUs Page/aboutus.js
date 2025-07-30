// JavaScript functionality for the About Us page

// Optional: Toggle FAQ answers visibility (add functionality to make the page interactive)
const faqHeaders = document.querySelectorAll('.question-answer h3');

faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const answer = header.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
