const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        trim: true,
        maxlength: 42,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
    },
    hashed_password: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('Users', userSchema)