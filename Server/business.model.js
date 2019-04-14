const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Product = new Schema({
    product_name: {
        type: String
    },
    product_code: {
        type: String
    },
    product_price: {
        type: Number
    }
},{
    collection: 'product'
});

module.exports = mongoose.model('Product', Product);