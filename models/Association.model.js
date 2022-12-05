const { Schema, model, default: mongoose } = require("mongoose");

const associationSchema = new Schema(
    {
        owner: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        name: {
            type: String,

        },
        address: {
            type: String,

        },
        description: {
            type: String,

        },
        needs: {
            enum: ['clothes', 'toys', 'school', 'others'],

        },
        children: {
            type: Number
        },
        image: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Association = model("Association", associationSchema);

module.exports = Association;