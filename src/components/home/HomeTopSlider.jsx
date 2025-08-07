import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HomeTopSlider() {
  return (
    <div className="relative w-full h-[753px] overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        className="w-full h-full"
        style={{
          "--swiper-navigation-color": "#252B42",
          "--swiper-navigation-size": "32px",
          "--swiper-navigation-sides-offset": "15px",
        }}
      >
        <SwiperSlide>
          <div className="w-full h-full bg-[url('../home/top-slider.jpg')] bg-cover bg-[position:50%_center] text-white font-[Montserrat] flex flex-col items-center justify-center p-20 text-center gap-10 md:bg-center md:text-left md:items-start md:pl-50">
            <h5 className="font-bold">SUMMER 2025</h5>
            <h2 className="font-bold text-[40px] md:text-[58px]">
              NEW COLLECTION
            </h2>
            <h4 className="text-xl">
              We know how large objects will act,
              <br className="hidden md:flex" /> but things on a small scale.
            </h4>
            <button className="h-[62px] w-[221px] bg-[#2DC071] font-bold text-2xl rounded-md cursor-pointer transition-colors duration-300 hover:text-[#2DC071] hover:bg-white hover:border-[#2DC071]">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-[url('../home/top-slider2.jpg')] bg-cover bg-[position:50%_center] font-[Montserrat] flex flex-col items-center justify-center p-20 text-center gap-10 md:bg-center md:text-left md:items-start md:pl-50">
            <h5 className="font-bold text-[#252B42]">SUMMER 2025</h5>
            <h2 className="font-bold text-[40px] md:text-[58px] text-[#252B42]">
              NEW COLLECTION
            </h2>
            <h4 className="text-xl text-[#252B42]">
              We know how large objects will act,
              <br className="hidden md:flex text-[#252B42]" /> but things on a small scale.
            </h4>
            <button className="h-[62px] w-[221px] text-white bg-[#2DC071] font-bold text-2xl rounded-md cursor-pointer transition-colors duration-300 hover:text-[#2DC071] hover:bg-white hover:border-[#2DC071]">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
