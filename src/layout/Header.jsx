import {
  CircleUserRound,
  Heart,
  Mail,
  Phone,
  Search,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  Menu,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Header() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeTimer = useRef(null);
  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 180);
  };
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header className="z-50 relative w-full font-[Montserrat] bg-white">
      <div
        className={`hidden md:flex justify-between items-center px-10 py-4 text-sm font-bold ${
          location.pathname.startsWith("/shop") ||
          location.pathname.startsWith("/product")
            ? "bg-[#23856D]"
            : "bg-[#252B42]"
        } text-white`}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <p>Follow Us and get a chance to win 80% off</p>
        <div className="flex gap-3 items-center">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>

      <div className="hidden md:flex justify-between items-baseline px-10 py-5 shadow-md">
        <div className="flex items-baseline gap-20">
          <Link
            to="/"
            className="font-[Montserrat] text-2xl font-bold text-[#252B42] leading-[1.2]"
          >
            Bandage
          </Link>

          <nav className="flex items-center gap-6 font-[Montserrat] text-[#737373] text-sm font-bold">
            <Link to="/" className={location.pathname === "/" ? "font-normal" : ""}>
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={scheduleClose}
              onFocus={openMenu}
              onBlur={scheduleClose}
            >
              <div className="flex items-center gap-1 cursor-pointer select-none">
                <Link
                  to="/shop"
                  className={location.pathname.startsWith("/shop") ? "font-normal" : ""}
                >
                  Shop
                </Link>
                {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {dropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-[396px] h-[272px] bg-white shadow-md border z-50 flex gap-[10px] px-0"
                  onMouseEnter={openMenu}
                  onMouseLeave={scheduleClose}
                >
                  <div className="flex flex-col w-[186px]">
                    <div className="flex items-start px-6 py-4 h-[56px]">
                      <Link
                        to="/shop/women"
                        className="text-[#252B42] text-[14px] font-bold leading-6 tracking-[0.2px]"
                      >
                        Kadın
                      </Link>
                    </div>
                    <div className="flex flex-col gap-4 px-6 py-4 h-[216px]">
                      <Link to="/shop/women/bags" className="text-[#737373] text-[14px] font-bold">Bags</Link>
                      <Link to="/shop/women/belts" className="text-[#737373] text-[14px] font-bold">Belts</Link>
                      <Link to="/shop/women/cosmetics" className="text-[#737373] text-[14px] font-bold">Cosmetics</Link>
                      <Link to="/shop/women/shoes" className="text-[#737373] text-[14px] font-bold">Shoes</Link>
                      <Link to="/shop/women/hats" className="text-[#737373] text-[14px] font-bold">Hats</Link>
                    </div>
                  </div>

                  <div className="flex flex-col w-[210px]">
                    <div className="flex items-start px-6 py-4 h-[56px]">
                      <Link
                        to="/shop/men"
                        className="text-[#252B42] text-[14px] font-bold leading-6 tracking-[0.2px]"
                      >
                        Erkek
                      </Link>
                    </div>
                    <div className="flex flex-col gap-4 px-6 py-4 h-[216px]">
                      <Link to="/shop/men/bags" className="text-[#737373] text-[14px] font-bold">Bags</Link>
                      <Link to="/shop/men/belts" className="text-[#737373] text-[14px] font-bold">Belts</Link>
                      <Link to="/shop/men/cosmetics" className="text-[#737373] text-[14px] font-bold">Cosmetics</Link>
                      <Link to="/shop/men/shoes" className="text-[#737373] text-[14px] font-bold">Shoes</Link>
                      <Link to="/shop/men/hats" className="text-[#737373] text-[14px] font-bold">Hats</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className={location.pathname === "/about" ? "font-normal" : ""}>
              About
            </Link>
            <Link to="/blog" className={location.pathname === "/blog" ? "font-normal" : ""}>
              Blog
            </Link>
            <Link to="/pricing" className={location.pathname === "/pricing" ? "font-normal" : ""}>
              Pricing
            </Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "font-normal" : ""}>
              Contact
            </Link>
            <Link to="/pages" className={location.pathname === "/pages" ? "font-normal" : ""}>
              Pages
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-[#252B42]">
          <div className="hidden md:flex items-center gap-3 mr-2">
            <Link to="/login" className="flex items-center gap-1 text-[#23A6F0]">
              <CircleUserRound />
              <span>Login</span>
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-[5px] bg-[#23A6F0] text-white text-sm font-bold hover:bg-[#1b8ed6] transition"
            >
              Sign up
            </Link>
          </div>

          <Search />
          <Link to="/cart" className="relative">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </Link>
          <Link to="/likes" className="hidden md:flex items-center gap-1">
            <Heart />
            <span>1</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-5 md:hidden">
        <Link to="/" className="font-[Montserrat] text-2xl font-bold text-[#252B42] leading-[1.2]">
          Bandage
        </Link>

        <div className="flex items-center gap-5">
          <Link to="/login">
            <CircleUserRound className="w-6 h-6" />
          </Link>
          <Search className="w-6 h-6" />
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </Link>
          <Menu className="w-7 h-7" />
        </div>
      </div>

      <nav className="flex flex-col items-center justify-center gap-6 py-10 text-[#737373] text-xl font-semibold md:hidden">
        <Link to="/" className={location.pathname === "/" ? "text-[#252B42]" : ""}>Home</Link>
        <Link to="/product" className={location.pathname === "/product" ? "text-[#252B42]" : ""}>Product</Link>
        <Link to="/blog" className={location.pathname === "/blog" ? "text-[#252B42]" : ""}>Blog</Link>
        <Link to="/pricing" className={location.pathname === "/pricing" ? "text-[#252B42]" : ""}>Pricing</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "text-[#252B42]" : ""}>Contact</Link>
        <Link to="/signup" className={location.pathname === "/signup" ? "text-[#252B42]" : ""}>Sign up</Link>
      </nav>
    </header>
  );
}
