import Image, { ImageProps } from "next/image";
import React from "react";

type Props = Partial<ImageProps> & {
  mode?: "dark" | "light";
};

export const Logo = ({ mode = "dark", ...rest }: Props) => {
  return (
    <Image
      src={mode === "dark" ? "/black-logo.svg" : "/white-logo.svg"}
      alt="boldo logo"
      width={156}
      height={45}
      {...rest}
    />
  );
};
