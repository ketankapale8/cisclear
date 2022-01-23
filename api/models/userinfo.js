const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required: true ,
        unique : true
    },
    lastname : {
        type : String,
        required : true , 
        unique : true
    },
    middlename : {
        type : String,
        // required : true , 
        unique : true
    },
    suffixid : {
        type: Number
    },
    employeetype : {
        type : String,
        enum : ['yes' , 'no'],
        // required : true
    },
    costcenter : {
        type: Number
    },
    dataid : {
        type: Number
    },

},{timestamps: true})

module.exports = mongoose.model("userinfo", userSchema)