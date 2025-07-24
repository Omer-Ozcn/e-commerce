import { ChevronRight, Clock2, MessageSquareText } from "lucide-react";
import featuredPost from "../data/FeaturedPost";

export default function FeaturedPostCard() {
  return (
    <section className="my-15 md:my-35">
      <div className="w-[260px] md:w-[692px] mx-auto flex flex-col items-center justify-center gap-5 mt-[150px] text-center font-[Montserrat]">
        <h6 className="text-[14px] text-[#23A6F0] font-bold">Practice Advice</h6>
        <h2 className="text-[40px] font-bold text-[#252B42] leading-[50px]">
          Featured Posts
        </h2>
        <p className="text-sm text-[#737373] leading-relaxed">
          Problems trying to resolve the conflict between
          <br className="hidden md:flex" /> the two major realms of Classical physics:
          Newtonian mechanics
        </p>
      </div>

      <div className="mx-auto mt-15 flex flex-col md:flex-row md:w-[1050px] justify-center gap-8">
        {featuredPost.map((post) => (
          <div
            key={post.id}
            className="relative w-[330px] flex flex-col bg-white border border-gray-200 shadow-md rounded-md mx-auto font-[Montserrat] text-[#737373] my-10"
          >
            <img
              src={post.imgUrl}
              alt={post.title}
              className="w-full h-[300px] object-cover rounded-t-md"
            />
            <span className="absolute top-5 left-5 bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded-md">
              NEW
            </span>

            <div className="p-6 flex flex-col gap-4">
              <nav className="flex gap-3 text-xs text-[#8EC2F2]">
                <a href="#" className="hover:underline">Google</a>
                <a href="#" className="hover:underline text-gray-500">Trending</a>
                <a href="#" className="hover:underline text-gray-500">New</a>
              </nav>

              <h4 className="font-bold text-xl text-black leading-snug">{post.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{post.explanation}</p>

              <div className="flex justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock2 className="text-[#23A6F0] w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquareText className="text-[#23856D] w-4 h-4" />
                  <span>{post.comment} comments</span>
                </div>
              </div>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#23A6F0] font-semibold hover:underline mt-4"
              >
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
