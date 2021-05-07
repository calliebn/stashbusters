async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log('success');

      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#signup-button')
  .addEventListener('submit', signupFormHandler);
