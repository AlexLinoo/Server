const { Schema, model, default: mongoose } = require("mongoose");


const productSchema = new Schema(
    {
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        name: {
            type: String,
            required: [true, 'El nombre es obligatorio']

        },
        image: {
            type: String,

        },
        description: {
            type: String,
            required: [true, 'La descripcion es obligatoria']
        },
        type: {
            type: String,
            enum: ['Ropa', 'Juguetes', 'Material Escolar', 'Otros'],
            required: [true, 'Selecciona el tipo de producto']

        },
        state: {
            type: String,
            enum: ['Nuevo', 'Semi-Nuevo'],
            required: [true, 'Selecciona el estado del producto']

        },

        status: {
            type: String,
            enum: ['offered', 'donated'],
            default: 'offered'
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
