import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ children, className = '' }) => {
  return (
    <h1 className={`text-2xl font-bold mb-4 ${className}`}>
      {children}
    </h1>
  );
}; 