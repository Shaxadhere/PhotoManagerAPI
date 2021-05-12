const mongoose = require('mongoose')
const crypto = require('crypto')
const uuid = require('uuid').v1

const userSchema = mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 2,
        trim: true
    },
    Email: {
        type: String, 
        required: true,
    },
    ProfilePicture: {
        data: buffer,
        contentType: String,
        required: false
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String
})

userSchema.virtual('password')
.set(function(){
    this._password = password
    this.salt = uuid()
    this.hashed_password = encryptPassword(password)
})
.get(function(){
    return this._password
})

userSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password){
        return crypto.createHmac('sha1', this.salt)
        .update(password)
        .digest('hex')
    }
}

module.exports = mongoose.model("User", userSchema)