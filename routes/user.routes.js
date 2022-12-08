const router = require("express").Router()
const { getAllUsers, getOneUser, deleteUser, editUser } = require("../controllers/user.controller")

router.get("/", getAllUsers)

router.get("/getOneUser/:user_id", getOneUser)

router.delete("/deleteUser/:user_id", deleteUser)

router.put("editUser/:user_id", editUser)



module.exports = router