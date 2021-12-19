const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customersSchema =new Schema({
    cedula:{
        type:String,
        trim:true,
        unique: true,

    },
    name: {
        type: String,
        trim: true,   
    },
    lastname: {
    type: String,
    trim: true,
    },
    phone:{
    type: String,
    trim: true,    
    },


});

module.exports = mongoose.model('Customers', customersSchema);