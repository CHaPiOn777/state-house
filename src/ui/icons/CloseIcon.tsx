import React from "react";

interface Props {
  fillDefault?: string;
  strokeDefault?: string;
  fillHovered?: string;
  strokeHovered?: string;
  size: number;
}

export const CloseIcon: React.FC<Props> = ({
  strokeDefault = "#1C2024",
  strokeHovered,
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 5L5 19"
        stroke={strokeDefault || strokeHovered}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5L19 19"
        stroke={strokeDefault || strokeHovered}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
