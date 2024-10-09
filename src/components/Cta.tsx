import { useEffect, useRef, useState } from "react";

const bankLogos = [
  { src: "/images/bank1.png", alt: "Coop Bank" },
  { src: "/images/bank2.png", alt: "Stanbic Bank" },
  { src: "/images/bank3.png", alt: "Absa Bank" },
  { src: "/images/bank4.png", alt: "KCB Bank" },
  { src: "/images/bank5.png", alt: "I&M Bank" },
];

const Cta = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    logoRefs.current.forEach((logo) => {
      if (logo) {
        observer.observe(logo);
      }
    });

    return () => {
      logoRefs.current.forEach((logo) => {
        if (logo) {
          observer.unobserve(logo);
        }
      });
    };
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-6">Our partner banks</h2>

      <div className="overflow-hidden">
        <div className="flex space-x-8 w-[200%] animate-slide">
          {bankLogos.concat(bankLogos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              data-index={index}
              ref={(el) => (logoRefs.current[index] = el)}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`w-32 h-32 mx-auto transition-transform duration-500 ${
                  activeIndex === index ? "grayscale-0" : "grayscale"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cta;
