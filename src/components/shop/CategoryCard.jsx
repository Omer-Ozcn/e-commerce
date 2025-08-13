import React from "react";

const categories = [
  {
    title: "Clothing",
    subtitle: "6 items",
    image: "../ShopPage/select/shop1.jpg",
  },
  {
    title: "Clothing",
    subtitle: "6 items",
    image: "../ShopPage/select/shop2.jpg",
  },
  {
    title: "Clothing",
    subtitle: "6 items",
    image: "../ShopPage/select/shop3.jpg",
  },
  {
    title: "Clothing",
    subtitle: "6 items",
    image: "../ShopPage/select/shop4.jpg",
  },
  {
    title: "Clothing",
    subtitle: "6 items",
    image: "../ShopPage/select/shop5.jpg",
  },
];

function CategoryCard({ title, subtitle, image }) {
  return (
    <div className="relative w-full lg:w-[205px] h-[223px] lg:h-[225px] overflow-hidden shadow-md bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-center text-white">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <main className="px-4 py-6 font-[Montserrat] bg-[#FAFAFA]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-[1088px] mx-auto">
        {categories.map((cat, idx) => (
          <CategoryCard
            key={idx}
            title={cat.title}
            subtitle={cat.subtitle}
            image={cat.image}
          />
        ))}
      </div>
    </main>
  );
}