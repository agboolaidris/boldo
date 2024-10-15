"use client";
import Image from "next/image";

import Slider, { Settings } from "react-slick";

const settings: Settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 500,
  cssEase: "linear",
  dots: false,
  infinite: true,
  responsive: [
    { breakpoint: 300, settings: { slidesToShow: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 2 } },
    { breakpoint: 900, settings: { slidesToShow: 3 } },
    { breakpoint: 1200, settings: { slidesToShow: 4 } },
  ],
  slidesToShow: 4,
  speed: 5000,
};

const brands = [
  "/presto.svg",
  "/boldo.svg",
  "/presto.svg",
  "/boldo.svg",
  "/presto.svg",
  "/boldo.svg",
  "/presto.svg",
  "/boldo.svg",
  "/presto.svg",
  "/boldo.svg",
];

export const Brands = () => {
  return (
    <div>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div className="px-4" key={index}>
            <div className="flex aspect-[3/2]  items-center justify-center px-4">
              <Image src={brand} alt="brand" width={156} height={45} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
