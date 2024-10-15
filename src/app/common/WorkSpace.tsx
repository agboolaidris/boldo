import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { BodyText, Title } from "@ui/Text";
import Image from "next/image";
import React from "react";

const content = [
  "We connect our customers with the best?",
  "Android research & development rockstar? ",
];

export const WorkSpace = () => {
  return (
    <div>
      <div className="relative w-full aspect-[5/2] rounded-3xl overflow-hidden">
        <Image fill src="/work-space.svg" alt="work-space" objectFit="cover" />
      </div>
      <div className="grid md:grid-cols-2 mt-4 sm:mt-8 gap-8">
        <div className="mt-8">
          <Title className="md:!text-4xl tracking-wider md:!leading-[2]">
            We connect our customers <br /> with the best, and help them <br />{" "}
            keep up-and stay open.
          </Title>
        </div>
        <div>
          {content.map((text, idx) => (
            <div
              key={idx}
              className="border-b py-10 flex items-center justify-between gap-8"
            >
              <BodyText className="!text-2xl"> {text}</BodyText>{" "}
              <div className="bg-black w-max p-2 rounded-full ">
                <ChevronDownIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
