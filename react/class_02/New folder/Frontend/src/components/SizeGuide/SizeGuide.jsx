import React from 'react';

const SizeGuide = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
          Size Guide
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bracelet Size Guide */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-semibold text-gray-900">
              Bracelet Sizing
            </h3>
            <div className="relative">
              <img 
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/bracelet-measurement.jpg`}
                alt="How to measure your wrist"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-medium text-purple-900 mb-3">How to Measure</h4>
              <ol className="space-y-2 text-gray-700">
                <li>1. Wrap a measuring tape or string around your wrist</li>
                <li>2. If using string, mark where it overlaps and measure with a ruler</li>
                <li>3. Add 1.5-2cm to your wrist measurement for a comfortable fit</li>
              </ol>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Wrist Size</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Bracelet Size</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Fit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">14-15cm</td>
                    <td className="px-4 py-3 text-sm text-gray-700">16-17cm</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Snug</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">15-16cm</td>
                    <td className="px-4 py-3 text-sm text-gray-700">17-18cm</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Comfort</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700">16-17cm</td>
                    <td className="px-4 py-3 text-sm text-gray-700">18-19cm</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Loose</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Locket Size Guide */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-semibold text-gray-900">
              Locket & Chain Length
            </h3>
            <div className="relative">
              <img 
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/necklace-length.jpg`}
                alt="Necklace length guide"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-medium text-purple-900 mb-3">Chain Lengths</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 16" (40cm) - Choker length</li>
                <li>• 18" (45cm) - Standard length, sits at collarbone</li>
                <li>• 20" (50cm) - Below collarbone</li>
                <li>• 24" (60cm) - Long pendant length</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-3">Popular Choices</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Small pendants: 16-18" chain</li>
                <li>• Medium pendants: 18-20" chain</li>
                <li>• Large pendants: 20-24" chain</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need help with sizing? Message us on{' '}
            <a 
              href={`https://www.instagram.com/${import.meta.env.VITE_INSTAGRAM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Instagram
            </a>
            {' '}for assistance!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;