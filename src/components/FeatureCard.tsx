interface propsType {
  title: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<propsType> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-gray-300 h-[50px] w-[50px] flex items-center justify-center text-[#184D47] text-[24px] rounded-full">
        {icon}
      </div>

      <div>
        <h3 className="font-medium text-lg sm:text-xl">{title}</h3>
        <p className="text-gray-500 text-sm sm:text-[14px]">
          Lorem ipsum dolor sit.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
