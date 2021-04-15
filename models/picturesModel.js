const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const picturesSchema = new mongoose.Schema({
    fk_date:{
        type: ObjectId,
        ref: 'Dates',
        required: true
    },
    fk_user:{
        type: ObjectId,
        ref: 'Users',
        required: true
    },
    picture: {
        data: Buffer,
        contentType: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        trim: true,
        maxlength: 1000
    }
})

module.exports = mongoose.model('Pictures', picturesSchema);