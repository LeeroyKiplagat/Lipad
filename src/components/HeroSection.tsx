import { useState, useEffect } from "react";
import { SlArrowRight } from "react-icons/sl";

const heroData = [
  {
    title: "All your business payments on one platform",
    subtitle: "Collect online on socials, across all your branches",
    buttonText: "Get Started",
    imageSrc: "/images/hero_bank.png",
  },
  {
    title: "Effortless Transactions, Endless Possibilities",
    subtitle:
      "Connect with your merchants and enable online payments with ease.",
    buttonText: "Get Started",
    imageSrc: "/images/hero_merchant.png",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      handleTabClick((activeIndex + 1) % heroData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleTabClick = (index: number) => {
    setIsFlipped(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsFlipped(false);
    }, 500);
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-lg">
        <div className="ml-12 md:w-1/2 mb-8 md:mb-0">
          <div className="flex space-x-4 mb-4 border border-gray-200 w-[250px] p-2 rounded-full justify-center">
            <button
              onClick={() => handleTabClick(0)}
              className={`${
                activeIndex === 0 ? "text-buttonColor" : "text-black"
              } px-4 py-2 rounded-lg font-bold`}
            >
              Banks
            </button>
            <button
              onClick={() => handleTabClick(1)}
              className={`${
                activeIndex === 1 ? "text-buttonColor" : "text-black"
              } px-4 py-2 rounded-lg font-bold`}
            >
              Merchants
            </button>
          </div>
          <div
            className={`transition-transform duration-500 ease-in-out transform ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {heroData[activeIndex].title}
            </h1>
            <p className="text-gray-600 mb-6">
              {heroData[activeIndex].subtitle}
            </p>
            <button className="bg-[#263470] text-white px-6 py-3 rounded-full text-lg font-bold flex space-x-6 items-center">
              <p>{heroData[activeIndex].buttonText}</p>
              <i>
                <SlArrowRight />
              </i>
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <div
            className={`transition-transform duration-500 ease-in-out transform ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            <img
              src={heroData[activeIndex].imageSrc}
              alt="Hero Visual"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
