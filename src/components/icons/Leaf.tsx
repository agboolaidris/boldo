import React, { SVGProps } from "react";

export const LeafIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.24 14.24C23.3658 13.1142 23.9983 11.5872 23.9983 9.99504C23.9983 8.40285 23.3658 6.87588 22.24 5.75004C21.1142 4.62419 19.5872 3.9917 17.995 3.9917C16.4028 3.9917 14.8758 4.62419 13.75 5.75004L7 12.5V21H15.5L22.24 14.24Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 10L4 24"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.5 17H11"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
