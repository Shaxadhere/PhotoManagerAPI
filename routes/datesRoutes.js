const express = require('express')
const router = express.Router()
const {List} = require('../controllers/datesController')

router.get('/', List)
