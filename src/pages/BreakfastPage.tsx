import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import FruitCollectCard from "../components/FruitCollectCard";
import breakfast1 from "../assets/breakfast1.jpg";
import breakfast2 from "../assets/breakfast2.jpg";
import breakfast3 from "../assets/breakfast3.jpg";
import breakfast4 from "../assets/brakfast5.jpg";
import breakfast5 from "../assets/breakfast6.jpg";
import breakfast6 from "../assets/breakfast7.jpg";
import breakfast7 from "../assets/breakfast8.jpg";
import breakfast8 from "../assets/breakfast9.jpg";
import breakfast9 from "../assets/brakfast5.jpg";
import breakfast10 from "../assets/breakfast11.jpg";
import breakfast11 from "../assets/breakfast12.jpg";
import breakfast12 from "../assets/breakfast113.jpg";

const BreakfastPage = () => {
  const breakfastItems = [
    {
      id: 1,
      name: "Pancakes with Syrup",
      oldPrice: "$8",
      newPrice: "$6",
      img: breakfast1,
    },
    {
      id: 2,
      name: "Omelette with Toast",
      oldPrice: "$6",
      newPrice: "$5",
      img: breakfast2,
    },
    {
      id: 3,
      name: "French Toast",
      oldPrice: "$7",
      newPrice: "$5.5",
      img: breakfast3,
    },
    {
      id: 4,
      name: "Granola with Yogurt",
      oldPrice: "$6",
      newPrice: "$4.5",
      img: breakfast4,
    },
    {
      id: 5,
      name: "Avocado Toast",
      oldPrice: "$9",
      newPrice: "$7",
      img: breakfast5,
    },
    {
      id: 6,
      name: "Scrambled Eggs with Sausage",
      oldPrice: "$8",
      newPrice: "$6.5",
      img: breakfast6,
    },
    {
      id: 7,
      name: "Fruit Salad",
      oldPrice: "$5",
      newPrice: "$4",
      img: breakfast7,
    },
    {
      id: 8,
      name: "Bagel with Cream Cheese",
      oldPrice: "$4",
      newPrice: "$3.5",
      img: breakfast8,
    },
    {
      id: 9,
      name: "Smoothie Bowl",
      oldPrice: "$7",
      newPrice: "$5.5",
      img: breakfast9,
    },
    {
      id: 10,
      name: "Breakfast Burrito",
      oldPrice: "$9",
      newPrice: "$7.5",
      img: breakfast10,
    },
    {
      id: 11,
      name: "Waffles with Berries",
      oldPrice: "$8",
      newPrice: "$6.5",
      img: breakfast11,
    },
    {
      id: 12,
      name: "Peanut Butter Banana Toast",
      oldPrice: "$6",
      newPrice: "$4.5",
      img: breakfast12,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-5 pt-10 flex-grow overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/"
            className="text-[#184D47] px-4 rounded-lg hover:text-[#179957] text-2xl flex items-center"
          >
            <IoArrowBack className="text-3xl" />
          </Link>
          <h2 className="text-3xl font-bold text-center flex-grow text-[#184D47]">
            Fresh Breakfast
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {breakfastItems.map((item) => (
            <div className="overflow-hidden">
              <FruitCollectCard
                key={item.id}
                img={item.img}
                name={item.name}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakfastPage;
