const loginForm = document.getElementById('form-login');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const password = loginForm.elements['password'].value;
    const email = loginForm.elements['email'].value;
    console.log('formlogin', email, password);

    fetch('http://localhost:8000/sign-in', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        if (response.successful) {
            console.log('you\'ve logged in!!!');
            return location.href = '../html/my-account.html';
        }
        console.log('you are not signed in.. :\'(');
      })
}, false);
