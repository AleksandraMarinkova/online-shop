const ProductService = require("./product.service");

class ProductController {
  // 1. Get all products
  static async getAllPrducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // 2. Get product by id
  static async getProductById(req, res) {
    try {
      const productId = req.params.id;
      const product = await ProductService.getProductId(productId);
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // 3. Create product
  static async createProduct(req, res) {
    try {
      console.log(req.params);
      const productData = req.body;
      console.log(productData);
      const newProduct = await ProductService.createProduct(productData);
      console.log(newProduct);
      res.status(200).send(newProduct);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // 4. Update product
  // 5. Delete product
}

module.exports = ProductController;
