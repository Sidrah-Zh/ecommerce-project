import BlogCard from "./BlogCard";
import foodblog1 from "../assets/foodblog1.jpg";
import foodblog2 from "../assets/foodblog2.jpg";
import foodblog3 from "../assets/foodblog3.jpg";

const data = [
  {
    img: foodblog1,
    title: "Healthy Food, Healthy Life",
    date: "Aug 27, 2023",
    comment: 8,
  },
  {
    img: foodblog2,
    title: "Balanced Diet for a Better Tomorrow",
    date: "Sep 1, 2023",
    comment: 5,
  },
  {
    img: foodblog3,
    title: "How Fresh Fruits Boost Immunity",
    date: "Sep 5, 2023",
    comment: 12,
  },
];

const BlogSection = () => {
  return (
    <div className="container mx-auto px-5 pt-16">
      <h2 className="font-bold text-2xl sm:text-3xl">Latest News</h2>
      <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
        Present posts in the best way to highlight interesting moments of your
        blogs.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pt-8">
        {data.map((el, index) => (
          <BlogCard
            key={index}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
