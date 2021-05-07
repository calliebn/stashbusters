async function signupFormHandler(event) {
  event.preventDefault();

<<<<<<< HEAD
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
=======
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && password) {
    const response = await fetch('/api/users', {
>>>>>>> kp
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log('success');

      //WHICH PLACE TO REPLACE? LgitOGIN OR HOMEPAGE?
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#signup-button')
  .addEventListener('submit', signupFormHandler);
