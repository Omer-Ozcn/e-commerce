import { useState } from "react";
import product1 from "../assets/SliderBottomList/bottom-slider-1.jpg";
import product2 from "../assets/SliderBottomList/bottom-slider-2.jpg";

const slides = [
  {
    image: product1,
    title: "Vita Classic Product",
    subtitle: "SUMMER 2020",
    description: "We know how large objects will act, but things on a small scale.",
    price: "16.48",
  },
  {
    image: product2,
    title: "Vita Classic Product2",
    subtitle: "SUMMER 2020",
    description: "We know how large objects will act, but things on a small scale.",
    price: "16.48",
  },
];

export default function HomeBottomSlider() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const { image, title, subtitle, description, price } = slides[index];

  return (
    <div className="relative w-[412px] h-[1300px] mx-auto bg-white overflow-hidden">
      {/* Slide content */}
      <div className="absolute w-[412px] h-[1300px] left-1/2 top-0 -translate-x-1/2 bg-[#23856D]">
        <div className="flex flex-col items-center pt-[112px] gap-[80px] w-[412px] h-[1252px]">
          <div className="flex flex-col items-center gap-[30px] py-[48px] w-[599px] h-[1236px]">
            <div className="flex flex-col items-center gap-[35px] w-[599px] h-[429px]">
              <h5 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-white w-[154px] h-[30px]">
                {subtitle}
              </h5>
              <h1 className="font-montserrat font-bold text-[40px] leading-[50px] text-center tracking-[0.2px] text-white w-[246px] h-[100px]">
                {title}
              </h1>
              <h4 className="font-montserrat font-normal text-[20px] leading-[30px] text-center tracking-[0.2px] text-white w-[291px] h-[90px]">
                {description}
              </h4>
              <div className="flex flex-col items-center gap-[20px] w-[181px] h-[104px]">
                <div className="font-montserrat font-bold text-[24px] leading-[32px] text-center tracking-[0.1px] text-white w-[77px] h-[32px]">
                  ${price}
                </div>
                <button className="flex flex-col items-center justify-center px-[40px] py-[15px] gap-[10px] w-[181px] h-[52px] bg-[#2DC071] rounded-[5px]">
                  <span className="font-montserrat font-bold text-[14px] leading-[22px] text-center tracking-[0.2px] text-white w-[101px] h-[22px]">
                    ADD TO CART
                  </span>
                </button>
              </div>
            </div>
            {/* Carousel Arrows */}
            <div className="flex flex-row items-center justify-between w-full mt-8">
                <button
                    onClick={handlePrev}
                    className="absolute w-[40px] h-[70px] left-[40px] top-[43%] -translate-y-1/2 text-white text-4xl bg-transparent border-none outline-none p-0"
                    >
                    ❮
                </button>

                    {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    className="absolute w-[40px] h-[70px] right-[40px] top-[43%] -translate-y-1/2 text-white text-4xl bg-transparent border-none outline-none p-0"
                    >
                    ❯
                </button>
            </div>
          </div>
          {/* Product image */}
          <div className="flex flex-col items-start w-[416px] h-[681px]">
            <img
              src={image}
              alt={title}
              className="w-[416px] h-[681px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}