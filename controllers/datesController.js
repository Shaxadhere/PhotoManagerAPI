const Date = require('../models/datesModel')

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
