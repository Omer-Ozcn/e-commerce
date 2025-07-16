import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white w-full max-w-[414px] mx-auto text-left">
      {/* Üst Gri Alan + İçerik */}
      <div className="bg-[#FAFAFA] flex flex-col pl-11 pr-11 py-10 space-y-8">
        {/* Logo + Sosyal Medya */}
        <section className="space-y-4">
          <h3 className="text-[24px] font-bold text-[#252B42]">Bandage</h3>
          <div className="flex gap-5 text-[#23A6F0]">
            <Facebook size={24} />
            <Instagram size={24} />
            <Twitter size={24} />
          </div>
        </section>

        {/* Link Grupları */}
        <section className="flex flex-col space-y-8 w-full">
          {/* Company Info */}
          <div className="space-y-2">
            <h5 className="text-[#252B42] font-bold text-base">Company Info</h5>
            <ul className="flex flex-col gap-2 text-sm text-[#737373] font-semibold">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <h5 className="text-[#252B42] font-bold text-base">Legal</h5>
            <ul className="flex flex-col gap-2 text-sm text-[#737373] font-semibold">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h5 className="text-[#252B42] font-bold text-base">Features</h5>
            <ul className="flex flex-col gap-2 text-sm text-[#737373] font-semibold">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-2">
            <h5 className="text-[#252B42] font-bold text-base">Resources</h5>
            <ul className="flex flex-col gap-2 text-sm text-[#737373] font-semibold">
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
        </section>

        {/* Email input */}
        <section className="space-y-3 w-full">
          <h5 className="text-[#252B42] font-bold text-base">Get In Touch</h5>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 bg-[#F9F9F9] text-sm text-[#737373] px-4 py-2 border border-[#E6E6E6] rounded-l-md"
            />
            <button className="bg-[#23A6F0] text-white text-sm px-6 rounded-r-md font-semibold">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-[#737373]">Lore imp sum dolor Amit</p>
        </section>
      </div>

      {/* Alt Gri Alan */}
      <div className="bg-[#FAFAFA] py-6 flex justify-center text-sm text-[#737373] font-semibold text-center">
        <p>
          Made With Love By<br />
          Finland All Right Reserved
        </p>
      </div>
    </footer>
  );
}
