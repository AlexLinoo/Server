const Product = require("./../models/Product.model")



const getAllProducts = (req, res, next) => {

    Product
        .find()
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const uploadProduct = (req, res, next) => {
    const { name, description, image, type, state, owner } = req.body

    Product
        .create({ ...req.body, owner: req.payload._id })
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
    const { user_id } = req.params

    Product
        .find(user_id, { owner: req.payload_id })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getAllProducts,
    uploadProduct,
    getOneProduct,
    deleteProduct,
    editProduct,
    getUserProducts
}