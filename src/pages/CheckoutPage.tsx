import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

const CheckoutPage = () => {
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !address) {
      alert("Please fill in all fields!");
      return;
    }
    setOrderPlaced(true);
  };

  return (
    <div className="container mx-auto px-5 py-10 min-h-screen flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <Link
          to="/"
          className="text-[#184D47] px-4 rounded-lg hover:text-[#179957] text-2xl flex items-center"
        >
          <IoArrowBack className="text-3xl" />
        </Link>
        <h2 className="text-3xl font-bold text-center flex-grow text-[#184D47]">
          Checkout
        </h2>
      </div>

      {orderPlaced ? (
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-[#184D47]">Thank You!</h3>
          <p className="text-lg text-gray-600 mt-2">
            Your order has been placed successfully.
          </p>
          <p className="text-lg text-gray-600">
            You will receive an email confirmation shortly.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block bg-[#184D47] hover:bg-[#179957] text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <>
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold text-[#184D47] mb-3">
                  Order Summary
                </h3>
                <ul className="divide-y divide-gray-300">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between py-3 text-gray-700"
                    >
                      <span>
                        {item.name} (x{item.quantity})
                      </span>
                      <span className="font-medium text-red-600">
                        ${(item.quantity * item.price).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold mt-4 text-right text-[#184D47]">
                  Total:{" "}
                  <span className="text-red-600">${totalPrice.toFixed(2)}</span>
                </h3>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#184D47] mb-4">
                  Billing Details
                </h3>
                <form onSubmit={handleCheckout} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-[#184D47] outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-[#184D47] outline-none"
                  />
                  <textarea
                    placeholder="Shipping Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring focus:ring-[#184D47] outline-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-[#184D47] hover:bg-[#179957] text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300"
                  >
                    Place Order
                  </button>
                </form>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
