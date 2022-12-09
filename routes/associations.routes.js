const router = require('express').Router()
const { isAuthenticated } = require('../middleware/jwt.middleware')
const { getAllAssociations, uploadAssociation, getOneAssociation, deleteAssociation, editAssociation } = require("../controllers/association.controller")


router.get("/", getAllAssociations)

router.post("/uploadAssociation", isAuthenticated, uploadAssociation)

router.get("/getOneAssociation/:association_id", getOneAssociation)

router.delete("/deleteAssociation/:association_id", deleteAssociation)

router.put("/editAssociation/:association_id", editAssociation)


module.exports = router