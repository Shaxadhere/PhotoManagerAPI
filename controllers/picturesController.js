const Picture = require('../models/picturesModel')

exports.PictureById = (req, res, next) => {

}

exports.Read = (req, res) => {
    
}

exports.List = (req, res) => {
    Picture.find().exec((err) => {
        if(err || !Picture){
            return res.status(400).json({message: "Could not fetch Pictures"})
        }
        res.status(200).json({Pictures: Picture})
    })
}

exports.Create = (req, res) => {

}

exports.Remove = (req, res) => {

}

exports.Update = (req, res) => {

}