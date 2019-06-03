window.onload = function() {
if (!localStorage.getItem("isLogged") && !localStorage.getItem("currentUserId"))
        window.location.href = "../../index.html";

};

const clientName = document.querySelector('.client-name'),
    clientCompany = document.querySelector('.client-company'),
    clientEmail = document.querySelector('.client-email'),
    clientPhone = document.querySelector('.client-phone'),
    clientNumber = document.querySelector('.client-number'),
    clientData = JSON.parse(localStorage.getItem("users"))[+localStorage.getItem("currentUserId")],
    signOutBtn = document.querySelector('.sign-out');

const model = document.querySelector('.model'),
    year = document.querySelector('.year'),
    msg = document.querySelector('.msg'),
    dateRequest = document.querySelector('.date'),
    history = JSON.parse(localStorage.getItem("history")),
    currentUser = localStorage.getItem("currentUser"),
    currentUserHistory = getCurrentUserHistory();

let dateFunction = function(value) {

        return new Date(value).toLocaleString();

};

function getCurrentUserHistory(){

  return  history.filter(item => item.user == JSON.parse(currentUser).login);
}


        clientName.textContent = 'Логин:  ' + clientData.login;
        clientEmail.textContent = 'Почта:  ' + clientData.email;
        clientCompany.textContent = 'Организация: ' + clientData.company;
        clientPhone.textContent = 'Телефон: ' + clientData.phone;
        clientNumber.textContent = 'Клиентский номер : ' + (+localStorage.getItem("currentUserId")+1);

        function modelText(){
            return currentUserHistory && currentUserHistory[0] ? currentUserHistory[0].model : "";
        }

        function yearText(){
            return currentUserHistory && currentUserHistory[0] ? currentUserHistory[0].year : "";
        }
function msgText(){
    return currentUserHistory && currentUserHistory[0] ? currentUserHistory[0].message : "";
}
function dateText(){
    return currentUserHistory && currentUserHistory[0] ?
        dateFunction(currentUserHistory[0].date) : "";
}



        model.textContent += 'Модель техники: ' + modelText();
        year.textContent += 'Год выпуска: ' +  yearText();
        msg.textContent += 'Текст заявки: ' + msgText();
        dateRequest.textContent += 'Дата заявки: ' + dateText();

        signOutBtn.addEventListener('click',function (event) {
           localStorage.removeItem("isLogged");
           console.log("Hello");
                // signTab.style.display = 'flex';
                // activeTab.style.display = 'none';
                location.href = "../../index.html"
        });

