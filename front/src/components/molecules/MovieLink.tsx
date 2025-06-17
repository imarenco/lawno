import React from "react";
import Link from "next/link";
import { Movie } from "@/app/types";

interface MovieLinkProps {
  movie: Movie;
}

export const MovieLink: React.FC<MovieLinkProps> = ({ movie }) => {
  return (
    <Link
      href={`/films/${movie.uid}`}
      className="text-blue-600 hover:underline text-sm"
    >
      {movie?.properties?.title}
    </Link>
  );
};
