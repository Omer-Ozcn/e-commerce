import {
  ChevronDown,
  ChevronUp,
  CircleUserRound,
  Heart,
  Mail,
  Menu,
  Phone,
  Search,
  ShoppingCart,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import md5 from "md5";
import { logoutUser } from "../store/actions/userActions";
import CartDropdown from "../components/cart/CartDropdown";

const slugify = (s = "") =>
  s.toString().trim().toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const trToAscii = (s = "") =>
  s.replace(/[ıİşŞğĞçÇöÖüÜ]/g, (ch) => {
    const map = { ı:"i", İ:"i", ş:"s", Ş:"s", ğ:"g", Ğ:"g", ç:"c", Ç:"c", ö:"o", Ö:"o", ü:"u", Ü:"u" };
    return map[ch] || ch;
  });

const codeMap = {
  tisort:{label:"T-Shirt",slug:"t-shirt"}, ayakkabi:{label:"Shoes",slug:"shoes"},
  ceket:{label:"Jacket",slug:"jacket"}, elbise:{label:"Dress",slug:"dress"},
  etek:{label:"Skirt",slug:"skirt"}, gomlek:{label:"Shirt",slug:"shirt"},
  kazak:{label:"Sweater",slug:"sweater"}, pantalon:{label:"Pants",slug:"pants"},
};
const genderMap = { k:{label:"Women",path:"women"}, e:{label:"Men",path:"men"} };
const keyFromCode = (code="") => trToAscii((code.split(":")[1]||"").toString()).toLowerCase().replace(/[^a-z0-9]/g,"");
const viewOf = (cat) => {
  const key = keyFromCode(cat.code || "");
  const map = codeMap[key];
  const label = (map && map.label) || cat.title;
  const slug  = (map && map.slug)  || slugify(cat.title || "");
  const g = genderMap[cat.gender] || { label:"Unisex", path:"unisex" };
  return { label, slug, genderPath: g.path };
};

export default function Header() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // user dropdown
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((s) => s.user?.user);
  const token = useSelector((s) => s.user?.token) || localStorage.getItem("token");
  const isAuthed = Boolean(user || token);
  const email = (user?.email || "").toString().trim().toLowerCase();
  const customSrc = user?.avatar || user?.photo || "";
  const avatarSrc = (size = 32) =>
    customSrc || `https://www.gravatar.com/avatar/${md5(email)}?s=${size}&d=identicon&r=g`;
  const emailToShow = user?.email || "";

  const categories = useSelector((s) => s.product?.categories || []);
  const catsWomen = categories.filter((c) => c.gender === "k");
  const catsMen   = categories.filter((c) => c.gender === "e");

  const TOP_N = 5;
  const byRatingDesc = (a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0);
  const catsWomenTop = catsWomen.slice().sort(byRatingDesc).slice(0, TOP_N);
  const catsMenTop   = catsMen.slice().sort(byRatingDesc).slice(0, TOP_N);

  const handleLogout = () => {
    dispatch(logoutUser());
    setUserMenuOpen(false);
    history.push("/");
  };

  const cartCount = useSelector((s) =>
    (s.cart?.cart || []).reduce((sum, it) => sum + (Number(it.count) || 1), 0)
  );
  const favCount = 0;

  const topbarBg = "bg-[#252B42]";

  const closeTimer = useRef(null);
  const openShop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsShopOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIsShopOpen(false), 160);
  };
  useEffect(() => () => closeTimer.current && clearTimeout(closeTimer.current), []);
  useEffect(() => setCartOpen(false), [location.pathname]);

  useEffect(() => {
    const onDoc = (e) => {
      if (!userMenuRef.current) return;
      if (!userMenuRef.current.contains(e.target)) setUserMenuOpen(false);
    };
    const onEsc = (e) => e.key === "Escape" && setUserMenuOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);
  useEffect(() => setUserMenuOpen(false), [location.pathname]);

  const fallbackItems = ["Bags", "Belts", "Cosmetics", "Shoes", "Hats"];

  return (
    <header className="z-50 relative w-full font-[Montserrat] bg-white">
      <div className={`hidden md:flex justify-between items-center px-10 py-4 text-sm font-bold ${topbarBg} text-white`}>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2"><Phone className="h-4" /><span>(225) 555-0118</span></div>
          <div className="flex items-center gap-2"><Mail className="h-4" /><span>michelle.rivera@example.com</span></div>
        </div>
        <p>Follow Us and get a chance to win 80% off</p>
        <div className="flex gap-3 items-center">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-lg" /></a>
          <a href="https://www.youtube.com/"  target="_blank" rel="noopener noreferrer"><FaYoutube className="text-lg" /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-lg" /></a>
          <a href="https://x.com/"            target="_blank" rel="noopener noreferrer"><FaXTwitter className="text-lg" /></a>
        </div>
      </div>

      <div className="hidden md:flex justify-between items-baseline px-10 py-5 shadow-md">
        <div className="flex items-baseline gap-20">
          <Link className="text-2xl font-bold text-[#252B42] leading-[1.2]" to="/">Bandage</Link>

          <nav className="flex items-center gap-6 text-[#737373] text-sm font-bold">
            <Link to="/" className={location.pathname === "/" ? "font-normal" : ""}>Home</Link>

            <div className="relative" onMouseEnter={openShop} onMouseLeave={scheduleClose}>
              <div className="flex items-center gap-1 cursor-pointer select-none">
                <Link to="/shop" className={location.pathname === "/shop" ? "font-normal" : ""}>Shop</Link>
                {isShopOpen ? (
                  <ChevronUp onClick={() => setIsShopOpen(false)} className="cursor-pointer" size={16} />
                ) : (
                  <ChevronDown onClick={() => setIsShopOpen(true)} className="cursor-pointer" size={16} />
                )}
              </div>

              {isShopOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-[396px] max-h-[272px] bg-white shadow-md border rounded-md z-50 flex gap-[10px] px-0 overflow-auto"
                  onMouseEnter={openShop}
                  onMouseLeave={scheduleClose}
                >
                  <div className="flex flex-col w-[186px]">
                    <div className="flex items-start px-6 py-4 h-[56px]">
                      <span className="text-[#252B42] text-[14px] font-bold leading-6 tracking-[0.2px]">Women</span>
                    </div>
                    <div className="flex flex-col gap-4 px-6 py-4">
                      {(catsWomenTop.length ? catsWomenTop : []).map((cat) => {
                        const v = viewOf(cat);
                        return (
                          <Link key={cat.id} onClick={() => setIsShopOpen(false)}
                                to={`/shop/${v.genderPath}/${v.slug}/${cat.id}`}
                                className="text-[#737373] text-[14px] font-bold hover:text-[#252B42]">
                            {v.label}
                          </Link>
                        );
                      })}
                      {!catsWomenTop.length && fallbackItems.map((name) => (
                        <Link key={name} onClick={() => setIsShopOpen(false)}
                              to={`/shop`} className="text-[#737373] text-[14px] font-bold hover:text-[#252B42]">
                          {name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col w-[210px]">
                    <div className="flex items-start px-6 py-4 h-[56px]">
                      <span className="text-[#252B42] text-[14px] font-bold leading-6 tracking-[0.2px]">Men</span>
                    </div>
                    <div className="flex flex-col gap-4 px-6 py-4">
                      {(catsMenTop.length ? catsMenTop : []).map((cat) => {
                        const v = viewOf(cat);
                        return (
                          <Link key={cat.id} onClick={() => setIsShopOpen(false)}
                                to={`/shop/${v.genderPath}/${v.slug}/${cat.id}`}
                                className="text-[#737373] text-[14px] font-bold hover:text-[#252B42]">
                            {v.label}
                          </Link>
                        );
                      })}
                      {!catsMenTop.length && fallbackItems.map((name) => (
                        <Link key={name} onClick={() => setIsShopOpen(false)}
                              to={`/shop`} className="text-[#737373] text-[14px] font-bold hover:text-[#252B42]">
                          {name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about"   className={location.pathname === "/about"   ? "font-normal" : ""}>About</Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "font-normal" : ""}>Contact</Link>
            <Link to="/pricing" className={location.pathname === "/pricing" ? "font-normal" : ""}>Pricing</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-[#252B42]">
          <div className="flex gap-2 items-center">
            {isAuthed ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  type="button"
                  onClick={() => setUserMenuOpen((p) => !p)}
                  className="flex gap-2 items-center"
                  aria-haspopup="menu"
                  aria-expanded={userMenuOpen}
                >
                  <img
                    src={avatarSrc(32)}
                    alt="User Avatar"
                    className="rounded-full border"
                    width={32}
                    height={32}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const name = encodeURIComponent(user?.name || user?.email || "User");
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${name}&size=32&background=23A6F0&color=fff`;
                    }}
                  />
                  <span className="hidden md:flex text-[#23A6F0] font-bold">{emailToShow}</span>
                  <ChevronDown size={16} className="text-[#23A6F0]" />
                </button>

                {userMenuOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 top-full mt-2 w-44 bg-white border rounded-md shadow-lg z-50 overflow-hidden"
                  >
                    <Link
                      to="/account"
                      onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                      role="menuitem"
                    >
                      Profilim
                    </Link>
                    <Link
                      to="/orders"
                      onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                      role="menuitem"
                    >
                      Siparişlerim
                    </Link>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                      role="menuitem"
                    >
                      Çıkış
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/maintenance" className="flex gap-1 items-center "><CircleUserRound /></Link>
                <Link to="/login"    className="hidden md:flex text-[#23A6F0] font-bold">Login</Link>
                <span className="hidden md:flex text-[#23A6F0] font-bold">/</span>
                <Link to="/register" className="hidden md:flex text-[#23A6F0] font-bold">Register</Link>
              </>
            )}
          </div>

          <Search />

          <div className="relative hidden md:block">
            <button
              onClick={() => setCartOpen((p) => !p)}
              className="flex gap-1 items-center cursor-pointer"
              aria-expanded={cartOpen}
              title="Cart"
            >
              <ShoppingCart />
              <span className="hidden md:flex">{cartCount}</span>
            </button>
            {cartOpen && <CartDropdown onClose={() => setCartOpen(false)} />}
          </div>

          <Link to="/cart" className="relative md:hidden" aria-label="Cart">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-controls="mobile-nav"
            aria-expanded={isMobileOpen}
            className="md:hidden p-1 -m-1"
          >
            <Menu className="w-7 h-7" />
          </button>

          <div className="relative hidden md:flex gap-1 items-center">
            <button type="button" className="flex items-center gap-1 cursor-pointer " title="Favorites">
              <Heart /><span>{favCount}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-5 md:hidden">
        <Link to="/" className="text-2xl font-bold text-[#252B42] leading-[1.2]">Bandage</Link>
        <div className="flex items-center gap-5">
          {isAuthed ? (
            <>
              <button
                type="button"
                onClick={() => setIsMobileOpen((p) => !p)}
                className="flex items-center"
                title={emailToShow}
              >
                <img
                  src={avatarSrc(28)}
                  alt="User Avatar"
                  className="rounded-full border"
                  width={28}
                  height={28}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const name = encodeURIComponent(user?.name || user?.email || "User");
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${name}&size=28&background=23A6F0&color=fff`;
                  }}
                />
              </button>
              <button type="button" onClick={handleLogout}
                      className="px-2 py-1 rounded bg-[#e53e3e] text-white text-xs font-bold">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login"><CircleUserRound className="w-6 h-6" /></Link>
          )}

          <Search className="w-6 h-6" />

          <Link to="/cart" className="relative" aria-label="Cart">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-controls="mobile-nav"
            aria-expanded={isMobileOpen}
            className="p-1 -m-1"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <nav id="mobile-nav" className="md:hidden flex flex-col items-center justify-center gap-6 py-10 text-[#737373] text-xl font-semibold">
          <Link to="/"        onClick={() => setIsMobileOpen(false)} className={location.pathname === "/" ? "text-[#252B42]" : ""}>Home</Link>
          <Link to="/shop"    onClick={() => setIsMobileOpen(false)} className={location.pathname === "/shop" ? "text-[#252B42]" : ""}>Product</Link>
          <Link to="/about"   onClick={() => setIsMobileOpen(false)} className={location.pathname === "/about" ? "text-[#252B42]" : ""}>About</Link>
          <Link to="/contact" onClick={() => setIsMobileOpen(false)} className={location.pathname === "/contact" ? "text-[#252B42]" : ""}>Contact</Link>
          <Link to="/pricing" onClick={() => setIsMobileOpen(false)} className={location.pathname === "/pricing" ? "text-[#252B42]" : ""}>Pricing</Link>

          {isAuthed && (
            <>
              <Link to="/account" onClick={() => setIsMobileOpen(false)} className="text-[#23A6F0] font-bold">
                Profilim
              </Link>
              <Link to="/orders" onClick={() => setIsMobileOpen(false)} className="text-[#23A6F0] font-bold">
                Siparişlerim
              </Link>
            </>
          )}

          {isAuthed && (
            <button type="button" onClick={() => { setIsMobileOpen(false); handleLogout(); }} className="text-[#23A6F0] font-bold">
              Logout
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
