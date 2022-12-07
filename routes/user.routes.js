const router = require("express").Router()

const { getAllUsers, getOneUser } = require("../controllers/user.controller")

router.get("/", getAllUsers)

router.get("/getOneUser/:user_id", getOneUser)


module.exports = router