import hero_image_1 from "../assets/hero_img_1.jpg";
import hero_image_2 from "../assets/hero_img_2.jpg";
import chinese from "../assets/chinese.jpg";

import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container mx-auto px-5 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            className="w-full h-[500px] md:h-[600px] xl:h-[700px] object-cover rounded-lg"
            src={hero_image_1}
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-10 ml-4 top-[50%] -translate-y-[50%] space-y-2 sm:space-y-4">
            <p className="text-sm sm:text-lg md:text-xl hidden sm:block">
              100% Original Food
            </p>
            <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold">
              Fast Food Best Quality
            </h2>
            <p className="text-gray-500 text-sm md:text-lg pt-2 sm:pt-4">
              Starting At
            </p>
            <div className="font-medium text-red-600 text-xl md:text-2xl lg:text-4xl sm:pb-4 pb-2">
              $15.74
            </div>
            <div className="bg-[#184D47] hover:bg-[#179957] text-white rounded-full w-fit flex items-center gap-2 md:gap-4 px-3 md:px-5 py-2 text-sm md:text-lg cursor-pointer">
              Shop Now <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative">
            <img
              className="w-full h-[250px] md:h-[300px] xl:h-[350px] object-cover rounded-lg"
              src={hero_image_2}
              alt="hero image2"
            />
            <div className="absolute max-w-[300px] sm:ml-8 ml-4 top-[50%] -translate-y-[50%] space-y-1 sm:space-y-2">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">
                Best Healthy Fruits
              </h2>
              <p className="text-gray-500 text-sm md:text-lg pt-1">
                Starting At
              </p>
              <div className="font-medium text-red-600 text-lg md:text-2xl sm:text-3xl">
                $25
              </div>
              <div className="bg-[#184D47] hover:bg-[#179957] text-white rounded-full w-fit flex items-center gap-2 px-3 md:px-5 py-2 text-sm md:text-lg cursor-pointer">
                Shop Now <FaArrowRight />
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              className="w-full h-[250px] md:h-[300px] xl:h-[350px] object-cover rounded-lg"
              src={chinese}
              alt="hero image3"
            />
            <div className="absolute max-w-[300px] sm:ml-8 ml-4 top-[50%] -translate-y-[50%] space-y-1 sm:space-y-2">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold">
                Best Yummy Chinese
              </h2>
              <p className="text-gray-500 text-sm md:text-lg pt-1">
                Starting At
              </p>
              <div className="font-medium text-red-600 text-lg md:text-2xl sm:text-3xl">
                $15
              </div>
              <div className="bg-[#184D47] hover:bg-[#179957] text-white rounded-full w-fit flex items-center gap-2 px-3 md:px-5 py-2 text-sm md:text-lg cursor-pointer">
                Shop Now <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
