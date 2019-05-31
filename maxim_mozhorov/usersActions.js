var uuidv1 = require('uuid/v1');
var exports = module.exports = {};

exports.signIn = function(data,users) {

    for (let i =0 ; i < users.length; i++){
        if (users[i].username === data.email && users[i].password === data.password){
            return {
                result : "success",
                username : users[i].username,
                email : users[i].email
            }
        }
    }

    return {
        result : "failure"
    }
};


exports.signUp = function(data,users){

    for (let i =0 ; i < users.length; i++){
        if (users[i].username === data.username && users[i].email === data.email){
            return {
                result : "failure"
            };
        }
    }

    return {
        username : data.username,
        email : data.email,
        password : data.password,
        id : uuidv1(),
        img : "https://www.anonymousvpn.org/images/mascot-shadow.png",
        followers : 0,
        following : 0,
        snippets : 0,
        rating : 0,
        feedbacks : [],
        about : data.about,
        hobbies : data.hobbies,
        skills : data.skills
    };





};



exports.checkUserSession = function (req) {

    if ((typeof req.session.username === 'undefined') || req.session.username === "") {
        return {
            isGuest : true,
            username : "",
            email : ""
        };
    }
    else {
        return {
            isGuest : false,
            username : req.session.username,
            email : req.session.email
        }
    }
};

