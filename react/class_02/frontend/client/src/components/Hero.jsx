import { useState } from "react";

export default function Hero() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/message");
      const data = await response.json();
      setMessage(data.message);
      console.log(response);
      
    } catch (error) {
      console.error("Error fetching message:", error);
      setMessage("Failed to connect to backend.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-[80vh] bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg max-w-2xl">
        Fast, Modern, and Fully Connected with Node.js + React + Tailwind.
      </p>
      <button
        onClick={fetchMessage}
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-200 transition"
      >
        Get Started
      </button>

      {message && (
        <p className="mt-6 text-xl bg-white/20 px-4 py-2 rounded-lg">
          {message}
        </p>
      )}
    </section>
  );
}
