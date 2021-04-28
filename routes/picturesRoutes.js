const express = require('express')
const router = express.Router()
const {List, Create, PictureById, Read} = require('../controllers/picturesController')

router.get('/pictures/:pictureId', Read)
router.get('/pictures', List)
router.post('/pictures/create', Create)

router.param('pictureId', PictureById)
module.exports = router
