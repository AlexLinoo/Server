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
            type: String,
            enum: ['Ropa', 'Juguetes', 'Material Escolar', 'Otros'],

        },
        state: {
            type: String,
            enum: ['Nuevo', 'Semi-Nuevo'],

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
