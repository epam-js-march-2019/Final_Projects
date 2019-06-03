const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');


router.get('/reserve', function(req, res, next){
    const id = req.params.id;

    serviceController.findReservation(req.query, function(err, results){
        if(err){
            console.log(err);
            res.json({
                success: 0,
                error: err
            });
            return;
        }
        res.json({
            success: 1,
            data: results
        });
    })
})

router.get('/', function(req, res, next) {

    serviceController.find(req.query, function(err, results){
        if(err){
            console.log(err);
            res.json({
                success: 0,
                error: err
            });
            return;
        }
        res.json({
            success: 1,
            data: results
        });
    });
})


router.get('/:id', function(req, res, next){
    const id = req.params.id;

    serviceController.findById(id, function(err, result){

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
    });
})




router.post('/', function(req, res, next) {
    serviceController.create(req.body, function (err, result) {
        if (err) {
            console.log(err);
            res.json({
                success: 0,
                error: err
            });
            return;
        }

        res.json({
            success: 1,
            data: result
        });
    });
});

router.post('/:id/reserve', function(req, res, next) {

    const id = req.params.id;


    serviceController.newReservation(id, req.userData.username, req.body.day, req.body.name, function(err, result){
        if(err){
            console.log(err);
            res.json({
                success: 0,
                error: err
            });
            return;
        }

        console.log('creating reserve');

        res.json({
            success: 1,
            data: result
        });
    });
});


module.exports = router;