interface propsType {
  image: string;
  name: string;
  count: string;
}

const CategoryCard: React.FC<propsType> = ({ image, name, count }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg w-full h-[120px] flex justify-between items-center p-4">
      <div className="space-y-2">
        <h3 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
          {name}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base">{count}</p>
      </div>

      <div className="flex-shrink-0 w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]">
        <img
          className="w-full h-full object-cover rounded-full max-w-full"
          src={image}
          alt={name}
        />
      </div>
    </div>
  );
};

export default CategoryCard;
