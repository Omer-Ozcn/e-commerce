export default function Container() {
  return (
    <section className="font-[Montserrat] pt-20 pb-10 flex flex-col-reverse items-center justify-center md:flex-row md:justify-around md:p-0">
      
      <div className="w-[414px] h-[403px] md:h-[682px] md:w-[704px]">
        <img
          src="../home/container.jpg"
          alt="Product visual"
          className="h-full w-auto object-cover overflow-visible -translate-x-7 md:overflow-hidden md:translate-x-0 md:-translate-y-[92px] md:h-[774px]"
        />
      </div>

      <div className="px-20 flex flex-col justify-center items-center gap-5 text-center md:text-left md:w-[573px] md:items-start md:pl-0">
        <div className="flex flex-col gap-5">
          <div className="text-[#BDBDBD]">SUMMER 2025</div>
          <div className="text-[40px] font-bold leading-[50px]">
            Part of the Neural Universe
          </div>
          <div className="text-[#737373] text-xl">
            We know how large objects will act,
            <br className="hidden md:flex" /> but things on a small scale.
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 font-bold text-sm md:flex-row md:items-start">
          <button className="h-[50px] w-[150px] text-white bg-[#2DC071] rounded-[5px] cursor-pointer transition-colors duration-300 hover:bg-white hover:text-[#2DC071] hover:border">
            BUY NOW
          </button>
          <button className="h-[50px] w-[165px] text-white bg-[#2DC071] rounded-[5px] cursor-pointer transition-colors duration-300 hover:bg-white hover:text-[#2DC071] hover:border">
            READ MORE
          </button>
        </div>
      </div>

    </section>
  );
}
