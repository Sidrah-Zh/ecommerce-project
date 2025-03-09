import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Category from "./components/Category";
import FeatureFruitSection from "./components/FeatureFruitSection";
import FeatureBreakfastSection from "./components/FeatureBreakfastSection";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import NewsLetter from "./components/NewsLetter";
import FeatureSection from "./components/FeatureSection";

const FruitsPage = lazy(() => import("./pages/FruitsPage"));
const ChineseFoodPage = lazy(() => import("./pages/ChineseFoodPage"));
const BreakfastPage = lazy(() => import("./pages/BreakfastPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
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
            <Route
              path="/fruits"
              element={
                <Suspense
                  fallback={
                    <div className="text-center py-10">Loading Fruits...</div>
                  }
                >
                  <FruitsPage />
                </Suspense>
              }
            />
            <Route
              path="/chinese-food"
              element={
                <Suspense
                  fallback={
                    <div className="text-center py-10">
                      Loading Chinese Food...
                    </div>
                  }
                >
                  <ChineseFoodPage />
                </Suspense>
              }
            />
            <Route
              path="/breakfast"
              element={
                <Suspense
                  fallback={
                    <div className="text-center py-10">
                      Loading Breakfast...
                    </div>
                  }
                >
                  <BreakfastPage />
                </Suspense>
              }
            />
            <Route
              path="/cart"
              element={
                <Suspense
                  fallback={
                    <div className="text-center py-10">Loading Cart...</div>
                  }
                >
                  <CartPage />
                </Suspense>
              }
            />

            <Route
              path="/checkout"
              element={
                <Suspense
                  fallback={
                    <div className="text-center py-10">Loading Checkout...</div>
                  }
                >
                  <CheckoutPage />
                </Suspense>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
