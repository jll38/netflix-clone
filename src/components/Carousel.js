import { VideoCard } from "./video-card";
import React from "react";
import Image from "next/image";
import ScaleOnHover from "./ScaleOnHover";
import { useState } from "react";

export function Carousel({ header, images }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const [sectionL, setSectionL] = useState(3);
  const [sectoionR, setSectionR] = useState(2);

  return (
    <>
      <div className="px-16 pt-5 sm:px-20 md:px-30 text-xs sm:text-md lg:text-lg font-bold">
        {header}
      </div>
      <div name="top-search" className="shows-wrapper mx-4 sm:mx-8 md:mx-20">
        <button
          className="absolute text-3xl z-30 top-28 left-10"
          onClick={() => {
            scrollToSection(`section${sectionL}`);
            if (sectionL != 1) {
              setSectionL(sectionL - 1);
            } else {
              setSectionL(3);
            }
          }}
        >
          ‹
        </button>
        <button
          className="absolute text-3xl z-30 top-28 right-12"
          onClick={() => {
            scrollToSection(`section${sectionL}`);
            if (sectionL != 3) {
              setSectionL(sectionL + 1);
            } else {
              setSectionL(1);
            }
          }}
        >
          ›
        </button>
        <div id="section1" className="shows-section">
          {images[0].map((image, i) => {
            return <VideoCard key={i} img={image} first={true} />;
          })}
        </div>

        <div id="section2" className="shows-section">
          {images[1].map((image, i) => {
            return <VideoCard key={i} img={image} first={true} />;
          })}
        </div>

        <div id="section3" className="shows-section">
          {images[2].map((image, i) => {
            return <VideoCard key={i} img={image} first={true} />;
          })}
        </div>
      </div>
    </>
  );
}
