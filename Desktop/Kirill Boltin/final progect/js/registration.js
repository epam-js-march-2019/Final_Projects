const loginForm = document.getElementById('form-registration');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const password = loginForm.elements['password'].value;
    const email = loginForm.elements['email'].value;
    const firstName = loginForm.elements['firstName'].value;
    const secondName = loginForm.elements['secondName'].value;
    console.log('formregistration', email, password, firstName, secondName);

    fetch('http://localhost:8000/sign-up', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
            firstName: firstName,
            secondName: secondName
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        if (response.created) {
            console.log('you\'ve sign-up!!!');
            return location.href = '../html/endOfRegistration.html';
        }
        console.log('you are not signed up.. :\'(');
      })
}, false);
