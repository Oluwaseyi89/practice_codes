const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerSchema = new Schema({
    last_name: {
        type: String,
        required: true        
    },
    first_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    street_add: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;