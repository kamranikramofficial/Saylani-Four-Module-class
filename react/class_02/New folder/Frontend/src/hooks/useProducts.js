import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_PRODUCTS = import.meta.env.VITE_API_PRODUCTS;

  const fetchProducts = async () => {
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
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const refetch = () => {
    fetchProducts();
  };

  return {
    products,
    isLoading,
    error,
    refetch
  };
};

export default useProducts;