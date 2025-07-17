import { Clock2, MessageSquareText, ChevronRight } from "lucide-react";

export default function CardFeaturedPost({ post }) {
  return (
    <article className="relative w-[330px] h-[606px] bg-white shadow-md flex flex-col mx-auto font-montserrat my-10">
      {/* resim */}
      <div className="relative w-full h-[300px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        {post.isNew && (
          <span className="absolute top-5 left-5 bg-red-600 text-white text-xs font-bold px-2 py-[2px] rounded shadow">
            NEW
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-6 text-gray-500">
        <nav className="flex gap-4 text-xs">
          {post.tags.map((tag, i) => (
            <a
              key={i}
              href="#"
              className={i === 0 ? "text-blue-400" : ""}
            >
              {tag}
            </a>
          ))}
        </nav>

        <h4 className="text-xl font-bold text-gray-900">{post.title}</h4>
        <p className="text-sm">{post.description}</p>

        <div className="flex justify-between text-xs">
          <div className="flex items-center gap-2">
            <Clock2 className="text-blue-500 w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquareText className="text-green-700 w-4 h-4" />
            <span>{post.comment} 10 comments</span>
          </div>
        </div>

        <a href="#" className="flex items-center gap-2 font-bold text-sm text-blue-500">
          Learn More <ChevronRight />
        </a>
      </div>
    </article>
  );
}
