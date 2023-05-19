import { VideoCard } from "./video-card";
import React from "react";
import Image from "next/image";
import ScaleOnHover from "./ScaleOnHover";

export function Carousel({}) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="px-16 pt-5 sm:px-20 md:px-32 text-xs sm:text-md lg:text-lg font-bold">
        Top Searches
      </div>
      <div name="top-search" className="shows-wrapper mx-24 py-2">
        <div id="section1" className="shows-section">
          <button
            className="absolute text-3xl z-30 top-6 sm:top-11"
            onClick={() => scrollToSection("section3")}
          >
            ‹
          </button>
          <VideoCard img="/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg" first={true}/>
          <VideoCard img="/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg" first={false}/>
          <VideoCard img="/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg" first={false}/>
          <VideoCard img="/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg" first={false}/>
          <a
            className="absolute right-0 text-3xl z-30 top-6 sm:top-11"
            onClick={() => scrollToSection("section2")}
          >
            ›
          </a>
        </div>

        <div id="section2" className="shows-section">
          <a
            className="absolute text-3xl z-30 top-6 sm:top-11 left-2"
            onClick={() => scrollToSection("section1")}
          >
            ‹
          </a>
          <button
            name="video-card"
            className="w-56 h-32 relative mr-5 shows-item ml-8"
          >
            <Image
              src="/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            />
          </button>

          {/* Rest of the buttons for section2 */}

          <a
            className="absolute right-0 text-3xl z-30 top-6 sm:top-11"
            onClick={() => scrollToSection("section3")}
          >
            ›
          </a>
        </div>

        <div id="section3" className="shows-section">
          <a
            className="absolute text-3xl z-30 top-6 sm:top-11 left-2"
            onClick={() => scrollToSection("section2")}
          >
            ‹
          </a>
          <button
            name="video-card"
            className="w-56 h-32 relative mr-5 shows-item ml-8"
          >
            <Image
              src="/image/AAAABRwuS9u6qnSqe9jHPTLgnTo7AFdZAZM1rZ-z-jA_h1960CwRv63bUeSLO9svPp7enVpGiH7yxzdPVyY0Sp8AcTXTPwLjVB28thfg.jpg"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            />
          </button>

          {/* Rest of the buttons for section3 */}

          <a
            className="absolute right-0 text-3xl z-30 top-6 sm:top-11"
            onClick={() => scrollToSection("section1")}
          >
            ›
          </a>
        </div>
      </div>
    </>
  );
}
