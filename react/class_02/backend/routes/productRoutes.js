import express from 'express';
import ProductController from '../controllers/productController.js';
import upload from '../middleware/uploadMiddleware.js';
import jwt from 'jsonwebtoken';

const router = express.Router();
const productController = new ProductController();

// Middleware to verify admin token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Public routes
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.get('/category/:category', productController.getProductsByCategory);

// Admin routes (protected)
router.post('/', verifyToken, upload.single('image'), productController.addProduct);
router.delete('/:id', verifyToken, productController.deleteProduct);

export default router;