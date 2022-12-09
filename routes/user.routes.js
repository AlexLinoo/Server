const router = require("express").Router()
const { getAllUsers, getOneUser, deleteUser } = require("../controllers/user.controller")

router.get("/", getAllUsers)

router.get("/getOneUser/:user_id", getOneUser)

router.delete("/deleteUser/:user_id", deleteUser)





module.exports = router