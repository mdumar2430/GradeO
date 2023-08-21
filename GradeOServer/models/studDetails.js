const mongoose = require("mongoose");

const studDetails = mongoose.Schema({
    rollNo:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    mark1:{
        type: Number,
        required: true
    },
    mark2:{
        type: Number,
        required: true
    },
    mark3:{
        type: Number,
        required: true
    },
    mark4:{
        type: Number,
        required: true
    },
    mark5:{
        type: Number,
        required: true
    },
});

const studDet = module.exports = mongoose.model('Details', studDetails);