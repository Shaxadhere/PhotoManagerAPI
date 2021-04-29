const express = require('express')
const router = express.Router()
const {List, Create, PictureById, Read, Update} = require('../controllers/picturesController')

router.get('/pictures/:pictureId', Read)
router.get('/pictures', List)
router.post('/pictures/create', Create)
router.put('/pictures/update/:pictureId', Update)

router.param('pictureId', PictureById)
module.exports = router
