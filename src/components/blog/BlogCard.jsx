import { Clock3, MessageSquareText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <article className="bg-white shadow-md flex flex-col max-w-[330px] md:max-w-full mx-auto">

      <div className="relative w-full h-[300px]">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {post.isNew && (
          <span className="absolute top-5 left-5 bg-[#E74040] text-white text-[14px] font-bold px-[10px] h-6 flex items-center rounded-[3px] shadow-md">
            NEW
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 px-[25px] pt-[25px] pb-[35px]">

        <div className="flex gap-[15px] text-[12px]">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className={i === 0 ? "text-[#8EC2F2]" : "text-[#737373]"}
            >
              {tag}
            </span>
          ))}
        </div>

        <h4 className="text-[#252B42] text-[20px] leading-[30px]">
          {post.title}
        </h4>

        <p className="text-[#737373] text-[14px] leading-5">
          {post.excerpt}
        </p>

        <div className="flex justify-between text-[12px] text-[#737373] pt-[15px]">
          <div className="flex items-center gap-1">
            <Clock3 size={16} className="text-[#23A6F0]" />
            {post.dateText}
          </div>
          <div className="flex items-center gap-1">
            <MessageSquareText size={16} className="text-[#23856D]" />
            {post.comments} comments
          </div>
        </div>

        <Link
          to={post.to}
          className="flex items-center gap-[10px] text-[14px] font-bold text-[#737373] mt-2"
        >
          Learn More
          <ChevronRight size={16} className="text-[#23A6F0]" />
        </Link>
      </div>
    </article>
  );
}
