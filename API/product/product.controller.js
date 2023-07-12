const ProductService = require("./product.service");

class ProductController {
   //1.Get all products
   static async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //2.Get by ID
  static async getProductById(req, res) {
    try {
      const productId = req.params.id;
      const product = await ProductService.getProductById(productId);
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  //3.Create product
  static async createProduct(req, res) {
    try {
      const productData = req.body;
      console.log(productData);
      const newProduct = await ProductService.createProduct(productData);
      console.log(newProduct);
      res.status(200).send(newProduct);
    } catch (error) {
      res.status(400).send(error);
    }
  }


  //4.Update Product
  static async updateProduct(req, res) {
    try {
      const productId = req.params.id;
      const productData = req.body;
      const product = await ProductService.updateProduct(
        productId,
        productData
      );
      console.log(product);
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  //5.Delete Product
  static async deleteProduct(req, res) {
    try {
      const productId = req.params.id;
      console.log(productId);
      const product = await ProductService.deleteProduct(productId);
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = ProductController;
