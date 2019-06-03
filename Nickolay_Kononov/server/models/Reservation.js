const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({

    username: String,
    day: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        default: 1
    },
    name: String

});



mongoose.model('Reservation', ReservationSchema);
// ReservationSchema.day.find().forEach(function (el) {
//     let parts = el.split('T');
//     el.date = parts[0];
//     ReservationSchema.day.save(el);
// });

module.exports = mongoose.model('Reservation');