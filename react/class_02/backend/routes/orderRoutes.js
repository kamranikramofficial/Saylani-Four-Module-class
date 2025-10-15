import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});

router.get("/", async (req, res) => {
  const orders = await Order.find()
    .populate("user")
    .populate("products.product");
  res.json(orders);
});

export default router;
