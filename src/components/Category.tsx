import CategoryCard from "./CategoryCard";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const data = [
  {
    id: 1,
    name: "Fast Food",
    count: "24 Products",
    image: img1,
  },
  {
    id: 2,
    name: "Sweet Desserts",
    count: "18 Products",
    image: img2,
  },
  {
    id: 3,
    name: "Cold Beverages",
    count: "30 Products",
    image: img5,
  },
  {
    id: 4,
    name: "Green Vegetarian",
    count: "15 Products",
    image: img3,
  },
  {
    id: 5,
    name: "Desi Cuisine",
    count: "25 Products",
    image: img3,
  },
  {
    id: 6,
    name: "Chinese Dishes",
    count: "17 Products",
    image: img6,
  },
  {
    id: 7,
    name: "Sea Food",
    count: "18 Products",
    image: img2,
  },
  {
    id: 8,
    name: "Hot Chai",
    count: "30 Products",
    image: img4,
  },
];

const Category = () => {
  return (
    <div className="container mx-auto px-4 sm:px-5 pt-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Browse Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
        {data.map((el) => (
          <CategoryCard
            key={el.id}
            image={el.image}
            name={el.name}
            count={el.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
