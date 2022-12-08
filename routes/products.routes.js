const router = require("express").Router()
const { isAuthenticated } = require('./../middleware/jwt.middleware')
const { getAllProducts, uploadProduct, getOneProduct, deleteProduct, editProduct, getUserProducts } = require("../controllers/products.controller")


router.get("/", getAllProducts)

router.post("/uploadProduct", isAuthenticated, uploadProduct)

router.get("/getOneProduct/:product_id", getOneProduct)

router.delete("/deleteProduct/:product_id", isAuthenticated, deleteProduct)

router.put("/editProduct/:product_id", isAuthenticated, editProduct)

router.get("/getUserProducts", isAuthenticated, getUserProducts)


module.exports = router