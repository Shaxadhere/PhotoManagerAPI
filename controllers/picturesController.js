const formidable = require('formidable')
const lodash = require('lodash')
const fs = require('fs')
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
    let form = new formidable.IncomingForm()
    form.keepExtentions = true
    form.parse(req, (err, fields, files) => {
        if(err){
            return res.status(500).json({message: "Image could not be uploaded"})
        }
        let picture = new Picture(fields)
        if(files.photo){
            picture.photo.data = fs.readFileSync(files.photo.path)
            picture.photo.contentType = files.photo.type
        }
        picture.save((err, result) => {
            if(err){
                return res.status(400).json({message: "Picture could not be added"})
            }
            res.status(200).json({Picture: result})
        })
    })
}

exports.Remove = (req, res) => {

}

exports.Update = (req, res) => {

}