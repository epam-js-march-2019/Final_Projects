
let submitForm = document.querySelector('.sub-form'),
    signUpForm = document.querySelector('.signUp'),
    signInForm = document.querySelector('.signIn'),
    submitFormEnt = document.querySelector('.sub-formEnt');

let users = [];

function objectio(){
    this.list = {};
}

objectio.addUser = function(a,b,c){
    this.list = {
        login: a,
        email: b,
        password: c
    }
};


function showError(container,errorMessage) {
    container.className = 'error';
    let msgElem = document.createElement('span');
    msgElem.className = 'error-message';
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className === 'error-message'){
        container.removeChild(container.lastChild);
    }
}

/*---------------------------------------Аутентификация-------------------------------------------------*/

function signIn(form) {
    let elems = form.elements,
        parser = JSON.parse(localStorage.getItem("users"));


    /*--------------------login-check----------------*/

    resetError(elems.loginIn.parentNode);
    if (elems.loginIn.value.length < 1){
        showError(elems.loginIn.parentNode,'Это поле не может быть пустым');
        signInForm.passwordIn.value = '';
        return false;
    }

    resetError(elems.loginIn.parentNode);
    if (!parser.filter(item => item.login === elems.loginIn.value)){

        showError(elems.loginIn.parentNode,'Введенный Вами логин не зарегистрирован.');
        signInForm.passwordIn.value = '';
        return false;
    }

    /*--------------------Password-check----------------*/

    resetError(elems.passwordIn.parentNode);
    if (!localStorage.getItem(elems.passwordIn.value)){
        showError(elems.passwordIn.parentNode,'Это поле не может быть пустым');
        signInForm.passwordIn.value = '';
        return false;
    }

    resetError(elems.loginIn.parentNode);
    if (!parser.filter(item => item.login === elems.loginIn.value && item.password === elems.passwordIn.value)){

        showError(elems.loginIn.parentNode,'Введенный Вами пароль не соответствует.');
        signInForm.passwordIn.value = '';
        return false;
    }


    resetError(elems.passwordIn.parentNode);
    if (elems.passwordIn.value !== localStorage.getItem(elems.loginIn.value)){
        showError(elems.passwordIn.parentNode,'Введенный Вами пароль неверный.');
        signInForm.passwordIn.value = '';
        return false;
    }
    else {localStorage.setItem("isLogged","true")}

}

submitFormEnt.addEventListener('click',function (event) {
    console.log("submitForm entry");
    signIn(signInForm);
    signIn.loginIn.value = '';
    signIn.passwordIn.value = '';
});

/*---------------------------------------Регистрация-------------------------------------------------*/

function signUp(form) {
    let elems = form.elements;
    console.log(elems);

    /*--------------------login-signUP----------------*/

    resetError(elems.login.parentNode);
    if (!elems.login.value.length){
        showError(elems.login.parentNode, 'Вы не ввели логин.');
        signUpForm.password.value = '';
        signUpForm.passwordConfirm.value = '';
        return false;
    }

    /*--------------------email-signUP----------------*/

    resetError(elems.email.parentNode);
    if (!elems.email.value.length){
        showError(elems.email.parentNode, 'Вы не ввели адрес почты.');
        signUpForm.password.value = '';
        signUpForm.passwordConfirm.value = '';
        return false;
    }

    resetError(elems.email.parentNode);
    if (!elems.email.value.includes("@" && ".")){
        showError(elems.email.parentNode, 'Адрес почты должен содержать символы "@" и "."');
        signUpForm.password.value = '';
        signUpForm.passwordConfirm.value = '';
        return false;
    }

    /*--------------------password-signUP----------------*/

    resetError(elems.password.parentNode);
    if (!elems.password.value){
        showError(elems.password.parentNode , 'Вы не ввели пароль.');
        signUpForm.password.value = '';
        signUpForm.passwordConfirm.value = '';
        return false;
    }

    resetError(elems.password-confirm.parentNode);
    if (elems.password.value !== elems.password-confirm.value){
        showError(elems.password.parentNode, 'Пароли не совпадают.');
        signUpForm.password.value = '';
        signUpForm.passwordConfirm.value = '';
        return false;
    }

}


submitForm.addEventListener('click',function (event) {
    console.log("sub form users");
    signUp(signUpForm);
    objectio.addUser(signUpForm.login.value,signUpForm.email.value,signUpForm.password.value);
    users.push(objectio.list);
    console.log(users);
    localStorage.setItem("users",JSON.stringify(users));
    signUpForm.login.value = '';
    signUpForm.email.value = '';
    signUpForm.password.value = '';
    signUpForm.passwordConfirm.value = '';

});




