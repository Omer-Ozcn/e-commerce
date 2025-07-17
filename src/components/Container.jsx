import containerImage from "../assets/Container/container.jpg";

export default function Container() {
  return (
    <section className="w-[414px] h-[999px] bg-white flex flex-col items-start pt-[120px] relative mx-auto">
      {/* Üst bölüm metin bloğu */}
      <div className="flex flex-col items-center gap-[28.1px] w-[414px] h-[911.25px]">
        <div className="flex flex-col items-center gap-[32.78px] w-[394.33px] h-[476.15px]">
          <h5 className="text-[#BDBDBD] text-[16px] font-bold leading-[24px] tracking-[0.1px]">
            SUMMER 2020
          </h5>
          <h1 className="text-[#252B42] text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center w-[303.48px] h-[140.5px]">
            Part of the <br /> Neural
          </h1>
          <h4 className="text-[#737373] text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center w-[262.27px] h-[84.3px]">
            We know how large objects will act, but things on a small scale.
          </h4>

          {/* CTA buttons */}
          <div className="flex flex-col items-center gap-[25px] w-[165px] h-[129px]">
            <button className="bg-[#23A6F0] text-white font-bold text-[14px] leading-[22px] tracking-[0.2px] rounded-[5px] px-[40px] py-[15px]">
              BUY NOW
            </button>
            <button className="border bg-white border-[#23A6F0] text-[#23A6F0] font-bold text-[14px] leading-[22px] tracking-[0.2px] rounded-[5px] px-[40px] py-[15px]">
              Learn More
            </button>
          </div>
        </div>

        {/* Görsel alanı */}
        <div className="relative w-full max-w-[414px] h-[407px] mx-auto overflow-visible">
          <img
            src={containerImage}
            alt="Kışlık giyimli adam kadın"
            className="absolute w-[463px] h-[403px] top-[-82px] left-[-10px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
