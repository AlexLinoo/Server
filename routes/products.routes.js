const router = require("express").Router()

const { getAllProducts, uploadProduct, getOneProduct } = require("../controllers/products.controller")


router.get("/", getAllProducts)

router.post("/uploadProduct", uploadProduct)

router.get("/getOneProduct/:product_id", getOneProduct)


module.exports = router