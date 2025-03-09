import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useSelector(
    (state: RootState) => state.cart.cartItems.length
  );

  return (
    <nav className="container mx-auto px-5 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium">Logo</h1>

        <div className="relative w-full max-w-[500px] hidden lg:block">
          <input
            className="bg-[#f3f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product..."
          />
          <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500 size-[20]" />
        </div>

        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>

          <div className="hidden lg:flex gap-4">
            <div className="border border-gray-400 rounded-full w-[50px] h-[50px] grid place-items-center text-xl">
              <AiOutlineUser />
            </div>

            <Link
              to="/cart"
              className="relative border border-gray-400 rounded-full w-[50px] h-[50px] grid place-items-center text-xl"
            >
              <AiOutlineShoppingCart />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-[20px] h-[20px] flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col items-center gap-4">
          <input
            className="bg-[#f3f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product..."
          />
          <div className="flex gap-4">
            <div className="border border-gray-400 rounded-full w-[50px] h-[50px] grid place-items-center text-xl">
              <AiOutlineUser />
            </div>

            <Link
              to="/cart"
              className="relative border border-gray-400 rounded-full w-[50px] h-[50px] grid place-items-center text-xl"
            >
              <AiOutlineShoppingCart />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-[20px] h-[20px] flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
