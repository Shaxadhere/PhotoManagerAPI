const express = require('express')
const router = express.Router()
const {List, Create, PictureById, Read, Update, Remove} = require('../controllers/picturesController')

router.get('/pictures/:pictureId', Read)
router.get('/pictures', List)
router.post('/pictures/create', Create)
router.put('/pictures/:pictureId', Update)
router.delete('/pictures/:pictureId', Remove)

router.param('pictureId', PictureById)
module.exports = router
