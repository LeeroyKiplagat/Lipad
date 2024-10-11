import { useEffect, useRef } from "react";
import gsap from "gsap";

const bankLogos = [
  { src: "/images/bank1.png", alt: "Coop Bank" },
  { src: "/images/bank2.png", alt: "Stanbic Bank" },
  { src: "/images/bank3.png", alt: "Absa Bank" },
  { src: "/images/bank4.png", alt: "KCB Bank" },
  { src: "/images/bank5.png", alt: "I&M Bank" },
];

const Cta = () => {
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const logos = logoRefs.current;

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "linear" },
    });

    tl.to(logos, {
      xPercent: -100 * (logos.length / 2),
      duration: 30,
      ease: "none",
      onRepeat: () => {
        gsap.set(logos, { xPercent: 0 });
      },
    });

    return () => {
      gsap.killTweensOf(logos);
    };
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-6">Our partner banks</h2>

      <div className="overflow-hidden relative">
        <div className="flex space-x-8 w-[200%]">
          {bankLogos.concat(bankLogos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              ref={(el) => (logoRefs.current[index] = el)}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="size-36 mx-auto transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cta;
