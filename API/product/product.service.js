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
     static async updateProduct(productId,productData){
      const product=await Product.findById(productId);
      product.name=productData.name;
      product.price=productData.price;
      product.image=productData.image;
      product.description=productData.description;
      product.category=productData.category;
      await product.save();
      return product;

     }
  // 5. Delete product
  static async deleteProduct(productId){
    const product=await Product.findByIdAndDelete(productId);
  }
}

module.exports = ProductService;
