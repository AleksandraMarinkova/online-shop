const router = require("express").Router();
const ProductController = require("./product.controller");

// http://localhost:3000/product

// 1. Get all products
router.get("/", ProductController.getAllPrducts);
// 2. Get product by id
router.get("/:id",ProductController.getProductById)
// 3. Create product
router.post("/", ProductController.createProduct);
// 4. Update product
// 5. Delete product

module.exports = router;
