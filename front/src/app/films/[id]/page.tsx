import React from "react";
import Link from "next/link";
import { getFilm } from "@/utils/requests";
import { PageProps } from "../../../../.next/types/app/page";

export default async function FilmDetailPage({ params }: PageProps) {
  const { id } = await params;
  const film = await getFilm(id);

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
