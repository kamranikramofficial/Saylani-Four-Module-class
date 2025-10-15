import React, { useState } from 'react';

const AdminDashboard = () => {
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: 'Bracelet',
    material: '',
    isCustomizable: false,
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const formData = new FormData();
      formData.append('image', image);
      Object.keys(newProduct).forEach(key => {
        formData.append(key, newProduct[key]);
      });

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Product added successfully!' });
        setNewProduct({
          title: '',
          price: '',
          description: '',
          category: 'Bracelet',
          material: '',
          isCustomizable: false,
        });
        setImage(null);
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to add product' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to connect to server' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-8">
          Admin Dashboard
        </h1>

        {message.text && (
          <div className={`mb-4 p-4 rounded ${
            message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Product Title</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              value={newProduct.title}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (PKR)</label>
            <input
              type="number"
              name="price"
              id="price"
              required
              value={newProduct.price}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              id="description"
              required
              value={newProduct.description}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            ></textarea>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              id="category"
              required
              value={newProduct.category}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="Bracelet">Bracelet</option>
              <option value="Necklace">Necklace</option>
              <option value="Bangle">Bangle</option>
              <option value="Ring">Ring</option>
            </select>
          </div>

          <div>
            <label htmlFor="material" className="block text-sm font-medium text-gray-700">Material</label>
            <input
              type="text"
              name="material"
              id="material"
              required
              value={newProduct.material}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="isCustomizable"
              id="isCustomizable"
              checked={newProduct.isCustomizable}
              onChange={handleInputChange}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="isCustomizable" className="ml-2 block text-sm text-gray-700">
              Customizable Product
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Product Image</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={handleImageChange}
              className="mt-1 block w-full"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Adding Product...' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;