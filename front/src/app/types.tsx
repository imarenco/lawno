export type SearchType = "people" | "films";

export type People = {
  properties: PeopleProps;
  description: string;
  uid: string;
};

export type PeopleProps = {
  created: string;
  edited: string;
  name: string;
  gender: string;
  skin_color: string;
  films: Movie[];
  hair_color: string;
  height: string;
  eye_color: string;
  mass: string;
  homeworld: string;
  birth_year: string;
  url: string;
  _id: string;
};

export type Movie = {
  properties: MovieProps;
  description: string;
  uid: string;
};

export type MovieProps = {
  created: string;
  edited: string;
  producer: string;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
  characters: People[];
  species: string[];
  url: string;
  _id: string;
};
