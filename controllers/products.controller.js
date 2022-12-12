const { findById } = require("../models/User.model")
const User = require("../models/User.model")
const Association = require("../models/Association.model")
const Product = require("./../models/Product.model")
const { getOneUser } = require("./user.controller")


const getAllProducts = (req, res, next) => {

    Product
        .find()
        .select({ owner: 1, name: 1, description: 1, type: 1, state: 1, image: 1 })
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const uploadProduct = (req, res, next) => {

    const { name, description, image, type, state } = req.body
    const { _id: owner } = req.payload

    Product
        .create({ name, description, image, type, state, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneProduct = (req, res, next) => {
    const { product_id } = req.params

    Product
        .findById(product_id)
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

const getProductType = (req, res, next) => {

    Product
        .find(type)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const applyForProduct = (req, res, next) => {

    const product_id = req.body

    console.log('TENEIS QUE METER ESTE ID', product_id, 'EN ELK ARRAY DE DONACIONES DE LA ASOC')

    Association
        .findByIdAndUpdate(req.payload._id, { $addToSet: { product_id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getDonations = (req, res, next) => {

    Association

        .findById(req.payload._id)
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
}