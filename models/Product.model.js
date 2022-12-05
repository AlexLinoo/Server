const { Schema, model, default: mongoose } = require("mongoose");

const productSchema = new Schema(
    {
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        name: {
            type: String,

        },
        image: {
            type: String,

        },
        description: {
            type: String
        },
        type: {
            enum: ['clothes', 'toys', 'school', 'others'],

        },
        state: {
            enum: ['new', 'second-hand'],

        },
        ticketImage: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Product = model("Product", productSchema);

module.exports = Product;
