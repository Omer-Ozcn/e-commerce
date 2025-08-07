import featuredProducts from "../../data/home/FeaturedProducts";

export default function ProductCards() {
  return (
    <div className="md:flex md:flex-wrap md:items-center md:justify-center md:gap-5 md:w-[1124px] md:m-auto">
      {featuredProducts.map(({ id, imgUrl, title, subtitle, price, discountPrice, colorOptions }) => (
        <div
          key={id}
          className="flex flex-col items-center justify-center text-center gap-3 font-[Montserrat] md:w-[240px] md:h-[615px]"
        >
          <img
            src={imgUrl}
            alt={title}
            className="w-[240px] h-[427px] my-3 object-cover"
          />
          <h5 className="text-[#252B42] font-bold">{title}</h5>
          <p className="text-[#737373] font-bold text-sm">{subtitle}</p>
          <p className="text-[#BDBDBD] font-bold text-sm">
            ${price}{" "}
            <span className="text-[#23856D]">${discountPrice}</span>
          </p>
          <div className="flex gap-2">
            {colorOptions.map((color, idx) => (
              <div
                key={idx}
                className="h-4 w-4 rounded-lg"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
