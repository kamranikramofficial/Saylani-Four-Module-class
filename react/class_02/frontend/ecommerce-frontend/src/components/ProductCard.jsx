import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition">
      <div>
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-lg font-bold">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
