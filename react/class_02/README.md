# 💎 Nedz Collection — Project Documentation

**Nedz Collection** is a full-stack jewelry storefront showcasing a modern e-commerce architecture built with React, Vite, Tailwind CSS, and Express.js.  
It demonstrates a secure, scalable, and elegant web application designed for jewelry product display, admin management, and image handling.

---

## 🧱 Overview

Nedz Collection combines a **React + Vite frontend** with an **Express.js backend**, connected through RESTful APIs.  
The system provides both public and admin interfaces — allowing product browsing for users and protected product management for administrators.

The backend handles image uploads and authentication using JWT, while the frontend consumes these APIs to dynamically render products and details.

---

## 🎨 System Design

### **Frontend**
The client-side application is built with **React 19** and styled using **Tailwind CSS** for a clean and responsive UI.  
Routing is handled by **React Router**, enabling seamless navigation between pages such as the storefront, admin login, and dashboard.

Key modules include:
- **Product Catalog:** Displays all jewelry items with filtering and category views.  
- **Product Cards:** Dynamically rendered components showing product details, images, and contact options.  
- **Admin Dashboard:** A protected route accessed only through a verified JWT token stored in localStorage.  

The frontend consumes environment-based API URLs, allowing smooth transitions between development and production environments.

---

### **Backend**
The backend server is powered by **Express.js**, serving as the data and image API for the application.  
It exposes REST endpoints for product management, authentication, and static file serving.

Key backend modules:
- **Product Controller:** Handles listing, filtering, creation, and deletion of products.  
- **Admin Controller:** Authenticates the admin user and issues JWTs for secure access.  
- **Middleware:** Includes Multer for image uploads, JWT verification, and centralized error handling.  
- **Data Layer:** Demo data is stored in-memory within `data/products.js` for local testing.  

Routes are organized as:
- `/api/products` → Public product endpoints  
- `/api/admin` → Protected admin operations  

---

## ⚙️ Application Flow

1. **Frontend Initialization:**  
   The React app loads environment variables and renders the storefront.  

2. **Product Fetching:**  
   Products are requested from the backend via `GET /api/products` and displayed in responsive grids.  

3. **Admin Authentication:**  
   Admin logs in through `/api/admin/login`, receiving a JWT that grants access to protected operations.  

4. **Product Management:**  
   Admin can add or delete products using POST and DELETE endpoints, with image uploads handled by Multer.  

5. **Static File Handling:**  
   Product images are served from the backend `/images` directory, referenced using `VITE_IMAGE_BASE_URL`.  

---

## 🔒 Security

- All admin routes are protected using **JWT-based authentication**.  
- Uploaded files are validated and stored securely through Multer middleware.  
- Environment variables are used to isolate sensitive data and API keys.  
- Default credentials are meant for local testing only and must be changed in production.  

---

## 🧠 API Summary

| Category | Method | Endpoint | Description |
|-----------|---------|-----------|--------------|
| Products | GET | `/api/products` | List all products |
| Products | GET | `/api/products/:id` | Get product by ID |
| Products | GET | `/api/products/category/:category` | Filter by category |
| Products | POST | `/api/products` | Add new product (Admin only) |
| Products | DELETE | `/api/products/:id` | Delete product (Admin only) |
| Admin | POST | `/api/admin/login` | Authenticate admin and issue JWT |

---

## 📂 Project Architecture

Nedz-Collection/
│
├── Frontend/
│ ├── index.html
│ ├── src/
│ │ ├── main.jsx
│ │ ├── App.jsx
│ │ └── components/
│ └── tailwind.config.js
│
├── Backend/
│ ├── server.js
│ ├── controllers/
│ ├── routes/
│ ├── middleware/
│ └── data/products.js
│
└── README.md

---

## 🧩 Key Features

- Full-stack architecture with clear separation of client and server logic  
- JWT-secured admin panel for product management  
- Image upload and static hosting via Multer  
- Responsive product grid with category filtering  
- Environment-driven configuration for API, contact, and social links  
- Centralized error handling and modular backend design  

---

## 🪶 Design Philosophy

Nedz Collection emphasizes **clarity, security, and simplicity**:
- Clean, minimal interface inspired by modern jewelry brands  
- Lightweight React structure optimized with Vite for fast builds  
- Backend APIs designed for scalability and easy integration with real databases  

---

## 🌐 Deployment

The application supports **serverless deployment** for both frontend and backend via **Vercel**.  
The backend is configured to function as a serverless API endpoint, while the frontend can be deployed as a static site consuming that API.

---

## 🧾 Summary

Nedz Collection demonstrates how a modern e-commerce solution can be built using:
- React for the frontend UI  
- Express for backend APIs  
- JWT for security  
- Tailwind for styling  
- Multer for media uploads  

This project serves as a model for developing secure, responsive, and maintainable full-stack web applications.

---

## 🪙 Credits

Developed as a demonstration of a modern jewelry storefront concept — combining elegant design with robust backend logic and secure admin functionality.
