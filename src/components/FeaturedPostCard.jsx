import featuredPosts from "../data/featuredPosts";
import CardFeaturedPost from "./CardFeaturedPost";

export default function FeaturedPostCard() {
  return (
    <section className="my-1">
        <div className="mx-auto flex flex-col justify-center items-center text-center gap-2 w-[90%] md:w-[700px] font-montserrat">
            <h6 className="text-[14px] font-bold leading-[24px] tracking-[0.2px] uppercase text-[#23A6F0] w-[150px]">
                Practice Advice
            </h6>
            <h2 className="text-[40px] md:text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42] w-[239px] h-[100px]">
                Featured Posts
            </h2>
            <p className="text-[14px] font-normal leading-[20px] tracking-[0.2px] text-[#737373] w-[261px] text-center mx-auto">
                Problems trying to resolve the conflict between the two major
            </p>
        </div>

      {/* Cards */}
      <div className="flex flex-col justify-center items-start gap-8 mt-4">
        {featuredPosts.map((post, index) => (
          <CardFeaturedPost key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
