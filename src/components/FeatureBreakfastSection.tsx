import ProductCard from "./ProductCard";
import breakfast1 from "../assets/breakfast1.jpg";
import breakfast2 from "../assets/breakfast2.jpg";
import breakfast3 from "../assets/breakfast3.jpg";
import breakfast4 from "../assets/brakfast4.jpg";
import breakfast5 from "../assets/brakfast5.jpg";

const data = [
  { id: 0, img: breakfast1, name: "Fresh Tomato", price: "$500" },
  { id: 1, img: breakfast2, name: "Crunchy Crisps", price: "$400" },
  { id: 2, img: breakfast3, name: "Banana Shake", price: "$300" },
  { id: 3, img: breakfast4, name: "Almond Organic", price: "$200" },
];

const FeatureBreakfastSection = () => {
  return (
    <div className="container mx-auto px-5 pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Breakfast and Dairy</h3>
          <p className="text-gray-600 mt-2">
            Buy best quality breakfast online from big-basket store near you.
          </p>
        </div>

        <div className="flex space-x-4 mt-4 lg:mt-0">
          <button className="feature_btn bg-[#184D47] hover:bg-[#179957] text-white px-4 py-1 rounded-full text-sm">
            Eggs and Diary
          </button>
          <button className="text-gray-600 hover:text-accent text-sm">
            Pizza
          </button>
          <button className="text-gray-600 hover:text-accent text-sm">
            Snacks
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <img
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
            src={breakfast5}
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

export default FeatureBreakfastSection;
