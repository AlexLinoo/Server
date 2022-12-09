const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'el nombre es obligatorio']
    },
    profileImage: {
      type: String
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    email: {
      type: String,
      required: [true, 'el email es obligatorio'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'la contraseña debe tener min. 3 caracteres']
    },
    favorites: [{
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
    ]
  },
  {
    timestamps: true
  }
);

userSchema.pre('save', function (next) {

  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword

  next()

})

const User = model("User", userSchema);

module.exports = User;
