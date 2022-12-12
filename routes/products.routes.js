const router = require("express").Router()
const { isAuthenticated } = require('./../middleware/jwt.middleware')
const { getAllProducts, uploadProduct, getOneProduct, deleteProduct, editProduct, getUserProducts, getProductType, getProductFav, quitProductFav, getFavProduct, donateProduct } = require("../controllers/products.controller")


router.get("/", getAllProducts)

router.post("/uploadProduct", isAuthenticated, uploadProduct)

router.get("/getOneProduct/:product_id", getOneProduct)

router.delete("/deleteProduct/:product_id", isAuthenticated, deleteProduct)

router.put("/editProduct/:product_id", isAuthenticated, editProduct)

router.get("/getUserProducts", isAuthenticated, getUserProducts)

router.get("/getProductType", getProductType)

router.post("/favProduct/:product_id", isAuthenticated, getProductFav)

router.post("/noFavProduct/:product_id", isAuthenticated, quitProductFav)

router.get("/getFavProduct", isAuthenticated, getFavProduct)

router.get("/donateProduct", isAuthenticated, donateProduct)

router.get("/getDonatedProduct", isAuthenticated, getFavProduct)


module.exports = router