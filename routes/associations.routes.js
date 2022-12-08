const router = require('express').Router()
const { isAuthenticated } = require('../middleware/jwt.middleware')
const { getAllAssociations, uploadAssociation, getOneAssociation } = require("../controllers/association.controller")


router.get("/", getAllAssociations)

router.post("/uploadAssociation", isAuthenticated, uploadAssociation)

router.get("/getOneAssociation/:association_id", getOneAssociation)


module.exports = router