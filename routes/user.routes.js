const router = require("express").Router()

const User = require("./../models/User.model")

router.get("/", (req, res, next) => {

    User
        .find()
        .select({ username: 1, profileImage: 1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})
router.get("/getOneUser/:user_id", (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router