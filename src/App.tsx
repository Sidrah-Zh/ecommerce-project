import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import FruitsPage from "./pages/FruitsPage";
import ChineseFoodPage from "./pages/ChineseFoodPage";
import BreakfastPage from "./pages/BreakfastPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Category />
              <FeatureFruitSection />
              <FeatureBreakfastSection />
              <BannerSection />
              <BlogSection />
              <NewsLetter />
              <FeatureSection />
            </>
          }
        />

        <Route path="/fruits" element={<FruitsPage />} />
        <Route path="/chinese-food" element={<ChineseFoodPage />} />
        <Route path="/breakfast" element={<BreakfastPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
