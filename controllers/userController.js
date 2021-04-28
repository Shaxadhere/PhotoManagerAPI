const User = require('../models/userModel')

exports.Create = (req, res) => {
    const user = new User(req.body)
    user.save((err, user) => {
         if(err){
             return res.staus(400).json({message: "Could not sign you up"})
         }
         res.status(201).json({user})
    })
}

exports.List = (req, res) => {
    User.find().exec((err,  users) => {
        if(err){
            return res.status(500).json({message: "Something went wrong"})
        }
        res.status(200).json({users})
    })
}