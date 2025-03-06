import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import FruitCollectCard from "../components/FruitCollectCard";
import king from "../assets/Kung Pao Chicken (宫保鸡丁).jpg";
import lom from "../assets/Lo Mein (捞面).jpg";
import wanton from "../assets/Wonton Noodle Soup.jpg";
import corn from "../assets/Chicken Corn Soup.jpg";
import fried from "../assets/XO Sauce Fried Rice.jpg";

const ChineseFoodPage = () => {
  const dishes = [
    { id: 1, name: "Kung Pao Chicken (宫保鸡丁)", oldPrice: "$5", newPrice: "$4", img: king },
    { id: 2, name: "Lo Mein (捞面)", oldPrice: "$3", newPrice: "$2.5", img: lom },
    { id: 3, name: "Turnip Cake (萝卜糕)", oldPrice: "$2", newPrice: "$4", img: corn },
    { id: 4, name: "Szechuan Beef (四川牛肉)", oldPrice: "$5", newPrice: "$4", img: wanton },
    { id: 5, name: "Mongolian Beef (蒙古牛肉)", oldPrice: "$5", newPrice: "$2.5", img: lom },
    { id: 6, name: "Orange Chicken (陈皮鸡)", oldPrice: "$7", newPrice: "$4", img: fried },
  ];

  return (
    <div className="container mx-auto px-5 pt-10">
      <div className="flex items-center justify-between mb-6">
        <Link to="/" className="text-[#184D47] px-4 rounded-lg hover:text-[#179957] text-2xl flex items-center">
          <IoArrowBack className="text-3xl" />
        </Link>
        <h2 className="text-3xl font-bold text-center flex-grow text-[#184D47]">Chinese Food Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dishes.map((dish) => (
          <FruitCollectCard
            key={dish.id}
            img={dish.img}
            name={dish.name}
            oldPrice={dish.oldPrice}
            newPrice={dish.newPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ChineseFoodPage;
