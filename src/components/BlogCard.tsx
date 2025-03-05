interface propsType {
  img: string;
  title: string;
  date: string;
  comment: number;
}

const BlogCard: React.FC<propsType> = ({ img, title, date, comment }) => {
  return (
    <div className="space-y-4">
      <img
        className="w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt="post"
      />

      <div className="font-medium text-[#184D47] text-sm sm:text-base">
        <span>{date} /</span>
        <span> {comment} Comments</span>
      </div>

      <h3 className="font-bold text-lg sm:text-xl">{title}</h3>
    </div>
  );
};

export default BlogCard;
