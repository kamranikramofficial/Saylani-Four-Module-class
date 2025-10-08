// backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend server is running...");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node.js Backend!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
