import React from "react";
import ScaleOnHover from "./ScaleOnHover";
import Image from "next/image";
export function VideoCard({ ...props }) {
  return (
    <ScaleOnHover>
      <button
        name="video-card"
        className={`w-56 h-32 relative shows-item ${props.first ? "ml-8" : ""} rounded-md overflow-hidden`}
      >
        <Image
          src={props.img}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
      </button>
    </ScaleOnHover>
  );
}
