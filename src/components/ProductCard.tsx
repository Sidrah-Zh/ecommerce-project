import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  route: string;
}
const ProductCard: React.FC<Product> = ({ id, img, name, price, route }) => {
  const dispatch = useDispatch();

  return (
    <Link to={route} className="block hover:scale-105 transition-transform h-full">
      <div className="border border-gray-200 hover:border-gray-300 rounded-lg relative h-full flex flex-col">
        <img className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] object-cover rounded-t-lg" src={img} alt={name} />

        <div className="space-y-2 relative p-4 flex flex-col flex-grow">
          <div className="text-yellow-400 flex gap-[2px] text-[18px] sm:text-[20px]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>

          <h3 className="font-medium text-sm sm:text-base">{name}</h3>

          <h3 className="font-medium text-xl sm:text-2xl text-red-600">${price}</h3>

          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addToCart({ id, img, name, price, quantity: 1 }));
            }}
            className="absolute -top-4 right-2 bg-[#184D47] text-white text-[24px] sm:text-[28px] w-[45px] sm:w-[50px] h-[45px] sm:h-[50px] rounded-full grid place-items-center cursor-pointer"
          >
            <AiOutlineShopping />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
