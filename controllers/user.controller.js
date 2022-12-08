const User = require("./../models/User.model")


const getAllUsers = (req, res, next) => {

    User
        .find()
        .select({ username: 1, profileImage: 1 })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
}

const getOneUser = (req, res, next) => {
    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}
const deleteUser = (req, res, next) => {
    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}
const editUser = (req, res, next) => {
    const { user_id } = req.params
    const { name, description, type, state } = req.body

    Product
        .findByIdAndUpdate(user_id, { name, description, type, state })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports =
{
    getAllUsers,
    getOneUser,
    deleteUser,
    editUser
}