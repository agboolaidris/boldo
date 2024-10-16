import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FadeIn } from "@ui/Fadein";
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
      <div className="relative w-full aspect-video sm:aspect-[5/2] rounded-xl sm:rounded-3xl overflow-hidden bg-gray-50">
        <Image fill src="/work-space.svg" alt="work-space" objectFit="cover" />
      </div>

      <div className="grid md:grid-cols-2 mt-4 sm:mt-8 gap-8">
        <FadeIn>
          <div className="mt-8">
            <Title className="md:!text-4xl tracking-wider md:!leading-[2]">
              We connect our customers with the best, and help them keep up and
              stay open.
            </Title>
          </div>
        </FadeIn>
        <FadeIn>
          {content.map((text, idx) => (
            <div
              key={idx}
              className="border-b py-10 flex items-center justify-between gap-8"
            >
              <BodyText className="!text-2xl"> {text}</BodyText>{" "}
              <div className="bg-brand-blue w-max p-2 rounded-full ">
                <ChevronDownIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </div>
  );
};
