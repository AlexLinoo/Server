const router = require("express").Router()

const upLoad = require("../controllers/upload.controller")
const uploader = require('./../config/cloudinary.config')

router.post('/image', uploader.single('imageData'), upLoad)

module.exports = router