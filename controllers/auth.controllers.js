const User = require("../models/User.model")
const bcrypt = require('bcryptjs')

const jwt = require("jsonwebtoken")

const SignUp = (req, res, next) => {

    const { email, password, username, profileImage } = req.body

    User
        .create({ email, password, username, profileImage })
        .then((createdUser) => {
            const { email, username, _id } = createdUser
            const user = { email, username, _id }

            res.status(201).json({ user })
        })
        .catch(err => next(err))

}

const Login = (req, res, next) => {
    const { email, password } = req.body;

    if (email === '' || password === '') {
        res.status(400).json({ message: "Introduce el email y la contraseña" });
        return;
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "Usuario no encontrado." })
                return;
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username } = foundUser;

                const payload = { _id, email, username }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "7h" }
                )

                res.status(200).json({ authToken });
            }
            else {
                res.status(401).json({ message: "Error de autenticación" });
            }

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Internal Server Error" })
        });
}

const Verify = (req, res, next) => {
    res.status(200).json(req.payload)
}

module.exports = {
    SignUp,
    Login,
    Verify
}