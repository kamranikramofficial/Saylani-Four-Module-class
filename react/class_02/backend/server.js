import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("E-commerce API is running...");
});

const PORT = process.env.PORT || 4000;
const startServer = async () => {
  try {
    await connectDB(); 
    console.log(" MongoDB Connected Successfully");
    app.listen(PORT, () =>
      console.log(` Server running on port ${PORT}`)
    );
  } catch (error) {
    console.error(" Failed to connect to MongoDB:", error.message);
    process.exit(1); 
  }
};

startServer();
