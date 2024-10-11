import { BrowserRouter, Routes, Route } from "react-router-dom"; // Updated imports for v6
import Cta from "./components/Cta";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import VideoSection from "./components/VideoSection";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-livvic">
        <NavBar />
        <div className="max-w-7xl mx-auto pt-24 md:pt-72 px-2">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <FeatureSection />
                  <VideoSection />
                  <Cta />
                  <Frame />
                  <Footer />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />{" "}
            {/* Use element prop */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
