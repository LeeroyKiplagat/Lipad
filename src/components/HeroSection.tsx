import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SlArrowRight } from "react-icons/sl";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("bank");
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const flipContent = (newTab: string) => {
    gsap
      .timeline()
      .to([textRef.current, imageRef.current], {
        duration: 0.8,
        rotateY: 90,
        opacity: 0,
        ease: "power2.in",
        onComplete: () => {
          setActiveTab(newTab);
        },
      })
      .to([textRef.current, imageRef.current], {
        duration: 0.8,
        rotateY: 0,
        opacity: 1,
        ease: "power2.out",
        delay: 0.1, // Slight delay for better visual transition
      });
  };

  const handleTabClick = (tab: string) => {
    if (activeTab !== tab) {
      flipContent(tab);
      resetAutoFlip();
    }
  };

  const startAutoFlip = () => {
    intervalRef.current = setInterval(() => {
      const nextTab = activeTab === "bank" ? "merchant" : "bank";
      flipContent(nextTab);
    }, 3000);
  };

  const resetAutoFlip = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoFlip();
  };

  useEffect(() => {
    startAutoFlip();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeTab]);

  return (
    <div className="md:flex justify-center py-12 p-2">
      {/* Tabs */}
      <div>
        <div className="border rounded-full bg-gray-200 w-64 p-2 flex space-x-6 mt-8 justify-center">
          <button
            onClick={() => handleTabClick("bank")}
            className={`py-2 px-6 rounded-full ${
              activeTab === "bank"
                ? "bg-white text-[#21C463] font-bold"
                : "bg-gray-200 text-[#21C463] "
            }`}
          >
            Bank
          </button>
          <button
            onClick={() => handleTabClick("merchant")}
            className={`py-2 px-6 rounded-full ${
              activeTab === "merchant"
                ? "bg-white text-[#21C463] font-bold"
                : "bg-gray-200 text-[#21C463] "
            }`}
          >
            Merchant
          </button>
        </div>

        <div className="max-w-1/2 pt-8 absolute" ref={textRef}>
          {activeTab === "bank" ? (
            <div>
              <h2 className="md:text-4xl font-bold text-gray-800 mb-4">
                All your <br /> business payments <br />
                on one platform
              </h2>
              <p className="text-gray-600">
                Collect online on socials, across all your branches
              </p>
            </div>
          ) : (
            <div>
              <h2 className="md:text-4xl font-bold text-gray-800 mb-4">
                Effortless <br />
                Transactions, Endless <br /> Possibilities
              </h2>
              <p className="text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Aenean ut vulputate nisi.
              </p>
            </div>
          )}
        </div>
        <div className="pt-60">
          <button className="flex border bg-[#263470] p-4 space-x-4 rounded-full items-center font-bold text-white ">
            <p>Get Started</p>
            <i>
              <SlArrowRight />
            </i>
          </button>
        </div>
      </div>

      <div ref={imageRef} className="mt-8 md:pl-56">
        {activeTab === "bank" ? (
          <img
            src="/images/hero_bank.png"
            alt="Bank Platform"
            className="md:w-[481px] md:h-[559px] object-cover"
          />
        ) : (
          <img
            src="/images/hero_merchant.png"
            alt="Merchant Platform"
            className="md:w-[481px] md:h-[559px] rounded-lg object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
