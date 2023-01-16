const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    prod_id: {
        type: String,
        required: true        
    },
    prod_name: {
        type: String,
        required: true
    },
    prod_price: {
        type: String,
        required: true
    },
    stock_qty: {
        type: String,
        required: false
    },
    prod_img: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;