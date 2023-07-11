const Product = require("./product.model");

class ProductService {
  // 1. Get all products
  static async getAllProducts() {
    const products = await Product.find({});
    return products;
  }
  // 2. Get product by id
  static async getProductId(productId) {
    const product = await Product.findById(productId);
    return product;
  }
  // 3. Create product
  static async createProduct(productData) {
    const product = new Product(productData);
    console.log(product);
    await product.save();
    return product;
  }
  // 4. Update product
  // 5. Delete product
}

module.exports = ProductService;
