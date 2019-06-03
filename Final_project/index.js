window.onload = function() {
    if (localStorage.getItem("isLogged") && localStorage.getItem("currentUserId"))
    {   signTab.style.display = 'none';
        activeTab.style.display = 'flex';
        activeTitle.innerHTML = JSON.parse(localStorage.getItem("users"))[+localStorage.getItem("currentUserId")].login;
        reqWarning.style.display = 'none';
        console.log("onLoad if");
    }
    else {
        signTab.style.display = 'flex';
        activeTab.style.display = 'none';
        console.log("onLoad else");
    }
};


let submitSignUp = document.querySelector('.sub-signUp'),
    signUpForm = document.querySelector('.signUpForm'),
    signInForm = document.querySelector('.signInForm'),
    submitSignIn = document.querySelector('.sub-signIn');

let signTab = document.querySelector('.sign-tab'),
    divSignUp = document.querySelector('.signUp-div'),
    closeSignUp = document.querySelector('.close-signUp'),
    divSignIn = document.querySelector('.signIn-div'),
    closeSignIn = document.querySelector('.close-signIn'),
    toggleBtnUp = document.querySelector('.toggle-btnUp'),
    toggleBtnIn = document.querySelector('.toggle-btnIn'),
    activeTab = document.querySelector('.active-tab'),
    activeTitle = document.querySelector('.active-title'),
    reqWarning = document.querySelector('.req-warning');

let users = [],
    currentUserId = null,
    currentUser = {};

function userObject(){
    this.list = {};
}

userObject.addUser = function(log,mail,pass,com,phone){
    this.list = {
        login: log,
        email: mail,
        password: pass,
        company: com,
        phone: phone,
    };
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
    if (!elems.passwordIn.value){
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
    if (!parser.filter(item => item.password === elems.passwordIn.value)){
        showError(elems.passwordIn.parentNode,'Введенный Вами пароль неверный.');
        signInForm.passwordIn.value = '';
        return false;
    }
    else {
        currentUserId = 0;
        let arr = JSON.parse(localStorage.getItem("users"));
        arr.some(function (item,id) {
           if (item.login === signInForm.loginIn.value && item.password === signInForm.passwordIn.value){
               currentUserId = id;
           }
           return item.login === signInForm.loginIn.value && item.password === signInForm.passwordIn.value;
        });
        localStorage.setItem("isLogged","true");
        localStorage.setItem("currentUserId",currentUserId);
        let currentNum = +localStorage.getItem("currentUserId");
        currentUser = JSON.parse(localStorage.getItem("users"))[currentNum];
        localStorage.setItem("currentUser",JSON.stringify(currentUser));
        divSignUp.style.display = 'none';
        divSignIn.style.display = 'none';
        signTab.style.display = 'none';
        reqWarning.style.display = 'none';
        activeTab.style.display = 'flex';
        activeTitle.innerHTML = elems.loginIn.value;
    }

}

submitSignIn.addEventListener('click',function (event) {
    signIn(signInForm);
    console.log("submit signINN");
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

    resetError(elems.passwordConfirm.parentNode);
    if (elems.password.value !== elems.passwordConfirm.value){
        showError(elems.password.parentNode, 'Пароли не совпадают.');
        signUpForm.password.value = '';
        signUpForm.passwordConfirm.value = '';
        return false;
    }

    else {
        alert("Поздравляем! Регистрация прошла успешно!")
    }
    console.log("submit regist");
}


submitSignUp.addEventListener('click',function (event) {
    console.log("submit signUp");
    signUp(signUpForm);
    if (signUpForm.login.value === "" || signUpForm.email.value === "" || signUpForm.password.value === "" || signUpForm.company.value === "" || signUpForm.phone.value === ""){
        return false;
    }
    const arr = JSON.parse(localStorage.getItem("users")) || [];
    userObject.addUser(signUpForm.login.value,signUpForm.email.value,signUpForm.password.value,signUpForm.company.value,signUpForm.phone.value);
    arr.push(userObject.list);
    console.log(arr);
    localStorage.setItem("users",JSON.stringify(arr));
    signUpForm.login.value = '';
    signUpForm.email.value = '';
    signUpForm.password.value = '';
    signUpForm.passwordConfirm.value = '';
    signUpForm.company.value = '';
    signUpForm.phone.value = '';

});

/*----------------------------------modal-window---------------------------------------*/

signTab.addEventListener('click',function (event) {
    divSignUp.style.display = 'flex';
    console.log(1);
});

closeSignUp.addEventListener('click',function (event) {
    divSignUp.style.display = 'none';
    console.log(3);
});

toggleBtnUp.addEventListener('click',function (event) {
    debugger;
    divSignUp.style.display = 'none';
    divSignIn.style.display = 'flex';
    console.log(2);

});

toggleBtnIn.addEventListener('click',function (event) {
    divSignUp.style.display = 'flex';
    divSignIn.style.display = 'none';
    console.log(4);
});

closeSignIn.addEventListener('click',function (event) {
    divSignIn.style.display = 'none';
    console.log(5);
});



/*-----------------------------------------request-form-------------------------------------*/


let reqBtn = document.querySelector('.req-btn'),
    data = document.querySelector('.request-form'),
    history = [];

function historyReq() {
    this.list = {}
}

historyReq.add = function (a,b,c,d,e) {
  this.list = {
      model : a,
      year : b,
      message : c,
      date: d,
      user: e
  }
};

function showErrors(container,errorMessage) {
    container.className = 'error';
    let msgElem = document.createElement('span');
    msgElem.className = 'error-message';
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetErrors(container) {
    container.className = '';
    if (container.lastChild.className === 'error-message'){
        container.removeChild(container.lastChild);
    }
}

function validateData(form) {
    let elements = form.elements;
    console.log(elements);

    resetErrors(elements.model.parentNode);
    if (!elements.model.value.length){
        showErrors(elems.model.parentNode,'это поле не может быть пустым')
    }

    resetErrors(elements.model.parentNode);
    if (!/[A-Za-z]/.test(elements.model.value)){
        showErrors(elements.model.parentNode,'модель техники должна содержать буквы')
    }

    resetErrors(elements.model.parentNode);
    if (!/\d/.test(elements.model.value)){
        showErrors(elements.model.parentNode,'модель техники должна содержать цифры')
    }

    resetErrors(elements.year.parentNode);
    if (!elements.year.value.length){
        showErrors(elements.year.parentNode,'это поле не может быть пустым')
    }

    resetErrors(elements.year.parentNode);
    if (/[A-Za-z]/.test(elements.year.value)){
        showErrors(elements.year.parentNode,'год выпуска может содержать только цифры')
    }

    resetErrors(elements.message.parentNode);
    if (!elements.message.value.length){
        showErrors(elements.message.parentNode,'это поле не может быть пустым')
    }

    else {
        alert('Ваша заявка принята в работу! Все ваши заявки отображаются в личном кабинете.')
    }
}


reqBtn.addEventListener('click',function (event) {
    console.log("submit request");
    let date = new Date().toLocaleString();
    validateData(data);
    if (data.model.value === "" || data.year.value === "" || data.message.value === ""){
        return false;
    }
    let user = JSON.parse(localStorage.getItem("currentUser")).login;
    historyReq.add(data.model.value,data.year.value,data.message.value,date,user);
    const arr = JSON.parse(localStorage.getItem("history")) || [];
    arr.push(historyReq.list);
    console.log(historyReq.list);
    localStorage.setItem("history",JSON.stringify(arr));
    data.model.value = "";
    data.year.value = "";
    data.message.value = "";
});


