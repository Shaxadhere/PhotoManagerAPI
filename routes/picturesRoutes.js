const express = require('express')
const router = express.Router()
const {List, Create} = require('../controllers/picturesController')

router.get('/pictures', List);
router.post('/pictures/create', Create)

module.exports = router
