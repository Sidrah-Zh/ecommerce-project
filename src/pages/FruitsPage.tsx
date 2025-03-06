import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import FruitCollectCard from "../components/FruitCollectCard";
import fruit1 from "../assets/fruit1.jpg";
import fruit2 from "../assets/fruit3.jpg";
import fruit3 from "../assets/fruit4.jpg";
import fruit4 from "../assets/hero_img_2.jpg";
import fruit5 from "../assets/fruit5.jpg";
import fruit6 from "../assets/img2.jpg";

const FruitsPage = () => {
  const fruits = [
    { id: 1, name: "Fresh Apple", oldPrice: "$5", newPrice: "$4", img: fruit1 },
    {
      id: 2,
      name: "Organic Banana",
      oldPrice: "$3",
      newPrice: "$2.5",
      img: fruit2,
    },
    { id: 3, name: "Fresh Kiwi", oldPrice: "$5", newPrice: "$4", img: fruit3 },
    {
      id: 4,
      name: "Fresh Pineapple",
      oldPrice: "$5",
      newPrice: "$4",
      img: fruit4,
    },
    { id: 5, name: "Fresh Apple", oldPrice: "$5", newPrice: "$4", img: fruit5 },
    { id: 7, name: "Fresh Apple", oldPrice: "$5", newPrice: "$4", img: fruit6 },
    { id: 8, name: "Fresh Apple", oldPrice: "$5", newPrice: "$4", img: fruit1 },
    {
      id: 9,
      name: "Organic Banana",
      oldPrice: "$3",
      newPrice: "$2.5",
      img: fruit2,
    },
    { id: 10, name: "Fresh Kiwi", oldPrice: "$5", newPrice: "$4", img: fruit3 },
    {
      id: 11,
      name: "Fresh Pineapple",
      oldPrice: "$5",
      newPrice: "$4",
      img: fruit4,
    },
    {
      id: 12,
      name: "Fresh Apple",
      oldPrice: "$5",
      newPrice: "$4",
      img: fruit5,
    },
    {
      id: 13,
      name: "Fresh Apple",
      oldPrice: "$5",
      newPrice: "$4",
      img: fruit6,
    },
  ];

  return (
    <div className="container mx-auto px-5 pt-10">
      <div className="flex items-center justify-between mb-6">
        <Link
          to="/"
          className="text-[#184D47] px-4 rounded-lg hover:text-[#179957] text-2xl flex items-center"
        >
          <IoArrowBack className="text-3xl" />
        </Link>
        <h2 className="text-3xl font-bold text-center flex-grow text-[#184D47]">
          Fruits Collection
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {fruits.map((fruit) => (
          <FruitCollectCard
            key={fruit.id}
            img={fruit.img}
            name={fruit.name}
            oldPrice={fruit.oldPrice}
            newPrice={fruit.newPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default FruitsPage;
