import { VideoCard } from "./video-card";
import React from "react";
import Image from "next/image";
import ScaleOnHover from "./ScaleOnHover";

export function Carousel({ images }) {
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
      <div className="px-16 pt-5 sm:px-20 md:px-30 text-xs sm:text-md lg:text-lg font-bold">
        Top Searches
      </div>
      <div
        name="top-search"
        className="shows-wrapper mx-4 sm:mx-8 md:mx-16 py-2"
      >
        <div id="section1" className="shows-section">
          <button
            className="absolute text-3xl z-30 top-6 sm:top-11"
            onClick={() => scrollToSection("section3")}
          >
            ‹
          </button>
          {images[0].map((image, i) => {
            return(<VideoCard
            key={i}
              img={image}
              first={true}
            />);
          })}
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
          {images[1].map((image, i) => {
            return(<VideoCard
            key={i}
              img={image}
              first={true}
            />);
          })}
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
          {images[2].map((image, i) => {
            return(<VideoCard
            key={i}
              img={image}
              first={true}
            />);
          })}
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
