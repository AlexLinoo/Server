const { findById } = require("../models/User.model")
const User = require("../models/User.model")
const Association = require("../models/Association.model")
const Product = require("./../models/Product.model")
const { findByIdAndUpdate } = require("../models/Association.model")



const getAllProducts = (req, res, next) => {

    Product
        .find()
        .select({ owner: 1, name: 1, description: 1, type: 1, state: 1, image: 1, status: 1 })
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const uploadProduct = (req, res, next) => {

    const { name, description, image, type, state, status } = req.body
    const { _id: owner } = req.payload

    Product
        .create({ name, description, image, type, state, owner, status })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneProduct = (req, res, next) => {
    const { product_id } = req.params

    Product
        .findById(product_id)
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteProduct = (req, res, next) => {
    const { product_id } = req.params

    Product
        .findByIdAndDelete(product_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

const editProduct = (req, res, next) => {
    const { product_id } = req.params
    const { name, description, type, state } = req.body

    Product
        .findByIdAndUpdate(product_id, { name, description, type, state })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getUserProducts = (req, res, next) => {

    const { _id: owner } = req.payload

    Product
        .find({ owner })
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneUserProducts = (req, res, next) => {

    const { user_id } = req.params

    Product
        .find({ owner: user_id })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getProductType = (req, res, next) => {

    Product
        .find(type)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const applyForProduct = (req, res, next) => {

    const { donated: product_id } = req.body
    const { association_id } = req.params

    Association
        .findByIdAndUpdate(association_id, { $addToSet: { donated: product_id } })
        .then(response => {
            return Product.findByIdAndUpdate(product_id, { status: 'donated' })
        })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}

const getDonations = (req, res, next) => {

    const { association_id } = req.params

    Association
        .findById(association_id)
        .select('donated')
        .populate('donated')
        .then(response => {
            res.json(response)
        })
        .catch(err => next(err))

}

const getProductFav = (req, res, next) => {

    const { product_id } = req.params

    User
        .findByIdAndUpdate(req.payload._id, { $addToSet: { favorites: product_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const quitProductFav = (req, res, next) => {

    const { product_id } = req.params

    User
        .findByIdAndUpdate(req.payload._id, { $pull: { favorites: product_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getFavProduct = (req, res, next) => {

    User
        .findById(req.payload._id)
        .select('favorites')
        .populate('favorites')
        .then(response => {
            res.json(response)
        })
        .catch(err => next(err))

}

module.exports = {
    getAllProducts,
    uploadProduct,
    getOneProduct,
    deleteProduct,
    editProduct,
    getUserProducts,
    getProductType,
    getProductFav,
    quitProductFav,
    getFavProduct,
    getDonations,
    applyForProduct,
    getOneUserProducts
}