import products from '../data/products.js';

class ProductController {
  getAllProducts(req, res) {
    try {
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
  }

  getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = products.find(p => p.id === parseInt(id));
      
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
  }

  getProductsByCategory(req, res) {
    try {
      const { category } = req.params;
      const filteredProducts = products.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
      );

      if (filteredProducts.length === 0) {
        return res.status(404).json({ message: 'No products found in this category' });
      }

      res.json(filteredProducts);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
  }

  addProduct(req, res) {
    try {
      const { title, price, description, category, material, isCustomizable } = req.body;
      
      if (!req.file) {
        return res.status(400).json({ message: 'No image provided' });
      }

      const newProduct = {
        id: products.length + 1,
        title,
        price: parseFloat(price),
        description,
        image: `/products/${req.file.filename}`,
        category,
        material,
        isCustomizable: isCustomizable === 'true'
      };

      products.push(newProduct);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: 'Error adding product', error: error.message });
    }
  }

  deleteProduct(req, res) {
    try {
      const id = parseInt(req.params.id);
      const index = products.findIndex(p => p.id === id);
      
      if (index === -1) {
        return res.status(404).json({ message: 'Product not found' });
      }

      products.splice(index, 1);
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default ProductController;