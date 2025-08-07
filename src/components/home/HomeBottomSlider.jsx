import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HomeBottomSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[1230px] overflow-hidden md:h-[710px]">
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        className="w-full h-full"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "32px",
          "--swiper-navigation-sides-offset": "15px",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        <SwiperSlide key={1}>
          <div className="w-full h-full pt-65 bg-[#23856D] text-white font-[Montserrat] flex flex-col items-center justify-center text-center md:text-left md:items-center md:flex-row md:pt-0 md:gap-50">
            <div className="px-20 flex flex-col justify-center gap-10">
              <h5 className="font-bold md:text-xl">SUMMER 2025</h5>
              <h2 className="font-bold text-[40px] md:text-[58px]">
                Vita Classic <br className="hidden md:flex" />
                Product
              </h2>
              <h4 className="text-xl md:text-sm">
                We know how large objects will act,
                <br className="hidden md:flex" /> but things on a small scale.
              </h4>
              <div className="flex flex-col gap-10 items-center md:flex-row">
                <p className="font-bold text-2xl">$16.48</p>
                <button className="h-[52px] w-[181px] cursor-pointer bg-[#2DC071] font-bold text-sm rounded-md transition-colors duration-300 hover:text-[#2DC071] hover:bg-white hover:border-[#2DC071]">
                  ADD TO CART
                </button>
              </div>
            </div>
            <img
              src="../home/bottom-slider.jpg"
              alt="Product showcase1"
              className="w-[416px] h-[681px] md:w-[443px] md:h-[685px] md:translate-y-20"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide key={2}>
          <div
            className="w-full h-full pt-65 text-white font-[Montserrat] flex flex-col items-center justify-center text-center gap-10 md:text-left md:items-center md:flex-row md:pt-0 md:gap-50"
            style={{ backgroundColor: "#2A9D8F" }}
          >
            <div className="px-20 flex flex-col justify-center gap-10">
              <h5 className="font-bold md:text-xl">SUMMER 2025</h5>
              <h2 className="font-bold text-[40px] md:text-[58px]">
                Vita Classic <br className="hidden md:flex" />
                Product
              </h2>
              <h4 className="text-xl md:text-sm">
                We know how large objects will act,
                <br className="hidden md:flex" /> but things on a small scale.
              </h4>
              <div className="flex flex-col gap-10 items-center md:flex-row">
                <p className="font-bold text-2xl">$16.48</p>
                <button className="h-[52px] w-[181px] cursor-pointer bg-[#2DC071] font-bold text-sm rounded-md transition-colors duration-300 hover:text-[#2DC071] hover:bg-white hover:border-[#2DC071]">
                  ADD TO CART
                </button>
              </div>
            </div>
            <img
              src="../home/bottom-slider.jpg"
              alt="Product showcase2"
              className="w-[416px] h-[681px] md:w-[443px] md:h-[685px] md:translate-y-20"
            />
          </div>
        </SwiperSlide>
      </Swiper>


      <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 w-[126px] h-[10px] z-50">
        <div
          className={`w-[63px] h-[10px] bg-white ${activeIndex === 0 ? "opacity-100" : "opacity-50"}`}
        />
        <div
          className={`w-[63px] h-[10px] bg-white ${activeIndex === 1 ? "opacity-100" : "opacity-50"}`}
        />
      </div>
    </div>
  );
}
