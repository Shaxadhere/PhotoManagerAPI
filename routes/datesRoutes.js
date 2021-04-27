const express = require('express')
const router = express.Router()
const {List, Create, DateById, Read, Remove, Update} = require('../controllers/datesController')

router.get('/dates', List)
router.get('/dates/:dateId', DateById, Read)
router.post('/dates/create', Create)
router.put('/dates/:dateId', DateById, Update)
router.delete('/dates/:dateId', DateById, Remove)

router.param('dateId', DateById)
module.exports = router
