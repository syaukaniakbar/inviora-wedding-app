import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import { Link } from "react-router-dom";

const reviews = [
  {
    img: "/davila.jpg",
    imgHover: "/davilaDetail.jpg",
    slug: "digital-marketing-profile-company-davila",
  },

  {
    img: "/active-festival.png",
    imgHover: "/active-festivalDetail.png",
    slug: "active-festival-or-event-registration-platform",
  },
  {
    img: "/uwgmrun.png",
    imgHover: "/uwgmrunDetail.png",
    slug: "uwgm-run-festival-or-event-registration-platform",
  },

  {
    img: "/sirkel.jpg",
    imgHover: "/sirkelDetail.jpg",
    slug: "digital-marketing-agency-landing-page-sirkel",
  },
  {
    img: "/kaltimfolks.jpg",
    imgHover: "/kaltimfolksDetail.jpg",
    slug: "news-media-website-kaltimfolks",
  },
];

function ReviewCard({ img, imgHover, slug }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <figure
      className="relative h-full w-130 md:w-130 lg:w-150 cursor-pointer overflow-hidden bg-neutral-900 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      aria-label="Project Preview"
    >
      <div className="relative w-full h-90 md:h-100 lg:h-90">
        <img
          className="object-cover w-full h-full absolute inset-0 transition-opacity duration-500 ease-in-out"
          alt="Project preview"
          src={img}
          style={{ opacity: hovered ? 0 : 1 }}
          draggable={false}
        />
        <img
          className="object-cover w-full h-full absolute inset-0 transition-opacity duration-500 ease-in-out"
          alt="Project preview hover"
          src={imgHover}
          style={{ opacity: hovered ? 1 : 0 }}
          draggable={false}
        />
        <Link
          to={`/portfolio/${slug}`}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white px-4 py-2 bg-black/70 rounded-2xl text-sm font-semibold tracking-wide transition-all duration-300 ${
            hovered
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          VIEW PROJECT
        </Link>
      </div>
    </figure>
  );
}

function MarqueeShowcase() {
  // Tampilkan semua gambar project di marquee
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden text-white">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeShowcase;
