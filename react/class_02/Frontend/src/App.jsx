import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductCard from "./components/ProductCard/ProductCard";
import SizeGuide from "./components/SizeGuide/SizeGuide";
import Reviews from "./components/Reviews/Reviews";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ProtectedRoute from "./components/Admin/ProtectedRoute";
import './index.css';

// Constants
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_PRODUCTS = import.meta.env.VITE_API_PRODUCTS

function App() {
  const [products, setProducts] = useState([])

  async function fetchProducts() {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`${API_BASE_URL}${API_PRODUCTS}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products. Please try again later.');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    !!localStorage.getItem('adminToken')
  );

  const handleAdminLogin = (token) => {
    setIsAdminAuthenticated(true);
  };

  const MainContent = () => (
    <>
      <Navbar />
      <Hero />

      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
            Our Collection
          </h2>
          
          {error ? (
            <div className="flex flex-col items-center py-8 px-4">
              <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">Unable to load products</h3>
              <p className="text-gray-600 text-center mb-4">{error}</p>
              <button 
                onClick={() => {
                  setError(null);
                  fetchProducts();
                }}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : isLoading ? (
            <div className="flex flex-col items-center py-8">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600 mb-4"></div>
              <p className="text-lg text-gray-600">Loading our collection...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {products.map((item, index) => (
                <ProductCard key={index} {...item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <div id="size-guide">
        <SizeGuide />
      </div>

      <div id="reviews">
        <Reviews />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <Footer />
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route 
          path="/admin/login" 
          element={<AdminLogin onLogin={handleAdminLogin} />} 
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard onProductAdded={fetchProducts} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
