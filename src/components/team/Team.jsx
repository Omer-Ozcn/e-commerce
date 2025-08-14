import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Gökhan Özdemir",
    role: "Project Manager",
    image: "/team/team1.jpg",
  },
  {
    name: "Ömer Özcan",
    role: "Full Stack Developer",
    image: "/team/team2.jpg",
  },
  {
    name: "Username",
    role: "Profession",
    image: "/team/team3.jpg",
  },
];

export default function Team() {
  return (
    <section className="bg-[#FAFAFA] w-full flex justify-center">
      <div className="flex flex-col items-center w-full max-w-[1050px] py-[30px] md:py-[112px] md:gap-[112px]">
        
        {/* Başlık */}
        <div className="flex flex-col items-center py-[45px] md:py-0 w-full max-w-[607px] gap-[10px] text-center">
          <h2 className="font-[Montserrat] font-bold text-[40px] leading-[50px] text-[#252B42] tracking-[0.2px]">
            Meet Our Team
          </h2>
          <p className="font-[Montserrat] text-[14px] leading-[20px] text-[#737373] tracking-[0.2px] max-w-[469px]">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Kartlar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-[30px] w-full max-w-[1034px]">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-white w-[329px] md:w-[316px]">
              <div className="w-full h-[231px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col items-center p-[30px] gap-[10px]">
                <h5 className="font-[Montserrat] font-bold text-[16px] leading-[24px] text-[#252B42] tracking-[0.1px]">
                  {member.name}
                </h5>
                <h6 className="font-[Montserrat] font-bold text-[14px] leading-[24px] text-[#737373] tracking-[0.2px]">
                  {member.role}
                </h6>
                <div className="flex gap-[20px] pt-[10px]">
                  <FaFacebookF className="w-6 h-6 text-[#335BF5]" />
                  <FaInstagram className="w-6 h-6 text-[#E61F5A]" />
                  <FaTwitter className="w-6 h-6 text-[#21A6DF]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
