import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";

interface propsType {
  img: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<propsType> = ({ img, name, price }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative">
      <img
        className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-t-lg"
        src={img}
        alt={name}
      />

      <div className="space-y-2 relative p-4">
        <div className="text-yellow-400 flex gap-[2px] text-[18px] sm:text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>

        <h3 className="font-medium text-sm sm:text-base">{name}</h3>

        <h3 className="font-medium text-xl sm:text-2xl text-red-600">
          {price}
        </h3>

        <div className="absolute -top-4 right-2 bg-[#184D47] text-white text-[24px] sm:text-[28px] w-[45px] sm:w-[50px] h-[45px] sm:h-[50px] rounded-full grid place-items-center cursor-pointer">
          <AiOutlineShopping />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
