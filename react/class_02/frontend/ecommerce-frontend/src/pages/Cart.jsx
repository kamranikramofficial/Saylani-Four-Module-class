import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item._id} className="flex justify-between items-center mb-3 border-b pb-2">
              <span>{item.name}</span>
              <div className="flex items-center gap-3">
                <span>${item.price}</span>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-xl font-bold">Total: ${total}</h2>
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
