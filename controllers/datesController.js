const Date = require('../models/datesModel')

exports.DateById = (req, res, next, id) => {
    const date = Date.findById(id).exec((err, date) => {
        if(err || !date){
            return res.status(400).json({message: "Could not find date"})
        }
        req.date = date
        next()
    })
}

exports.List = (req, res) => {
    Date.find().exec((err, dates) => {
        if (err || !dates) {
            return res.status(400).json({message: "Could not fetch dates from server"})
        }
        res.status(200).json({dates})
    })
}

exports.Create = (req, res) => {
    const date = new Date(req.body)
    date.save((err, date) => {
        if (err) {
            return res.status(400).json({message: "Could not insert date"})
        }
        res.status(201).json({date})
    })
}

exports.Remove = (req, res) => {
    const date = req.date
    date.remove((err) => {
        if(err) {
            return res.status(400).json({message: "Could not delete date"})
        }
        res.status(200).json({message: "Date deleted successfully"})
    })
}

exports.Update = (req, res) => {
    const date = req.date
}