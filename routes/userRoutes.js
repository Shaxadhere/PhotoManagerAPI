const express = require('express')
const router = express.Router()
const {Create} = require('../controllers/userController')

router.post('/signup', Create)

module.exports = router