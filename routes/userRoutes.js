const express = require('express')
const router = express.Router()
const {Create, List} = require('../controllers/userController')

router.post('/signup', Create)
router.get('/users', List)

module.exports = router