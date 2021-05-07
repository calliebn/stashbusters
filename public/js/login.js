//  login submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      //Need to have a profile.js in the public/js/
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};
var el = document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
