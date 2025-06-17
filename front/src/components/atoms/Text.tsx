import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, className = '' }) => {
  return (
    <p className={`whitespace-pre-line text-gray-700 ${className}`}>
      {children}
    </p>
  );
}; 