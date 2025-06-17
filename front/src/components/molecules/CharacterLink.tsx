import React from 'react';
import Link from 'next/link';
import { People } from '@/app/types';

interface CharacterLinkProps {
  character: People;
}

export const CharacterLink: React.FC<CharacterLinkProps> = ({ character }) => {
  return (
    <Link
      href={`/people/${character.uid}`}
      className="text-blue-600 hover:underline text-sm"
    >
      {character?.properties?.name}
    </Link>
  );
}; 