// src/components/team/TeamGallery.jsx
export default function TeamGallery({
  // public/team içinde duruyorlar
  images = [
    "/team/teampage1.jpg", // büyük sol
    "/team/teampage2.jpg",
    "/team/teampage3.jpg",
    "/team/teampage4.jpg",
    "/team/teampage5.jpg",
  ],
}) {
  const main = images[0];
  const thumbs = images.slice(1, 5); // sağda 4 kare

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4">
          {/* büyük görsel */}
          <img
            src={main}
            alt="team-gallery-main"
            loading="lazy"
            className="col-span-2 row-span-2 w-full h-[340px] md:h-[420px] object-cover rounded-lg"
          />

          {/* sağdaki küçük görseller */}
          {thumbs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`team-gallery-${i + 1}`}
              loading="lazy"
              className="w-full h-[160px] md:h-[200px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
