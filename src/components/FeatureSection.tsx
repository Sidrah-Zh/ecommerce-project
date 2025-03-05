import {
  LiaShippingFastSolid,
  LiaGiftSolid,
  LiaMoneyBillWaveSolid,
} from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const data = [
  {
    title: "Free Shipping",
    icon: <LiaShippingFastSolid />,
  },
  {
    title: "Support 24/7",
    icon: <FiPhoneCall />,
  },
  {
    title: "Best Price Guarantee",
    icon: <LiaMoneyBillWaveSolid />,
  },
  {
    title: "Free Pickups",
    icon: <LiaGiftSolid />,
  },
];

const FeatureSection = () => {
  return (
    <div className="container mx-auto px-5 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((el) => (
          <FeatureCard key={el.title} title={el.title} icon={el.icon} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
