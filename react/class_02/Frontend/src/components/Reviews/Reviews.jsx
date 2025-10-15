import React from 'react';

const Reviews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
          Customer Love
        </h2>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">
            See what our customers are saying about their Nedz Collection pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replace these with actual story highlights from Instagram */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/reviews/review-1.jpg`}
                alt="Customer review"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">"Absolutely in love with my custom bracelet! The quality is amazing 💕"</p>
              <p className="text-sm text-gray-500">- @customer.name</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/reviews/review-2.jpg`}
                alt="Customer review"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">"The locket is exactly what I wanted. Perfect size and beautiful design ✨"</p>
              <p className="text-sm text-gray-500">- @another.customer</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/reviews/review-3.jpg`}
                alt="Customer review"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">"Amazing service and the packaging was so beautiful! Will definitely order again 😍"</p>
              <p className="text-sm text-gray-500">- @happy.customer</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={`https://www.instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-purple-600 text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 transition-colors duration-150"
          >
            See More Reviews on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;