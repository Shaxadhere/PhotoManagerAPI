const express = require('express')
const router = express.Router()
const {List, Create, DateById} = require('../controllers/datesController')

router.get('/dates', List)
router.get('/dates/:dateId', DateById)
router.post('/dates/create', Create)

router.param('dateId', DateById)
module.exports = router
