// Product model/schema definition
export class Product {
  constructor(name, price, description, imageUrl, category) {
    this.id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.category = category;
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  // Validation method
  static validate(productData) {
    const { name, price, description, imageUrl, category } = productData;
    
    if (!name || typeof name !== 'string') {
      return { isValid: false, error: 'Name is required and must be a string' };
    }
    
    if (!price || isNaN(parseFloat(price))) {
      return { isValid: false, error: 'Price is required and must be a number' };
    }
    
    if (!description || typeof description !== 'string') {
      return { isValid: false, error: 'Description is required and must be a string' };
    }
    
    if (!imageUrl || typeof imageUrl !== 'string') {
      return { isValid: false, error: 'Image URL is required and must be a string' };
    }
    
    if (!category || typeof category !== 'string') {
      return { isValid: false, error: 'Category is required and must be a string' };
    }
    
    return { isValid: true };
  }

  // Update method
  update(updateData) {
    Object.keys(updateData).forEach(key => {
      if (key !== 'id' && key !== 'createdAt') {
        this[key] = updateData[key];
      }
    });
    this.updatedAt = new Date().toISOString();
  }
}