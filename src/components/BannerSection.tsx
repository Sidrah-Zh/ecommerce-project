import banner_img1 from "../assets/banner_img1.jpg";
import banner_img2 from "../assets/banner_img2.jpg";

const BannerSection = () => {
  return (
    <div className="container mx-auto px-5 pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-105 h-[300px]  w-[600px]  transition-transform"
            src={banner_img1}
            alt="banner"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-105  h-[300px] w-[600px] transition-transform"
            src={banner_img2}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
