import { IoMailOpenOutline } from "react-icons/io5";

const NewsLetter = () => {
  return (
    <div className="mt-16 bg-[#184D47] px-5 sm:px-10">
      <div className="container mx-auto py-8 flex flex-col lg:flex-row justify-between items-center text-white gap-6 lg:gap-8">
        <div className="flex flex-shrink-0 items-center gap-4 text-center lg:text-left">
          <IoMailOpenOutline className="text-[50px] sm:text-[60px]" />
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Sign up To Our Newsletters
            </h3>
            <p className="text-sm sm:text-base">
              ...and receive a $20 coupon on your first shopping
            </p>
          </div>
        </div>

        <div className="w-full max-w-[500px]">
          <div className="bg-white rounded-full flex items-center px-3 py-2">
            <input
              className="py-3 px-4 w-full text-black outline-none text-sm sm:text-base rounded-full"
              type="email"
              placeholder="Enter your email address..."
            />
            <button className="bg-[#184D47] text-white py-2 px-5 rounded-full text-sm sm:text-base hover:bg-[#179957] whitespace-nowrap flex-shrink-0">
              Subscribe!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
