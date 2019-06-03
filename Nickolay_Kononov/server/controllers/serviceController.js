const Service = require('../models/Service');
const Reservation = require('../models/Reservation');

module.exports = {

    create: function(params, callback){

        Service.create(params, function(err, result){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, result);
        });
    },

    find: function(params, callback){
        Service.find(params,'_id name description', function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    },

    findById: function(id, callback){
        Service.findById(id, function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    },
    
    newReservation: function (id, username, day, name, callback) {

        Service.findById(id, function(err, result){
            if(err){
                callback(err, null);
                return;
            }

            let reserveDate = new Reservation({username: username, day: day, name: name});

            result.reservation.push(reserveDate);

            result.save(function(err, reservationResult){
                if(err){
                    callback(err, null);
                    return;
                }

                callback(null, reservationResult);
            });
        });
        
    },

    findReservation: function (params, callback) {
        Service.find(params, 'reservation', function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    }

};