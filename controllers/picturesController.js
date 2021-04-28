const formidable = require('formidable')
const lodash = require('lodash')
const fs = require('fs')
const Picture = require('../models/picturesModel')

exports.PictureById = (req, res, next, id) => {
    const picture = Picture.findById(id).exec((err, picture) => {
        if(err){
            return res.status(400).json({message: "Could not find picture"})
        }
        req.picture = picture
        next()
    })
}

exports.Read = (req, res) => {
    return res.status(200).json({Picture: req.picture})
}

exports.List = (req, res) => {
    Picture.find()
    .select('-picture')
    .populate('Dates')
    .exec((err, data) => {
        if(err || !Picture){
            return res.status(400).json({message: "Could not fetch Pictures"})
        }
        res.status(200).json({pictures: data})
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
        if(files.picture){
            if(files.picture.size > 1000000){
                return res.status(400).json({message: "Image file size should be less than 1 mb"})
            }
            picture.picture.data = fs.readFileSync(files.picture.path)
            picture.picture.contentType = files.picture.type
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