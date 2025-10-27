import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";

dotenv.config();

const app = express();
app.use(express.json());

//  Connect to MongoDB (only once)
if (!global.mongoose) {
  global.mongoose = mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log(" MongoDB connected"))
    .catch((err) => console.error(" MongoDB connection error:", err));
}

//  Routes
app.get("/", (req, res) => {
  res.send(" E-commerce Backend API is running ...");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.post("/products", async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = new Product({ name, price, description });
    await product.save();
    res.json({ message: " Product created!", product });
  } catch (err) {
    res.status(500).json({ error: "Failed to create product" });
  }
});

//  For Vercel serverless export
export default app;
