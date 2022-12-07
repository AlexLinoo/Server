const Product = require("./../models/Product.model")



const getAllProducts = (req, res, next) => {

    Product
        .find()
        .select({ name: 1, image: 1, description: 1, state: 1, type: 1, owner: 1 })
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

module.exports = {
    getAllProducts,
    uploadProduct,
    getOneProduct
}