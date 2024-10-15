import { Logo } from "@ui/Logo";
import { BodyText } from "@ui/Text";
import { Wrapper } from "@ui/Wrapper";
import Link from "next/link";
import React from "react";

const landing = [
  { label: "Home", href: "" },
  { label: "Products", href: "" },
  { label: "Services", href: "" },
];

const company = [
  { label: "Home", href: "" },
  { label: "Career", href: "", description: "Hiring!" },
  { label: "Services", href: "" },
];

export const Footer = () => {
  return (
    <footer>
      <Wrapper className="py-16 sm:py-32  gap-12 lg:gap-20 grid grid-cols-2 md:grid-cols-5">
        <div className="max-w-sm shrink-0 col-span-2">
          <Logo />
          <BodyText className="mt-6">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </BodyText>
          <BodyText className="mt-16">All rights reserved.</BodyText>
        </div>

        <div className="gap-8 flex flex-col shrink-0 ">
          <BodyText className="!font-semibold text-lg !text-black">
            Landings
          </BodyText>
          {landing.map(({ href, label }, index) => (
            <Link key={index} href={href} className="">
              <BodyText className="hover:opacity-80 hover:underline duration-100">
                {label}
              </BodyText>
            </Link>
          ))}
        </div>
        <div className="gap-8 flex flex-col shrink-0">
          <BodyText className="!font-semibold text-lg !text-black">
            Company
          </BodyText>
          {company.map(({ href, label, description }, index) => (
            <Link key={index} href={href} className="flex items-center gap-1">
              <BodyText className="hover:opacity-80 hover:underline duration-100">
                {label}
              </BodyText>
              {description && (
                <BodyText className="bg-brand-green px-3 py-1 rounded-full !text-xs text-brand-blue font-semibold">
                  {description}
                </BodyText>
              )}
            </Link>
          ))}
        </div>
        <div className="gap-8 flex flex-col shrink-0">
          <BodyText className="!font-semibold text-lg !text-black">
            Resources
          </BodyText>
          {landing.map(({ href, label }, index) => (
            <Link key={index} href={href} className="">
              <BodyText className="hover:opacity-80 hover:underline duration-100">
                {label}
              </BodyText>
            </Link>
          ))}
        </div>
      </Wrapper>
    </footer>
  );
};
