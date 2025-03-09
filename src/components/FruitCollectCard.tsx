import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface FruitProps {
  img: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  onAddToCart: () => void;
}

const FruitCollectCard: React.FC<FruitProps> = ({
  img,
  name,
  oldPrice,
  newPrice,
  onAddToCart,
}) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative p-2 w-full max-w-sm mx-auto">
      <img
        className="w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] object-cover rounded-t-lg"
        src={img}
        alt={name}
      />

      <div className="space-y-1 relative p-3 text-center md:text-left">
        <div className="text-yellow-400 flex justify-center md:justify-start gap-[2px] text-[16px] sm:text-[18px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>

        <h3 className="font-medium text-sm sm:text-base text-gray-800">
          {name}
        </h3>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2">
          <h3 className="font-medium text-lg sm:text-xl text-red-600">
            {newPrice}
          </h3>
          <p className="text-gray-500 line-through text-sm">{oldPrice}</p>
        </div>

        <button
          onClick={onAddToCart}
          className="bg-[#184D47] text-white px-4 py-2 mt-2 rounded-lg hover:bg-[#179957] w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FruitCollectCard;
