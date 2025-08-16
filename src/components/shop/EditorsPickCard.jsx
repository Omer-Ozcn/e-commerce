import React, { useState } from "react";
import { Link } from "react-router-dom";              
import editorsPickProducts from "../../data/shop/EditorsPickData";
import Pagination from "./Pagination";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function EditorsPickCard() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = isMobile ? 4 : 12;
  const totalPages = Math.ceil(editorsPickProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = editorsPickProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}          
              className="bg-white overflow-hidden block group cursor-pointer"
            >
              <img
                src={product.imgUrl}
                alt={product.title}
                className="object-cover w-[348px] h-[427px] mx-auto sm:w-full sm:h-[350px] transition-transform group-hover:scale-[1.02]"
              />
              <div className="p-4 text-center">
                <h3 className="text-md font-semibold text-[#252B42]">
                  {product.title}
                </h3>
                <p className="text-sm text-[#737373] mt-1">{product.subtitle}</p>
                <div className="mt-2 flex justify-center items-center space-x-2">
                  <span className="text-sm font-bold text-[#BDBDBD] line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm font-bold text-[#23856D]">
                    ${product.discountPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-center items-center mt-3 space-x-2">
                  {product.colorOptions.map((color, idx) => (
                    <span
                      key={idx}
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
}
