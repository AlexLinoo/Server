const Association = require('./../models/Association.model')

const getAllAssociations = (req, res, next) => {

    Association
        .find()
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const uploadAssociation = (req, res, next) => {

    const { name, description, image, address, needs, children } = req.body
    const { _id: owner } = req.payload

    Association
        .create({ name, description, image, address, needs, children, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneAssociation = (req, res, next) => {

    const { association_id } = req.params

    Association
        .findById(association_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getAllAssociations,
    uploadAssociation,
    getOneAssociation
}