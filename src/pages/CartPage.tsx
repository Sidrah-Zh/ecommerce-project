import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-5 py-8">
      <div className="flex items-center justify-between mb-6">
        <Link
          to="/"
          className="text-[#184D47] px-4 rounded-lg hover:text-[#179957] text-2xl flex items-center"
        >
          <IoArrowBack className="text-3xl" />
        </Link>
        <h2 className="text-3xl font-bold text-center flex-grow text-[#184D47]">
          Your Cart
        </h2>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 ml-[70px]">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover border border-gray-300 shadow-md"
                />

                <div className="flex-1 px-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-red-600 font-medium">${item.price}</p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="bg-gray-300 px-3 py-1 rounded text-lg"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="bg-gray-300 px-3 py-1 rounded text-lg"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 text-white px-3 py-1 rounded shadow-md hover:bg-red-600 ml-6"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </h3>
            <Link
              to="/checkout"
              className="mt-4 inline-block bg-[#184D47] hover:bg-[#179957] text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
