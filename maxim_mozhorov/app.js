var express = require('express');
var bodyParser = require("body-parser");
var session = require('express-session');
var users = require("./users");
var usersActions = require("./usersActions");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname,"build")));
app.use(bodyParser.json());
app.use(session({secret: 'k2ejk2dnkd'}));


app.post('/user',function(req,res){

    var userInfo = usersActions.checkUserSession(req);
    req.session.username = userInfo.username;
    req.session.email = userInfo.email;

   if (userInfo.isGuest !== true){
       res.send({
           result : "success",
           username: req.session.username,
           email: req.session.email
       });
   }
   else {
      res.send('failure');
   }
});


app.post('/signin', function (req, res) {

    usersActions.checkUserSession(req);

    var userCheck = usersActions.signIn(req.body , users);

    if(userCheck.result !== "failure"){
        req.session.username = userCheck.username;
        req.session.email = userCheck.email;
        res.send(userCheck);
    }
    else {
        res.send(userCheck.result);
    }


});


app.post('/signup', function (req, res) {

    var data = usersActions.signUp(req.body.data,users);


    if (data.result !== "failure") {
        users.push(data);
        req.session.username = data.username;
        req.session.email = data.email;
        res.send({
            result : "success",
            username : data.username,
            email: data.email
        });
    }
    else {
        res.send({result:"failure"});
    }



});




app.post('/signout', function (req, res) {
    delete req.session.username;
    delete req.session.email;
    res.send({
        result : "success"
    })
});


app.post('/profile', function (req, res) {

    var data;
    var result = {};

    users.map( (user) => {
        if (req.body.username === user.username && req.body.email === user.email ){
            if (result.status !== 1){
                data = {
                    result : 'success',
                    about : user.about,
                    hobbies : user.hobbies,
                    skills : user.skills,
                    img : user.img,
                    followers : user.followers,
                    following : user.following,
                    snippets : user.snippets,
                    rating : user.rating,
                    feedbacks : user.feedbacks
                };
                result.status = 1;
            }
        }
    });

    res.send(data);

});


app.post('/callback',function(req,res){
    if (req.body.username && req.body.email && req.body.text){

        users.map( (user, i) => {
            if (req.body.username === user.username && req.body.email === user.email ){
                users[i].feedbacks.push(req.body.text);
            }
        });

        res.send('success');
    }
    else {
        res.send('failure');
    }
});








app.use("/*", express.static(path.join(__dirname,"build")));




app.listen(3001,function () {
   console.log("Started listening on port", 3001);
});
