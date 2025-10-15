import { useCart } from "../context/CartContext";
import API from "../api";

export default function Checkout() {
  const { cart } = useCart();

  const handleCheckout = async () => {
    await API.post("/orders", {
      user: "670f11112222abcd9999aaaa", // dummy user ID (change later)
      products: cart.map(p => ({ product: p._id, quantity: 1 })),
      totalAmount: cart.reduce((sum, item) => sum + item.price, 0),
    });
    alert("Order placed successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Confirm Order
      </button>
    </div>
  );
}
