const { Schema, model, default: mongoose } = require("mongoose");

const associationSchema = new Schema(
    {
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        name: {
            type: String,
            required: [true, 'el nombre es obligatorio']

        },
        address: {
            type: String,
            required: [true, 'la dirección es obligatorio']

        },
        description: {
            type: String,
            required: [true, 'la descripción es obligatoria']

        },
        needs: {
            type: String,
            enum: ['Ropa', 'Juguetes', 'Material Escolar', 'Otros'],

        },
        children: {
            type: Number
        },
        image: {
            type: String
        },

        donated: [{
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }]
    },
    {
        timestamps: true
    }
);

const Association = model("Association", associationSchema);

module.exports = Association;