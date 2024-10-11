import Cta from "./components/Cta";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import VideoSection from "./components/VideoSection";

export default function App() {
  return (
    <div className="font-livvic ">
      <NavBar />
      <div className="max-w-7xl mx-auto pt-72 px-2">
        <HeroSection />

        <FeatureSection />

        <VideoSection />

        <Cta />

        <Frame />

        <Footer />
      </div>
    </div>
  );
}
