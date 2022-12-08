const router = require("express").Router()
const { uploadSingleFile } = require("../controllers/upload.controller")
const uploader = require('./../config/cloudinary.config')

router.post('/image', uploader.single('imageData'), uploadSingleFile)

module.exports = router