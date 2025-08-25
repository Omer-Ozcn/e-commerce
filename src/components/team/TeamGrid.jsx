// src/components/team/TeamGrid.jsx
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function TeamGrid({
  title = "Meet Our Team",
  members = [
    { name: "Gökhan Özdemir", role: "Project Manager",   img: "/team/team1.jpg" }, 
    { name: "Ömer Özcan",      role: "Full Stack Developer",     img: "/team/team2.jpg" }, 
    { name: "Jenny Wilson",     role: "Frontend",      img: "/team/team3.jpg" },
    { name: "Wade Warren",      role: "Backend",       img: "/team/team4.jpg" },
    { name: "Brooklyn Simmons", role: "SEO",           img: "/team/team5.jpg" },
    { name: "Cody Fisher",      role: "Support",       img: "/team/team6.jpg" },
    { name: "Savannah Nguyen",  role: "Product",       img: "/team/team7.jpg" },
    { name: "Courtney Henry",   role: "QA",            img: "/team/team8.jpg" },
    { name: "Darlene Robertson",role: "Data",          img: "/team/team9.jpg" },
  ],
}) {
  return (
    <section className="bg-white font-[Montserrat]">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 mt-[75px]">
        <h2 className="text-center font-bold text-[22px] md:text-[26px] text-[#252B42]">
          {title}
        </h2>

        <div className="mt-[75px] grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((m, idx) => (
            <div
              key={`${m.name}-${idx}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                className="w-full h-56 object-cover"
                onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
              />
              <div className="p-5 text-center">
                <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                  {m.name}
                </h5>
                <h6 className="mt-1 font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                  {m.role}
                </h6>
                <div className="mt-3 flex items-center justify-center gap-4">
                  <a href="#" aria-label="Facebook" className="text-[#335BF5] hover:opacity-80">
                    <FaFacebookF />
                  </a>
                  <a href="#" aria-label="Instagram" className="text-[#E61F5A] hover:opacity-80">
                    <FaInstagram />
                  </a>
                  <a href="#" aria-label="Twitter" className="text-[#21A6DF] hover:opacity-80">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
