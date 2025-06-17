export type SearchType = "people" | "films";

export type People = {
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
  description: string;
  uid: string;
};

export type Movie = {
  created: string;
  edited: string;
  starships: string[];
  vehicles: string[];
  planets: string[];
  producer: string;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
  species: string[];
  url: string;
  _id: string;
  description: string;
  uid: string;
  characters: People[];
};
