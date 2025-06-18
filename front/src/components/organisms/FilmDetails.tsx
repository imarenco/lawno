import React from "react";
import { Movie } from "@/app/types";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { Text } from "../atoms/Text";
import { CharacterLink } from "../molecules/CharacterLink";
import { Button } from "../atoms/Button";

interface FilmDetailsProps {
  film: Movie;
}

export const FilmDetails: React.FC<FilmDetailsProps> = ({ film }) => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow rounded">
      <Title>{film?.properties?.title}</Title>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <Subtitle>Opening Crawl</Subtitle>
          <Text>{film?.properties?.opening_crawl}</Text>
        </div>

        <div>
          <Subtitle>Characters</Subtitle>
          <div className="flex flex-wrap gap-0">
            {film?.properties?.characters?.map((character, index) => [
              <CharacterLink
                key={`${index}-${character.uid}`}
                character={character}
              />,
              <label key={`${index}`} className="text-sm mr-1">
                {index < film?.properties?.characters?.length - 1 && ", "}
              </label>,
            ])}
          </div>
        </div>
      </div>

      <Button href="/">BACK TO SEARCH</Button>
    </div>
  );
};
