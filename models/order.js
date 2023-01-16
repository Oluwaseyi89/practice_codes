// const Customer = require('./customer');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    customer: {
        type: String,
        required: true        
    },
    customer_add: {
        type: String,
        required: true
    },
    customer_phone: {
        type: String,
        required: true
    },
    customer_email: {
        type: String,
        required: true
    },
    cart_items: {
        type: Array,
        required: true
    },
    total_amt: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

