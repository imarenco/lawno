import React from "react";
import Link from "next/link";
import { EmptyState } from "./EmptyState";
import { Movie, People, SearchType } from "../app/types";

interface Props {
  results: Movie[] | People[];
  isLoading: boolean;
  searchType: SearchType;
}

export const ResultsList: React.FC<Props> = ({
  results,
  isLoading,
  searchType,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-96 h-120">
      <h2 className="font-bold mb-4">Results</h2>
      <ul className="space-y-4 h-full overflow-hidden">
        {results?.length === 0 || isLoading ? (
          <EmptyState isLoading={isLoading} />
        ) : (
          <div className="flex flex-col overflow-y-auto h-full max-h-[90%]">
            {results.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="flex justify-between items-center border-[#c4c4c4] border-b pb-2 pt-2"
                >
                  <span className="font-semibold">
                    {"name" in item && item.name}
                    {"title" in item && item.title}
                  </span>
                  <Link href={`/${searchType}/${item.uid}`}>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1  cursor-pointer font-bold rounded-[8.5px]">
                      SEE DETAILS
                    </button>
                  </Link>
                </li>
              );
            })}
          </div>
        )}
      </ul>
    </div>
  );
};
