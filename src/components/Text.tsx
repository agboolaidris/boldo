import { cx } from "class-variance-authority";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

type TitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function Title({ className, ...rest }: TitleProps) {
  return (
    <h2
      className={cx(
        "text-3xl font-manrope leading-[1.8] sm:leading-[1.5] sm:text-5xl font-light",
        className
      )}
      {...rest}
    />
  );
}

export function BodyText({ className, ...rest }: TitleProps) {
  return (
    <p
      className={cx(
        "text-base font-normal text-brand-gray leading-relaxed font-open-sans",
        className
      )}
      {...rest}
    />
  );
}
