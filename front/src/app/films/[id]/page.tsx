/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { Movie } from "../../types";
import { PageProps } from "../../../../.next/types/app/page";

async function getFilm(id: string): Promise<Movie | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://api:4000';
    console.log(`Fetching from: ${apiUrl}/api/films/${id}`);
    const res = await fetch(`${apiUrl}/api/films/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.log(res);
      throw new Error("Failed to fetch");
    }
    const data = await res.json();
    return {
      ...data.result,
      ...data.result.properties,
      characters: data.result.properties.characters.map((character: any) => ({
        ...character,
        ...character.properties,
      })),
    };
  } catch (error) {
    console.error('Error fetching film:', error);
    return null;
  }
}

export default async function FilmDetailPage({ params }: PageProps) {
  const { id } = await params;
  const film = await getFilm(id);
  console.log(film, id);
  if (!film) {
    return <div className="p-4">Film not found.</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">{film?.title}</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold text-lg border-b pb-1 mb-2">
            Opening Crawl
          </h2>
          <p className="whitespace-pre-line text-gray-700">
            {film?.opening_crawl}
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg border-b pb-1 mb-2">
            Characters
          </h2>
          <div className="flex flex-wrap gap-2">
            {film?.characters?.map((character) => {
              return (
                <Link
                  key={character.uid}
                  href={`/people/${character.uid}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  {character.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-[8.5px] font-bold"
      >
        BACK TO SEARCH
      </Link>
    </div>
  );
}
