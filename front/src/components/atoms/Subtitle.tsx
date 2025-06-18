import React from 'react';

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`font-semibold text-lg border-[#c4c4c4] border-b pb-1 mb-2 ${className}`}>
      {children}
    </h2>
  );
}; 