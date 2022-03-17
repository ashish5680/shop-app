const mongoose = require('mongoose');


// Product Schema
const productSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
    },

    Oprice: {
        type: Number,
        min: 0
    },

    Nprice: {
        type: Number,
        min: 0
    },

    image: {
        type: String,
        trim: true,
        default: './images/product.jpg'
    },

    desc: {
        type: String,
        trim: true
    },

    seller: {
        type: String,
        trim: true,
        required: true
    },

    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        //reference review model ka h
        ref: 'Review'
    }]

});




// Creating Product Model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;