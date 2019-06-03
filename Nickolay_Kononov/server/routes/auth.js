const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.post('/:username', function(req, res, next) {

    authController.login(req.body.username, req.body.password, function(err, result){
        if(err){
            console.log(err);
            res.status(500).json({
                success: 0,
                error: err
            });
            return;
        }

        if(result){
            res.status(200).json({
                success: 1,
                data: {tokenID: result, username: req.body.username}
            });
        }else{
            res.status(401).json({
                success: 0,
                data: result
            });
        }
    });
});

router.post('/', function(req, res, next) {

    authController.register(req.body.username, req.body.password, function(err, result){
        if(err){
            console.log(err);
            res.status(500).json({
                success: 0,
                error: err
            });
            return;
        }
        if(result){
            res.status(200).json({
                success: 1,
                data: {tokenID: result, username: req.body.username, admin: false}
            });
        }else{
            res.status(401).json({
                success: 0,
                data: result
            });
        }
    });


});


router.get('/admin/:username', function (req, res, next) {

    userAdmin = req.params.username;


    authController.isAdmin(userAdmin, function(err, result){
        if(err){
            console.log(err);
            res.status(500).json({
                success: 0,
                data: result
            });
            return;
        }

        res.status(200).json({
            success: 1,
            data: result
        });
    })

});

router.get('/:username', function (req, res, next) {

    let username = req.params.username;

    authController.findbyUsername(username, function (err, result) {
        if(err){
            console.log(err);
            res.status(500).json({
                success: 0,
                data: result
            });
            return;
        }

        res.status(200).json({
            success: 1,
            data: result
        });
    })

});


module.exports = router;