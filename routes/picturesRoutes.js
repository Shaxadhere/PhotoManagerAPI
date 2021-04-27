const express = require('express')
const router = express.Router()
const {List} = require('../controllers/picturesController')

router.get('/pictures', List);

module.exports = router
