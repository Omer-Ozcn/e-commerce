import blogPosts from "../data/blog/BlogPosts";
import BlogCard from "../components/blog/BlogCard";

export default function Blog() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1050px] mx-auto px-4 py-10 lg:py-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[30px]">
          {blogPosts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}