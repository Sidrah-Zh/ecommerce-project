import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import Category from "./components/Category";
import FeatureBreakfastSection from "./components/FeatureBreakfastSection";
import FeatureFruitSection from "./components/FeatureFruitSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <FeatureFruitSection />
      <FeatureBreakfastSection />
      <BannerSection />
      <BlogSection />
      <NewsLetter />
      <FeatureSection />
      <Footer/>
    </>
  );
}

export default App;
