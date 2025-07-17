import React from 'react';
import products from '../data/products';

const ProductCard = () => {
  return (
    <div className="flex flex-col items-center py-20 w-full max-w-[1280px] mx-auto bg-white">
      {/* Kartların üstündeki yazı */}
      <div className="text-center mb-8 flex flex-col items-center gap-2">
        <h4 className="font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373] w-[191px] h-[30px] m-0">
          Featured Products
        </h4>
        <h2 className="font-montserrat font-bold text-[32px] text-[#252B42] mt-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] mt-4 w-[261px] h-[40px]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Kartlar */}
      <div className="flex flex-col gap-[30px] items-center w-full max-w-[348px] mx-auto">
        {products.map(({ id, imgUrl, title, subtitle, price, discountPrice, colorOptions }) => (
          <div
            key={id}
            className="flex flex-col items-start p-0 w-[348px] h-[615px] bg-white"
          >
            <div className="w-[348px] h-[427px] relative self-stretch">
              <img
                src={imgUrl}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center px-[25px] pt-[25px] pb-[35px] gap-[10px] w-[348px] h-[188px] box-border">
              <h5 className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] w-[131px] h-[24px] m-0 text-center">
                {title}
              </h5>
              <a className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] w-[146px] h-[24px] m-0 no-underline cursor-pointer text-center">
                {subtitle}
              </a>
              <div className="flex flex-row items-start px-[3px] py-[5px] gap-[5px] w-[108px] h-[34px]">
                <span className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD] w-[52px] h-[24px] line-through">
                  ${price}
                </span>
                <span className="font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D] w-[45px] h-[24px]">
                  ${discountPrice}
                </span>
              </div>
              <div className="flex flex-row items-center gap-[6.08px] w-[82.23px] h-[16px]">
                {colorOptions.map((color, idx) => (
                  <span
                    key={idx}
                    className="inline-block w-[16px] h-[16px] rounded-full border border-[#ccc]"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
