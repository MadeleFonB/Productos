const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema =new Schema({
    code:{
        type: String,
        trim: true,
        unique: true,
    },
    name: {
        type: String,
        trim: true,   
    },
    description: {
    type: String,
    trim: true,
    },
    price:{
    type: Number,
    },
    stock:{
    type: Number,
    default: 0,    
    },


});

module.exports = mongoose.model('Products', productsSchema);