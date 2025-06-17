"use client";

import { useParams } from "next/navigation";
import { usePersonDetail } from "../../../hooks/usePersonDetail";
import Link from "next/link";

export default function PersonDetail() {
  const params = useParams();
  const id = params?.id as string;
  const { data: person } = usePersonDetail(id);

  return (
    person && (
      <div className="p-8 max-w-4xl mx-auto bg-white shadow rounded w-full">
        <h1 className="text-2xl font-bold mb-4">{person?.name}</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold text-lg border-b pb-1 mb-2">
              Details
            </h2>
            <p className="whitespace-pre-line text-gray-700">
              Birth Year: {person?.birth_year}
              <br />
              Gender: {person?.gender}
              <br />
              Eye Color: {person?.eye_color}
              <br />
              Hair Color: {person?.hair_color}
              <br />
              Height: {person?.height}
              <br />
              Mass: {person?.mass}
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg border-b pb-1 mb-2">Movies</h2>
            <div className="flex flex-wrap gap-2">
              {person?.films?.map((film) => { 
                return (
                  <Link
                    key={""}
                    href={`/people/${film.uid}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {film.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-[8.5px] font-bold mt-50"
        >
          BACK TO SEARCH
        </Link>
      </div>
    )
  );
}
