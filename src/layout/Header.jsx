import { Link, useLocation } from "react-router-dom";
import { User, Search, ShoppingCart, Menu as MenuIcon } from "lucide-react";

export default function MobileNavbar() {
  const currentPath = useLocation().pathname;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Product" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];

  const linkClass = (path) =>
    `text-[30px] leading-[45px] text-center font-normal ${
      path === currentPath ? "text-[#737373]" : "text-[#252B42]"
    }`;

  return (
    <div className="relative w-[414px] h-[532px] bg-white mx-auto font-montserrat overflow-hidden">
      {/* Logo */}
      <div className="absolute top-[23px] left-[32px] w-[129px] h-[58px]">
        <h1 className="text-[24px] font-bold leading-[32px] tracking-[0.1px] text-[#252B42] mt-[13px]">
          Bandage
        </h1>
      </div>

      {/* Icons */}
      <div className="absolute top-[38.2px] left-[202px] flex items-center gap-[25px] w-[168.21px] h-[24px]">
        <User size={22} color="#3C403D" />
        <Search size={24} color="#252B42" />
        <ShoppingCart size={24} color="#252B42" />
        <MenuIcon size={24} color="#252B42" />
      </div>

      {/* Menu */}
      <div className="absolute top-[160px] left-1/2 -translate-x-1/2 w-[123px] h-[270px] flex flex-col items-center justify-between gap-[30px]">
        {navLinks.map(({ path, label }) => (
          <Link key={path} to={path} className={linkClass(path)}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
