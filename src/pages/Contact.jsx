import offices from "../data/contact/offices";

export default function Contact() {
  return (
    <section
      className="relative w-full font-[Montserrat] text-white"
      style={{
        backgroundImage: "url('/contact/contactbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",      
      }}
    >
      <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent"></div>
      <div
        className="
          relative mx-auto
          flex flex-col items-center
          px-0 py-[112px] gap-[96px]
          w-full max-w-[393px]
          md:max-w-[1050px] md:flex-row md:items-center md:gap-[30px]
        "
      >

        <div
          className="
            flex flex-col gap-[36px]
            items-center text-center
            md:items-start md:text-left
            md:w-[497px]
          "
        >
          <h2 className="text-[40px] leading-[50px] font-bold tracking-[0.2px]">
            CONTACT US
          </h2>

          <p className="text-sm leading-5 tracking-[0.2px] w-[367px] md:w-[367px]">
            Problems trying to resolve the conflict between the two major realms
            of classical physics.
          </p>

          <button className="bg-[#23A6F0] rounded-[5px] px-10 py-[15px] font-bold text-white text-sm tracking-[0.2px]">
            Contact Us
          </button>
        </div>

        <div
          className="
            flex flex-col items-center gap-[81px] md:grid md:grid-cols-2 md:gap-x-[30px] md:gap-y-[64px]"
        >
          {offices.map((o) => (
            <div
              key={o.city}
              className="
                flex flex-col
                items-center text-center               /* MOBILE */
                md:items-start md:text-left            /* DESKTOP */
                p-[25px] gap-4
                bg-transparent rounded
                w-[243px] md:w-[273px]
              "
            >
              <h3 className="text-2xl font-bold">{o.city}</h3>
              <p className="text-lg leading-[30px]">{o.address1}</p>
              <div className="w-[58px] border-t-2 border-[#23A6F0] mx-auto md:mx-0"></div>
              <p className="text-[#ECECEC] font-bold">Phone: {o.phone}</p>
              <p className="text-[#ECECEC] font-bold">Fax: {o.fax}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
