"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@ui/Button";
import { BodyText, Title } from "@ui/Text";
import Image from "next/image";
import React from "react";

import Slider, { Settings } from "react-slick";

const settings: Settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 500,
  cssEase: "linear",
  dots: false,
  infinite: true,
  responsive: [
    { breakpoint: 600, settings: { slidesToShow: 1 } },

    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
  ],
  slidesToShow: 3,
  speed: 5000,
};

const reviews = [
  {
    message:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    fullName: "Albus Dumbledore",
    position: "Manager @ Howarts",
    profile: "/harry.svg",
  },
  {
    message:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    fullName: "Severus Snape",
    position: "Manager @ Slytherin",
    profile: "/snape.svg",
  },
  {
    message:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    fullName: "Harry Potter",
    position: "Team Leader @ Gryffindor",
    profile: "/harry.svg",
  },
];

export const Testimonial = () => {
  return (
    <div>
      <div className="sm:flex gap-4 space-y-8 items-end justify-between">
        <Title className="text-white max-w-3xl">
          An enterprise template to ramp up your company website
        </Title>
        <div className="flex gap-4 ml-auto w-max">
          <Button kinds="secondary" className="!rounded-full !p-4">
            <ArrowLeftIcon className="w-6 h-6" />
          </Button>
          <Button kinds="secondary" className="!rounded-full !p-4">
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="mt-8 sm:mt-16">
        <Slider {...settings}>
          {reviews.map(({ message, fullName, position, profile }, index) => (
            <div className="px-4" key={index}>
              <div className="bg-white   p-4 sm:p-8 lg:p-12 rounded-lg">
                <BodyText className="font-manrope text-2xl text-black">
                  {message}
                </BodyText>
                <div className="mt-12 flex gap-4">
                  <div className="bg-gray-100 relative w-16 aspect-square rounded-full overflow-hidden">
                    <Image src={profile} alt={fullName} fill />
                  </div>
                  <div>
                    <BodyText className="!text-black !font-semibold">
                      {fullName}
                    </BodyText>
                    <BodyText>{position}</BodyText>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
