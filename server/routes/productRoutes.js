import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { Product } from '../models/Product.js';

const router = express.Router();
const PRODUCTS_FILE = path.join(process.cwd(), 'server/data/products.json');

// Helper function to read products from file
async function readProducts() {
  try {
    const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading products:', error);
    return [];
  }
}

// Helper function to write products to file
async function writeProducts(products) {
  try {
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Error writing products:', error);
    throw error;
  }
}

// GET /api/products - Get all products
router.get('/', async (req, res) => {
  try {
    const products = await readProducts();
    const { category, search } = req.query;
    
    let filteredProducts = products;
    
    if (category && category !== 'all') {
      filteredProducts = filteredProducts.filter(
        product => product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (search) {
      filteredProducts = filteredProducts.filter(
        product => 
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET /api/products/:id - Get single product
router.get('/:id', async (req, res) => {
  try {
    const products = await readProducts();
    const product = products.find(p => p.id === req.params.id);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// POST /api/products - Create new product
router.post('/', async (req, res) => {
  try {
    const validation = Product.validate(req.body);
    if (!validation.isValid) {
      return res.status(400).json({ error: validation.error });
    }
    
    const products = await readProducts();
    const newProduct = new Product(
      req.body.name,
      parseFloat(req.body.price),
      req.body.description,
      req.body.imageUrl,
      req.body.category
    );
    
    products.push(newProduct);
    await writeProducts(products);
    
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// PUT /api/products/:id - Update product
router.put('/:id', async (req, res) => {
  try {
    const validation = Product.validate(req.body);
    if (!validation.isValid) {
      return res.status(400).json({ error: validation.error });
    }
    
    const products = await readProducts();
    const productIndex = products.findIndex(p => p.id === req.params.id);
    
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    const updatedProduct = {
      ...products[productIndex],
      ...req.body,
      price: parseFloat(req.body.price),
      updatedAt: new Date().toISOString()
    };
    
    products[productIndex] = updatedProduct;
    await writeProducts(products);
    
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// DELETE /api/products/:id - Delete product
router.delete('/:id', async (req, res) => {
  try {
    const products = await readProducts();
    const productIndex = products.findIndex(p => p.id === req.params.id);
    
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    const deletedProduct = products.splice(productIndex, 1)[0];
    await writeProducts(products);
    
    res.json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

export default router;