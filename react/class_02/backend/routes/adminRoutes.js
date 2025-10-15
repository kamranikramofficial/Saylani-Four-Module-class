import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Admin credentials (in production, these should be in a database)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Login route
// Test route to check environment variables (remove in production)
router.get("/test-env", (req, res) => {
  res.json({
    username_set: !!process.env.ADMIN_USERNAME,
    password_set: !!process.env.ADMIN_PASSWORD,
    expected_username: ADMIN_USERNAME,
  });
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Log the received credentials (remove in production)
    console.log("Login attempt:", {
      username,
      receivedPassword: password,
      expectedUsername: ADMIN_USERNAME,
      expectedPassword: ADMIN_PASSWORD,
    });

    // Check username and password
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    // Validate credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Generate JWT token
      const token = jwt.sign({ username, role: "admin" }, JWT_SECRET, {
        expiresIn: "1M",
      });

      // Send success response
      // return res.json({
      //   token,
      //   message: "Login successful",
      // });

      res.cookie("token", token, { httpOnly: true });
      return res.redirect("/admin");
    }

    // Invalid credentials
    return res.status(401).json({
      message: "Invalid username or password",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Server error during login",
    });
  }
});

export default router;
