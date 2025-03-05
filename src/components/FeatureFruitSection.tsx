import ProductCard from "./ProductCard";
import fruit1 from "../assets/fruit1.jpg";
import fruit2 from "../assets/fruit2.jpg";
import fruit3 from "../assets/fruit3.jpg";
import fruit4 from "../assets/fruit4.jpg";
import fruit5 from "../assets/fruit5.jpg";

const data = [
  { id: 0, img: fruit5, name: "Dried Mango", price: "$5500" },
  { id: 1, img: fruit2, name: "Organic Apple", price: "$4500" },
  { id: 2, img: fruit3, name: "Fresh Banana", price: "$3500" },
  { id: 3, img: fruit4, name: "Sweet Orange", price: "$5000" },
];

const FeatureFruitSection = () => {
  return (
    <div className="container mx-auto px-5 pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits and Vegetables</h3>
          <p className="text-gray-600 mt-2">
            Buy farm-fresh fruits and vegetables online at the best prices.
          </p>
        </div>

        <div className="flex space-x-4 mt-4 lg:mt-0">
          <button className="feature_btn bg-[#184D47] hover:bg-[#179957] text-white px-4 py-1 rounded-full text-sm">
            Fruits
          </button>
          <button className="text-gray-600 hover:text-accent text-sm">
            Vegetables
          </button>
          <button className="text-gray-600 hover:text-accent text-sm">
            Bread and Bakery
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <img
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
            src={fruit1}
            alt="banner"
          />
        </div>

        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureFruitSection;
