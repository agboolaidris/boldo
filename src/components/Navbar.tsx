"use client";
import React, { useState } from "react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@ui/Button";
import { Logo } from "@ui/Logo";
import { Wrapper } from "@ui/Wrapper";
import Link from "next/link";
import { cx } from "class-variance-authority";

const navLink = [
  { label: "Product", href: "/" },
  { label: "Services", href: "/" },
  { label: "About", href: "/" },
];

export const Navbar = () => {
  const [openMobileDrawer, setSetOpenMobileDrawer] = useState(false);
  return (
    <nav>
      <Wrapper className="py-8 flex justify-between gap-8 items-center">
        <Logo mode="light" width={125} />
        <button
          className="md:hidden"
          type="button"
          onClick={() => setSetOpenMobileDrawer((prev) => !prev)}
        >
          <Bars3BottomLeftIcon className="w-10 h-10 text-white" />
        </button>
        <div className="gap-16 hidden md:flex  items-center">
          {navLink.map(({ href, label }, idx) => (
            <Link
              href={href}
              key={idx}
              className="text-white hover:opacity-50 duration-150"
            >
              {label}
            </Link>
          ))}
          <Button size="lg" kinds="secondary" rounded>
            Log in
          </Button>
        </div>
      </Wrapper>

      <div
        className={cx(
          "fixed md:hidden transition-all duration-150 inset-0 w-screen z-50 bg-gray-900/80 bottom-0 h-screen",
          {
            "translate-x-0 opacity-1": openMobileDrawer,
            "-translate-x-full opacity-0": !openMobileDrawer,
          }
        )}
      >
        <Wrapper className="bg-brand-blue">
          <div className="flex justify-between items-center py-8">
            <Logo mode="light" width={125} />
            <button
              className="md:hidden"
              type="button"
              onClick={() => setSetOpenMobileDrawer((prev) => !prev)}
            >
              <XMarkIcon className="w-10 h-10 text-white" />
            </button>
          </div>
          <div className="pb-20 space-y-8">
            {navLink.map(({ href, label }, idx) => (
              <Link
                href={href}
                key={idx}
                className="block text-white text-center py-8 hover:opacity-35 duration-150"
              >
                {label}
              </Link>
            ))}
            <Button size="lg" kinds="secondary" rounded block>
              Log in
            </Button>
          </div>
        </Wrapper>
      </div>
    </nav>
  );
};
