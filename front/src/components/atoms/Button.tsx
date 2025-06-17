import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, href, className = '' }) => {
  return (
    <Link
      href={href}
      className={`inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-[8.5px] font-bold ${className}`}
    >
      {children}
    </Link>
  );
}; 