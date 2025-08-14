import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-[#252B42] font-montserrat">
        <div className="w-full bg-[#FAFAFA]">
            <div className="w-full max-w-[1050px] mx-auto px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-bold">Bandage</h3>
                <div className="flex gap-3 mt-4 md:mt-0">
                    <FaFacebook className="text-[#23A6F0] w-6 h-6" />
                    <FaInstagram className="text-[#23A6F0] w-6 h-6" />
                    <FaTwitter className="text-[#23A6F0] w-6 h-6" />
                    <FaYoutube className="text-[#23A6F0] w-6 h-6" />
                </div>
            </div>
        </div>

      <div className="w-full bg-white max-w-[1050px] mx-auto px-4 py-10 flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-10">
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 lg:gap-[30px] lg:flex-nowrap">
          <div className="flex flex-col gap-4 min-w-[120px]">
            <h4 className="text-base font-bold">Company Info</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="font-bold text-sm text-[#737373]">About Us</Link>
              <Link to="/" className="font-bold text-sm text-[#737373]">Carrier</Link>
              <Link to="/" className="font-bold text-sm text-[#737373]">We are hiring</Link>
              <Link to="/" className="font-bold text-sm text-[#737373]">Blog</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4 min-w-[120px]">
            <h4 className="text-base font-bold">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="font-bold text-sm text-[#737373]">About Us</Link>
              <Link to="/" className="font-bold text-sm text-[#737373]">Carrier</Link>
              <Link to="/" className="font-bold text-sm text-[#737373]">We are hiring</Link>
              <Link to="/" className="font-bold text-sm text-[#737373]">Blog</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4 min-w-[120px]">
            <h4 className="text-base font-bold">Features</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="font-bold text-sm text-[#737373]">Business Marketing</Link>
              <Link to="/" className="font-bold text-sm text-[#737373]">User Analytic</Link>
              <Link to="/" className="font-bold text-sm text-[#737373]">Live Chat</Link>
              <Link to="/" className="font-bold text-sm text-[#737373]">Unlimited Support</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4 min-w-[120px]">
            <h4 className="text-base font-bold">Resources</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="font-bold text-sm text-[#737373]">IOS & Android</Link>
              <Link to="/" className="font-bold text-sm text-[#737373]">Watch a Demo</Link>
              <Link to="/" className="font-bold text-sm text-[#737373]">Customers</Link>
              <Link to="/" className="font-bold text-sm text-[#737373]">API</Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-[321px] w-full">
          <h4 className="text-base font-bold">Get In Touch</h4>
          <div className="relative w-full h-[58px]">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-full bg-[#F9F9F9] border border-[#E6E6E6] rounded-md pl-5 pr-[120px] text-sm text-[#737373]"
            />
            <button className="absolute top-0 right-0 h-full px-5 bg-[#23A6F0] text-white font-medium text-sm rounded-r-md">
              Subscribe
            </button>
            <p className="text-sm text-[#737373]">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FAFAFA] py-6">
        <div className="w-full max-w-[1050px] mx-auto px-4 flex justify-center md:justify-between text-sm text-[#737373]">
          <p>&copy; 2025 YourCompany. All rights reserved.</p>
          <p className="hidden md:block">Terms | Privacy | Sitemap</p>
        </div>
      </div>
    </footer>
  );
}
