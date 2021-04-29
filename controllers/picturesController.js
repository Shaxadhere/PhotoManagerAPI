const formidable = require('formidable')
const _ = require('lodash')
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
    req.picture.picture = undefined
    return res.status(200).json({Picture: req.picture})
}

exports.List = (req, res) => {
    Picture.find()
    .select('-picture')
    .populate('fk_date')
    .exec((err, pictures) => {
        if(err || !pictures){
            return res.status(400).json({message: "Could not fetch Pictures"})
        }
        res.status(200).json({pictures})
    })
}

exports.ListForUser = (req, res) => {
    Picture.find()
    .select("-picture")
    .populate('fk_date')
    .exec((err, pictures) => {
        if(err || !pictures){
            return res.status(400).json({message: "Could not fetch pictures"})
        }
        res.staus(200).json({pictures})
    })
}

exports.Create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtentions = true
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({message: "Could not upload a picture"})
        }
        let picture = new Picture(fields)
        if(files.picture){
            if(files.picture.size > 1000000){
                return res.status(400).json({message: "Picture size must be less than 1 mb"})
            }
            picture.picture.data = fs.readFileSync(files.picture.path)
            picture.picture.contentType = files.picture.type
        }
        picture.save((err, data) => {
            if(err){
                return res.status(400).json({message: "Could not add picture"})
            }
            res.status(200).json({"picture": data})
        })
    })
}

exports.Remove = (req, res) => {
    let picture = req.picture
    picture.remove((err) => {
        if(err){
            return res.status(400).json({message: "Could not remove picture"})
        }
        res.status(200).json({message: "Picture removed successfully"})
    })
}

exports.Update = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtentions = true
    form.parse(req, (err, fields, files) => {
        if(err){
            return res.status(400).json({message: "Could not upload new picture"})
        }
        
        let picture = req.picture
        picture = _.extend(picture, fields)

        if(files.picture){
            if(files.picture > 1000000){
                return res.status(400).json({message:"Image files must be less than 1 mb in size"})
            }
            picture.picture.data = fs.readFileSync(files.picture.path)
            picture.picture.contentType = files.picture.type
        }

        picture.save((err, data) => {
            if(err){
                return res.status(400).json({message: "Could not update picture"})
            }
            res.status(200).json({data})
        })
    })
}