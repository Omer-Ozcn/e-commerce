export default function AboutStats() {
  const stats = [
    { value: "15K", label: "Happy Customers" },
    { value: "150K", label: "Monthly Visitors" },
    { value: "15", label: "Countries  Worldwide" },
    { value: "100+", label: "Top Partners" },
  ];

  return (
    <section className="w-full bg-white font-[Montserrat]">
      <div className="w-full flex justify-center">
        <div
          className="
            w-full max-w-[1440px] md:py-6
            flex justify-center
          "
        >
          <div
            className="
              w-full md:w-[1018px]
              flex flex-col items-center text-center
              md:flex-row md:items-center md:text-left md:justify-center
              gap-6 md:gap-[60px] px-6 md:px-0 py-6
            "
          >
            <div className="md:w-[394px] flex flex-col items-center md:items-start gap-6 md:py-6">
              <span className="text-[#E74040] text-sm leading-5 tracking-[0.2px]">
                Problems trying
              </span>
              <h3 className="text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.1px]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h3>
            </div>

            <div className="md:w-[529px]">
              <p className="text-[#737373] text-sm leading-5 tracking-[0.2px] md:w-[545px]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div
          className="
            w-full max-w-[1050px]
            px-6 md:px-0
            py-12 md:py-20
            flex flex-col items-center gap-12 md:gap-[50px]
          "
        >
          <div
            className="
              w-full
              flex flex-col items-center gap-12
              md:flex-row md:items-start md:gap-[30px] md:justify-between
            "
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="
                  w-full md:w-auto
                  flex flex-col items-center
                "
              >
                <div className="text-[#252B42] font-bold text-[36px] leading-[48px] md:text-[58px] md:leading-[80px] tracking-[0.2px]">
                  {s.value}
                </div>
                <div className="text-[#737373] font-bold text-[12px] md:text-[16px] leading-[24px] tracking-[0.1px] text-center">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
