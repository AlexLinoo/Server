const Product = require("./../models/Product.model")


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