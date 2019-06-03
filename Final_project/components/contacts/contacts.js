window.onload = function() {
    if (localStorage.getItem("isLogged") && localStorage.getItem("currentUserId"))
    {   signTab.style.display = 'none';
        activeTab.style.display = 'flex';
        activeTitle.innerHTML = JSON.parse(localStorage.getItem("users"))[+localStorage.getItem("currentUserId")].login;}
    else {
        signTab.style.display = 'flex';
        activeTab.style.display = 'none';
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
    activeTab = document.querySelector('.active-tab');
activeTitle = document.querySelector('.active-title');