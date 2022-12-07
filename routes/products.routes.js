const router = require("express").Router()
const { isAuthenticated } = require('./../middleware/jwt.middleware')

const { getAllProducts, uploadProduct, getOneProduct } = require("../controllers/products.controller")


router.get("/", getAllProducts)

router.post("/uploadProduct", isAuthenticated, uploadProduct)

router.get("/getOneProduct/:product_id", getOneProduct)


module.exports = router