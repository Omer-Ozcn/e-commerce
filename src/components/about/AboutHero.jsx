
export default function AboutHero() {
  return (
    <section className="w-full bg-white font-[Montserrat] flex justify-center">
      <div className="md:hidden w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center gap-10 max-w-[418px] py-20">
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-[40px] leading-[50px] font-bold text-[#252B42] tracking-[0.2px]">
              ABOUT US
            </h2>
            <p className="text-[20px] leading-[30px] text-[#737373] tracking-[0.2px] max-w-[277px]">
              We know how large objects will act, but things on a small scale just do not act that way.
            </p>
            <button className="bg-[#23A6F0] text-white text-[14px] font-bold px-10 py-[15px] rounded-[5px] tracking-[0.2px]">
              Get Quote Now
            </button>
          </div>

          <div className="relative w-[387px] h-[440px] mt-10">
            <div className="absolute w-[295.65px] h-[295.65px] left-[39.67px] top-[35.26px] bg-[#FFE9EA] rounded-full"></div>
            <div className="absolute w-[47.27px] h-[47.27px] left-[4px] top-[42.56px] bg-[#FFE9EA] rounded-full"></div>
            <div className="absolute w-[18.48px] h-[18.48px] left-[342.62px] top-[186.52px] bg-[#FFE9EA] rounded-full"></div>
            <div className="absolute w-[9.02px] h-[9.02px] left-[356.37px] top-[109.6px] bg-[#977DF4] rounded-full"></div>
            <div className="absolute w-[9.02px] h-[9.02px] left-[18.61px] top-[284.92px] bg-[#977DF4] rounded-full"></div>

            <img
              src="/about/abouthero.jpg"
              alt="About hero"
              className="absolute w-[375.73px] h-[439.19px] left-1/2 -translate-x-1/2 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-full max-w-[1050px] mx-auto items-center justify-between py-16">
        <div className="flex flex-col gap-6 md:max-w-[480px]">
          <span className="uppercase text-xs font-bold tracking-[0.2px] text-[#252B42]">
            About Company
          </span>
          <h1 className="text-[58px] leading-[80px] font-bold text-[#252B42]">
            ABOUT US
          </h1>
          <p className="text-[20px] leading-[30px] text-[#737373] max-w-[376px]">
            We know how large objects will act, but things on a small scale do not act that way
          </p>
          <button className="bg-[#23A6F0] text-white text-[14px] font-bold px-10 py-[15px] rounded-[5px] w-[193px]">
            Get Quote Now
          </button>
        </div>

        <div className="relative w-[632px] h-[612px]">
          <div className="absolute w-[484.06px] h-[484.06px] left-[58.4px] top-0 bg-[#FFE9EA] rounded-full"></div>
          <div className="absolute w-[77.39px] h-[77.39px] left-0 top-[11.96px] bg-[#FFE9EA] rounded-full"></div>

          <img
            src="/about/abouthero.jpg"
            alt="About hero"
            className="absolute w-[571px] h-[668px] left-1/2 -translate-x-1/2 top-[-56px] object-contain"
          />

          <div className="absolute w-[30.25px] h-[30.25px] left-[554.42px] top-[247.66px] bg-[#FFE9EA] rounded-full"></div>
          <div className="absolute w-[14.78px] h-[14.78px] left-[576.94px] top-[121.72px] bg-[#977DF4] rounded-full"></div>
          <div className="absolute w-[14.78px] h-[14.78px] left-[23.92px] top-[408.78px] bg-[#977DF4] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
