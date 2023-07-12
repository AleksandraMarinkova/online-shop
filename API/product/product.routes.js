const router = require("express").Router();
const ProductController = require("./product.controller");

// http://localhost:3000/product

// 1. Get all products
// http://localhost:3000/product
router.get("/", ProductController.getAllProducts);
// 2. Get product by id
// http://localhost:3000/product/64ad21af419c9708e36a726d
router.get("/:id", ProductController.getProductById);
// 3. Create product
// http://localhost:3000/product
router.post("/", ProductController.createProduct);
// 4. Update product
// http://localhost:3000/product/64ad21af419c9708e36a726d
router.patch("/:id", ProductController.updateProduct);
// 5. Delete product
// http://localhost:3000/product/64ad21af419c9708e36a726d
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
