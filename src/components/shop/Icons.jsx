import React from "react";

const logos = [
  "../ShopPage/icons/hooli.jpg",
  "../ShopPage/icons/lyft.jpg",
  "../ShopPage/icons/piper.jpg",          
  "../ShopPage/icons/stripe.jpg",
  "../ShopPage/icons/aws.jpg",
  "../ShopPage/icons/reddit.jpg",
];

export default function LogoList() {
  return (
    <div className="w-full min-w-full bg-[#FAFAFA]"> 
      <div
        className={`
          mx-auto
          flex
          flex-col
          w-[414px]
          h-[1173px]
          items-center
          justify-center
          gap-[40px]

          md:flex-row
          md:flex-nowrap
          md:w-full
          md:max-w-[1200px]
          md:h-auto
          md:justify-between
          md:gap-10
          md:px-8
          md:py-10
        `}
      >
        {logos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`logo-${index}`}
            className={`
              grayscale opacity-70
              w-[120px]

              md:w-auto
              md:max-w-[90px]
              md:flex-shrink-0
            `}
            style={{
              maxWidth: '90px',
              height: 'auto',
            }}
          />
        ))}
      </div>
    </div>
  );
}
