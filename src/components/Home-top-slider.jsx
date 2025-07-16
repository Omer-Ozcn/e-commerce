import { useState } from "react";
import slideImage1 from "../assets/slider-img/top-slider-1.jpg";
import slideImage2 from "../assets/slider-img/top-slider-2.jpg";

export default function HomeSlider() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image: slideImage1,
      title: "NEW COLLECTION",
      subtitle: "SUMMER 2020",
      description: "We know how large objects will act, but things on a small scale.",
    },
    {
      image: slideImage2,
      title: "NEW COLLECTION",
      subtitle: "SUMMER 2020",
      description: "We know how large objects will act, but things on a small scale.",
    },
  ];

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const { image, title, subtitle, description } = slides[index];

  return (
    <div className="relative w-[414px] h-[753px] mx-auto bg-white border border-[#DEDEDE] rounded-[5px] overflow-hidden">
      {/* Slide image */}
      <img src={image} alt="Slide" className="absolute inset-0 w-full h-full object-cover" />

      {/* Overlay container */}
      <div className="absolute top-[48px] left-1/2 transform -translate-x-1/2 w-[414px] h-[705px] flex flex-col items-center gap-[80px] px-4">
        <div className="flex flex-col items-center gap-[30px] py-[48px] w-[419px] h-[560px]">
          <div className="flex flex-col items-center gap-[35px] w-[599px] h-[381px]">
            <p className="text-[16px] leading-[24px] font-bold text-white tracking-[0.1px]">{subtitle}</p>
            <h1 className="text-[40px] leading-[50px] font-bold text-white text-center tracking-[0.2px] w-[268px] h-[100px]">
              {title}
            </h1>
            <p className="text-[20px] leading-[30px] font-normal text-[#FAFAFA] text-center tracking-[0.2px] w-[291px] h-[90px]">
              {description}
            </p>

            <div className="w-[221px] h-[62px]">
              <button className="w-full h-full bg-[#2DC071] text-white text-[24px] leading-[32px] font-bold rounded-[5px]">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      {/* Left Arrow */}
        <button
        onClick={handlePrev}
        className="absolute w-[40px] h-[70px] left-[40px] top-[35%] -translate-y-1/2 text-white text-4xl bg-transparent border-none outline-none p-0"
        >
        ❮
        </button>

        {/* Right Arrow */}
        <button
        onClick={handleNext}
        className="absolute w-[40px] h-[70px] right-[40px] top-[35%] -translate-y-1/2 text-white text-4xl bg-transparent border-none outline-none p-0"
        >
        ❯
        </button>
    </div>
  );
}
