const { Product } = require('../models');

class ProductRepository {
  constructor() {
    this.ProductModel = Product;
  }

  async createProduct(product) {
    return await this.ProductModel.create(product);
  }

  async updateProduct(id, productData) {
    return await this.ProductModel.update(productData, { where: { id } });
  }

  async getAllProducts() {
    return await this.ProductModel.findAll();
  }

  async getProductById(id) {
    return await this.ProductModel.findByPk(id);
  }

  async deleteProduct(id) {
    return await this.ProductModel.destroy({ where: { id } });
  }

  async decreaseQuantity(productId, quantity) {
    const product = await this.ProductModel.findByPk(productId);
    if (product.quantity < quantity) {
      throw new Error('Not enough product in stock');
    }
    return await this.ProductModel.update({ quantity: product.quantity - quantity }, { where: { id: productId } });
}


  

}

module.exports = {
  ProductRepository: new ProductRepository()
};