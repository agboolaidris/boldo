import { cx } from "class-variance-authority";
import React, { DetailedHTMLProps } from "react";

type WrapperProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & { size?: "xl" | "lg" };
export const Wrapper = ({ size = "xl", className, ...rest }: WrapperProps) => {
  return (
    <section
      className={cx(
        "mx-auto   px-4 sm:px-6 xl:px-8",
        { "max-w-[1440px]": size === "xl", "max-w-[1340px]": size === "lg" },
        className
      )}
      {...rest}
    />
  );
};
