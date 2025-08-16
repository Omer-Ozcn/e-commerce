import React from "react";

const logos = [
  "../ShopPage/icons/hooli.jpg",
  "../ShopPage/icons/lyft.jpg",
  "../ShopPage/icons/piper.jpg",
  "../ShopPage/icons/stripe.jpg",
  "../ShopPage/icons/aws.jpg",
  "../ShopPage/icons/reddit.jpg",
];

export default function Logos() {
  return (
    <section className="w-full bg-[#FAFAFA] font-[Montserrat] flex justify-center">
      <div
        className="
          w-full mx-auto
          max-w-[410px] md:max-w-[1050px]
          px-0 md:px-0
          pt-[30px] pb-[30px] md:py-[80px]
          flex flex-col items-center gap-6 md:gap-[24px]
        "
      >

        <div className="flex flex-col items-center text-center gap-[30px] w-[318px] md:w-[864px]">
          <h2
            className="
              text-[#252B42] font-bold
              text-[40px] leading-[50px] tracking-[0.2px]
              w-[287px] md:w-[496px]
            "
          >
            Big Companies Are Here
          </h2>

          <p
            className="
              text-[#737373] text-[14px] leading-5 tracking-[0.2px]
              w-[328px] md:w-[547px]
            "
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div
          className="
            w-full md:w-[1054px]
            flex flex-col items-center
            py-[50px] md:py-[50px]
            gap-[60px] md:flex-row md:items-center md:justify-between md:gap-[30px]
          "
        >
          <img
            src={logos[0]} alt="hooli"
            className="grayscale opacity-70 w-[149px] h-auto md:w-[103px]"
          />
          <img
            src={logos[1]} alt="lyft"
            className="grayscale opacity-70 w-[139px] h-auto md:w-[83px]"
          />
          <img
            src={logos[2]} alt="pied piper"
            className="grayscale opacity-70 w-[149px] h-auto md:w-[102px]"
          />
          <img
            src={logos[3]} alt="stripe"
            className="grayscale opacity-70 w-[149px] h-auto md:w-[103px]"
          />
          <img
            src={logos[4]} alt="aws"
            className="grayscale opacity-70 w-[153px] h-auto md:w-[104px]"
          />
          <img
            src={logos[5]} alt="reddit"
            className="grayscale opacity-70 w-[149px] h-auto md:w-[76px]"
          />
        </div>
      </div>
    </section>
  );
}
