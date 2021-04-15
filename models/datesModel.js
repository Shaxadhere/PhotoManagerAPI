const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const datesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim:true,
        maxlength: 100
    },
    date:{
        type: Date,
        required: true,
    },
    place:{
        type: String,
        required: true,
        maxlength: 100
    },
    fk_user: {
        type: ObjectId,
        ref: 'Users',
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Dates', datesSchema)