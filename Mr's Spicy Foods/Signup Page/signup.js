// JavaScript for toggling between Signup and Login

document.getElementById('show-login').addEventListener('click', function () {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('show-signup').addEventListener('click', function () {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
});



// Signup form submission functionality
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for demonstration
    alert('Signup functionality will be added soon!');
});
// Login form submission functionality
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for demonstration
    alert('Login functionality will be added soon!');
});

1-// Google button functionality
document.querySelector('#google1').addEventListener('click', function () {
    alert('Google sign-in functionality will be added soon!');
});
1-// Google button functionality
document.querySelector('#google2').addEventListener('click', function () {
    alert('Google Log-in functionality will be added soon!');
});
