import {
  ArrowRightIcon,
  CheckIcon,
  EyeIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@ui/Button";
import { LeafIcon } from "@ui/icons/Leaf";
import { BodyText, Title } from "@ui/Text";
import { cx } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    image: "/services/jacket-illustration.svg",
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
  },
  {
    image: "/services/handshake-illustration.svg",
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
  },
  {
    image: "/services/office-illustration.svg",
    title: "Cool feature title",
    description: "Learning curve network effects return on investment.",
  },
];

const service2 = [
  "We connect our customers with the best.",
  "Advisor success customer launch party.",
  "Business-to-consumer long tail.",
];

const service3 = [
  { icon: LeafIcon, label: "We connect our customers with the best." },
  { icon: EyeIcon, label: "Advisor success customer launch party." },
  { icon: SunIcon, label: "Business-to-consumer long tail." },
];

export const Services = () => {
  return (
    <div>
      <div className="text-center">
        <BodyText>Services</BodyText>
        <Title>
          Handshake infographic mass market <br /> crowdfunding iteration.
        </Title>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-16">
        {services.map(({ description, image, title }, idx) => (
          <div key={idx}>
            <div className="max-w-sm mx-auto sm:mx-0">
              <div className="relative aspect-[1/1.3] w-full">
                <Image src={image} alt={title} fill />
              </div>
              <BodyText className="text-xl !text-black">{title}</BodyText>
              <BodyText className="mt-1">{description}</BodyText>
              <Link
                href=""
                className="font-medium flex items-center gap-3 mt-2 relative pb-1"
              >
                Explore page <ArrowRightIcon className="w-5 h-5 " />
                <div className="h-[1px] absolute bg-black bottom-0 w-32" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-20 pt-16 sm:pt-32 ">
        <div className="self-center">
          <div className="relative w-full aspect-[1/1.2] flex-1 max-w-xl items-center rounded-3xl overflow-hidden">
            <Image src="/services/men.svg" alt="men" fill objectFit="cover" />
          </div>
        </div>
        <div className="self-center">
          <div className="flex-1 space-y-8 ">
            <Title className="sm:!text-4xl">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Title>
            <div className="py-5 space-y-6">
              {service2.map((text, idx) => (
                <div className="flex items-center gap-4" key={idx}>
                  <div className="bg-black w-max p-2 rounded-full ">
                    <CheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <BodyText>{text}</BodyText>
                </div>
              ))}
            </div>
            <Button size="lg" rounded>
              Start now
            </Button>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2  sm:gap-20 pt-16 sm:pt-32">
        <div className="self-center order-last sm:order-first">
          <div className="space-y-8">
            <Title className="sm:!text-4xl">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </Title>
            <div className="py-5 space-y-8">
              {service3.map(({ icon: Icon, label }, idx) => (
                <div
                  className={cx(
                    "flex items-center gap-4  p-4 rounded drop-shadow-lg ",
                    {
                      "bg-black": idx === 0,
                      "bg-white": idx !== 0,
                    }
                  )}
                  key={idx}
                >
                  <Icon
                    className={cx("w-6 h-6", {
                      "!text-white": idx === 0,
                    })}
                  />

                  <BodyText
                    className={cx("text-black", {
                      "!text-white": idx === 0,
                    })}
                  >
                    {label}
                  </BodyText>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="self-center">
          <div className="relative   w-full aspect-[1/1.25] flex-1 max-w-xl items-center rounded-3xl overflow-hidden">
            <Image src="/services/women.svg" alt="men" fill objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
