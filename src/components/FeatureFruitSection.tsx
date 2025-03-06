import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import fruit1 from "../assets/fruit1.jpg";
import fruit2 from "../assets/fruit3.jpg";
import fruit3 from "../assets/fruit4.jpg";
import fruit4 from "../assets/hero_img_2.jpg";
import fruit5 from "../assets/fruit5.jpg";

const data = [
  { id: 0, img: fruit1, name: "Fresh Apple", price: "$5", route: "/fruits" },
  { id: 1, img: fruit2, name: "Organic Banana", price: "$3", route: "/fruits" },
  { id: 2, img: fruit3, name: "Fresh Kiwi", price: "$5", route: "/fruits" },
  {
    id: 3,
    img: fruit4,
    name: "Fresh Pineapple",
    price: "$5",
    route: "/fruits",
  },
];

const FeatureFruitSection = () => {
  return (
    <div className="container mx-auto px-5 pt-16">
      <div className="lg:flex justify-between items-center mb-6">
        <div>
          <h3 className="font-medium text-2xl text-[#184D47]">
            Fruits Collection
          </h3>
          <p className="text-gray-600 mt-2">
            Buy the best quality fruits online from big-basket store near you.
          </p>
        </div>

        <Link to="/fruits">
          <button className="feature_btn bg-[#184D47] hover:bg-[#179957] text-white px-4 py-2 rounded-full text-sm">
            View All Fruits
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-4">
        <Link to="/fruits" className="col-span-2 sm:col-span-1">
          <img
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg hover:scale-105 transition-transform"
            src={fruit5}
            alt="banner"
          />
        </Link>

        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
            route={el.route}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureFruitSection;
