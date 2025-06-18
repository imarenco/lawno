import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`bg-[#0ab463] hover:bg-green-600 text-white px-4 py-2 cursor-pointer font-bold rounded-[8.5px] ${className}`}
    >
      {children}
    </Link>
  );
};
