import Cta from "./components/Cta";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import VideoSection from "./components/VideoSection";

export default function App() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <NavBar />
      <hr className="border-b border-gray-400" />
      <HeroSection />

      <FeatureSection />

      <VideoSection />

      <Cta />

      <Frame />

      <Footer />
    </div>
  );
}
