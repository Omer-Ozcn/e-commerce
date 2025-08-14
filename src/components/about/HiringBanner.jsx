import { Link } from "react-router-dom";

export default function HiringBanner() {
  return (
    <section className="w-full font-[Montserrat] flex justify-center bg-white">

      <div
        className="
          mx-auto
          w-[414px] h-[520px]
          md:w-full md:max-w-[1050px]
          md:max-w-none md:mx-0
          grid grid-cols-1 md:grid-cols-2 overflow-hidden
        "
      >
        <div className="bg-[#2A7CC7] text-white flex items-center justify-center">
          <div
            className="
              w-full px-6 py-16 md:px-12 md:py-[112px]
              text-center md:text-left
              max-w-[272px] md:max-w-[440px]
              mx-auto md:mx-0
            "
          >
            <p className="uppercase text-[12px] font-bold tracking-widest opacity-80">
              Work With Us
            </p>

            <h2 className="mt-3 font-extrabold text-[34px] leading-[42px] md:text-[40px] md:leading-[50px]">
              Now Let’s grow Yours
            </h2>

            <p className="mt-4 text-[14px] leading-5 opacity-90">
              The gradual accumulation of information about atomic and small-scale
              behavior during the first quarter of the 20th
            </p>

            <Link
              to="/careers"
              className="
                mt-6 inline-flex items-center justify-center
                px-8 py-3 rounded-md border-2 border-white font-bold
                hover:bg-white hover:text-[#2A7CC7] transition
                mx-auto md:mx-0
              "
            >
              Button
            </Link>
          </div>
        </div>

        <div className="hidden md:block relative">
          <img
            src="/about/hiring.jpg"
            alt="We are hiring"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
