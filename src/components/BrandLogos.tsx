import { useEffect, useRef } from "react";
// @ts-ignore
import InfiniteMarquee from "vanilla-infinite-marquee";
import "./BrandLogos.css";

import am from "../assets/brands/am.png";
import bentley from "../assets/brands/bentley.png";
import bmw from "../assets/brands/bmw.png";
import jaguar from "../assets/brands/jaguar.png";
import vauxhall from "../assets/brands/vauxhall.png";
import landrover from "../assets/brands/landrover.png";
import renault from "../assets/brands/renault.png";
import honda from "../assets/brands/honda.png";
import toyota from "../assets/brands/toyota.png";
import ford from "../assets/brands/ford.png";
import nissan from "../assets/brands/nissan.png";
import volkswagen from "../assets/brands/volkswagen.png";
import buse from "../assets/brands/buse.png";
import tgw from "../assets/brands/tgw.png";
import ruthlee from "../assets/brands/ruthlee.png";
import j9 from "../assets/brands/j9.png";

function BrandLogos() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const marquee = new InfiniteMarquee({
      element: ".marquee-container",
      speed: 250000,
      smoothEdges: false,
      direction: "right",
      gap: "15px",
      duplicateCount: 2,
      mobileSettings: {
        direction: "right",
        speed: 150000,
      },
    });

    return () => {
      marquee.destroy();
    };
  }, []);

  const logos = [
    am,
    bentley,
    bmw,
    landrover,
    tgw,
    jaguar,
    vauxhall,
    renault,
    honda,
    ruthlee,
    toyota,
    ford,
    buse,
    nissan,
    volkswagen,
    j9,
  ];

  return (
    <>
      <h2 className="text-base md:text-lg font-semibold text-impacta11 mb-8 text-right pr-28 text-opacity-75">
        Brands Who Trust Us
      </h2>
      <div className="marquee-container" ref={marqueeRef}>
        <div className="marquee">
          {logos.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Image ${index + 1}`}
              style={{ margin: "0 25px" }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BrandLogos;
