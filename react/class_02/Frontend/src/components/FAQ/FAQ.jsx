import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I place an order?",
      answer: `To place an order, simply:
        1. Browse our collection
        2. Click the "Order on Instagram" button on any item
        3. Send us a DM with the product details
        4. We'll guide you through the payment and delivery process`
    },
    {
      question: "Do you offer customization?",
      answer: "Yes! We offer customization on most of our items. Send us a message on Instagram with your requirements, and we'll work together to create your perfect piece."
    },
    {
      question: "What are your payment methods?",
      answer: "We accept various payment methods including bank transfers and digital payments. Specific payment details will be provided during order confirmation."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery time varies depending on your location and the type of item (custom or ready-made). We'll provide you with an estimated delivery time when you place your order."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we're focusing on local deliveries. Please contact us on Instagram for specific shipping inquiries."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <span className={`ml-6 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a 
              href={`https://www.instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Message us on Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;