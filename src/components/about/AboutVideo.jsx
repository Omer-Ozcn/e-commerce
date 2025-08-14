import { FaPlay } from "react-icons/fa";

export default function AboutVideo() {
  return (
    <section className="w-full bg-white font-[Montserrat] flex justify-center">
      <div className="w-full max-w-[393px] md:max-w-[1050px] px-6 md:px-0 md:h-[764px] relative flex justify-center py-10 md:py-0">

        <div className="relative w-[280px] md:hidden aspect-square">
          <img
            src="/about/video.jpg"                  
            alt="Company video cover"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#23A6F0] text-white flex items-center justify-center shadow-lg"
          >
            <FaPlay className="w-4 h-4 translate-x-[1px]" />
          </button>
        </div>

        <div className="hidden md:block relative w-full h-full">
          <div className="absolute w-[989px] h-[540px] left-1/2 -translate-x-1/2 top-[112px] rounded-[20px] overflow-hidden shadow">
            <img
              src="/about/video.jpg"
              alt="Company video cover"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_14.58%,rgba(56,56,56,0.84)_100%)]" />
            <button
              type="button"
              aria-label="Play video"
              className="
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                w-[92.6px] h-[92.6px] rounded-[73.6px]
                bg-[#23A6F0] text-white flex items-center justify-center
                shadow-lg hover:opacity-90 focus:outline-none
                focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2
              "
            >
              <FaPlay className="w-[19px] h-[23px] translate-x-[1px]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
