// src/components/team/TeamHero.jsx
import { Link } from "react-router-dom";

export default function TeamHero({
  eyebrow = "WHAT WE DO",
  title = "Innovation tailored for you",
}) {
  return (
    <section className="bg-white font-[Montserrat]">
      <div className="max-w-[788px] mx-auto flex flex-col items-center py-10 md:py-14 px-4">
        {/* h5 */}
        <p className="text-[#737373] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-center">
          {eyebrow}
        </p>

        {/* h1 */}
        <h1 className="mt-2 text-[#252B42] font-bold text-[34px] leading-[44px] md:text-[58px] md:leading-[80px] tracking-[0.2px] text-center">
          {title}
        </h1>

        {/* breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mt-2 flex items-center gap-[15px] py-[10px]"
        >
          <Link
            to="/"
            className="text-[#252B42] font-bold text-[14px] leading-[24px] tracking-[0.2px]"
          >
            Home
          </Link>

          {/* arrow (9x16, #BDBDBD) */}
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 14L7 8L2 2"
              stroke="#BDBDBD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-[#737373] font-bold text-[14px] leading-[24px] tracking-[0.2px]">
            Team
          </span>
        </nav>
      </div>
    </section>
  );
}
