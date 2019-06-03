const mongoose = require('mongoose');
const ReservationSchema = require('./Reservation').schema;

const ServiceSchema = new mongoose.Schema({
    name: String,
    description: String,
    body: String,
    status: {
        type: Number,
        default: 1
    },
    created: {
        type: Date,
        required: true,
        default: new Date()
    },
    reservation: [ReservationSchema]
});

mongoose.model('Service', ServiceSchema);

module.exports = mongoose.model('Service');