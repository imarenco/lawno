import React from 'react';
import { People, Movie } from '@/app/types';
import { Title } from '../atoms/Title';
import { Subtitle } from '../atoms/Subtitle';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { MovieLink } from '../molecules/MovieLink';

interface PersonDetailsProps {
  person: People;
}

export const PersonDetails: React.FC<PersonDetailsProps> = ({ person }) => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow rounded w-full">
      <Title>{person?.properties?.name}</Title>

      <div className="grid md:grid-cols-2 gap-6 mb-24">
        <div>
          <Subtitle>Details</Subtitle>
          <Text>
            Birth Year: {person?.properties?.birth_year}
            <br />
            Gender: {person?.properties?.gender}
            <br />
            Eye Color: {person?.properties?.eye_color}
            <br />
            Hair Color: {person?.properties?.hair_color}
            <br />
            Height: {person?.properties?.height}
            <br />
            Mass: {person?.properties?.mass}
          </Text>
        </div>

        <div>
          <Subtitle>Movies</Subtitle>
          <div className="flex flex-wrap gap-2">
            {person?.properties?.films?.map((film: Movie) => (
              <MovieLink key={film.uid} movie={film} />
            ))}
          </div>
        </div>
      </div>

      <Button href="/">
        BACK TO SEARCH
      </Button>
    </div>
  );
}; 