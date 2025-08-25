export default function AboutHero() {
  return (
    <section className="w-full bg-white font-[Montserrat] flex justify-center py-20 px-5">
      <div className="w-[90vw] max-w-[1050px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="w-full md:w-auto flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6 md:max-w-[480px]">
          <span className="uppercase text-xs font-bold tracking-[0.2px] text-[#252B42]">
            About Company
          </span>

          <h1 className="font-bold text-[#252B42] tracking-[0.2px] text-[40px] leading-[50px] md:text-[58px] md:leading-[80px]">
            ABOUT US
          </h1>

          <p className="text-[#737373] tracking-[0.2px] text-[20px] leading-[30px] max-w-[277px] md:max-w-[376px]">
            We know how large objects will act, but things on a small scale do not act that way
          </p>

          <button className="bg-[#23A6F0] text-white text-[14px] font-bold px-10 py-[15px] rounded-[5px] w-[193px] hover:bg-[#0099dd] transition cursor-pointer">
            Get Quote Now
          </button>
        </div>

        <div className="relative mt-10 md:mt-0 w-[387px] h-[440px] md:w-[632px] md:h-[612px]">
          <div className="absolute rounded-full bg-[#FFE9EA]
                          w-[295.65px] h-[295.65px] left-[39.67px] top-[35.26px]
                          md:w-[484.06px] md:h-[484.06px] md:left-[58.4px] md:top-0" />
          <div className="absolute rounded-full bg-[#FFE9EA]
                          w-[47.27px] h-[47.27px] left-[4px] top-[42.56px]
                          md:w-[77.39px] md:h-[77.39px] md:left-0 md:top-[11.96px]" />
          <div className="absolute rounded-full bg-[#FFE9EA]
                          w-[18.48px] h-[18.48px] left-[342.62px] top-[186.52px]
                          md:w-[30.25px] md:h-[30.25px] md:left-[554.42px] md:top-[247.66px]" />
          <div className="absolute rounded-full bg-[#977DF4]
                          w-[9.02px] h-[9.02px] left-[356.37px] top-[109.6px]
                          md:w-[14.78px] md:h-[14.78px] md:left-[576.94px] md:top-[121.72px]" />
          <div className="absolute rounded-full bg-[#977DF4]
                          w-[9.02px] h-[9.02px] left-[18.61px] top-[284.92px]
                          md:w-[14.78px] md:h-[14.78px] md:left-[23.92px] md:top-[408.78px]" />

          <img
            src="/about/abouthero.jpg"
            alt="technology"
            className="
              absolute select-none pointer-events-none object-contain
              /* mobile */
              left-1/2 -translate-x-1/2 top-0 w-[375.73px] h-[439.19px]
              /* desktop */
              md:left-[34px] md:translate-x-0 md:top-[-56px] md:w-[571px] md:h-[668px]
            "
          />

        </div>
      </div>
    </section>
  );
}
