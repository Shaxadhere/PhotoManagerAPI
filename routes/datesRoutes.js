const express = require('express')
const router = express.Router()
const {List, Create} = require('../controllers/datesController')

router.get('/dates', List)
router.post('/dates/create', Create)

module.exports = router
