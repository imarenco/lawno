import React from "react";
import Link from "next/link";
import { EmptyState } from "../molecules/EmptyState";
import { Movie, People, SearchType } from "../../app/types";

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
    <div className="bg-white shadow-md rounded-lg p-6 w-[600px] h-130">
      <h2 className="font-bold mb-2">Results</h2>
      <div className="w-full h-[1px] bg-[#c4c4c4] mb-1"></div>
      {results?.length === 0 || isLoading ? (
        <EmptyState isLoading={isLoading} />
      ) : (
        <ul className="space-y-4 h-full overflow-hidden flex flex-col overflow-y-auto h-full max-h-[90%]">
          {results.map((item, idx) => {
            const properties = item.properties;
            return (
              <li
                key={idx}
                className="flex justify-between items-center border-[#c4c4c4] border-b pb-3 pt-3 m-[0px]"
              >
                <span className="font-semibold">
                  {"name" in properties && properties?.name}
                  {"title" in properties && properties?.title}
                </span>
                <Link href={`/${searchType}/${item.uid}`}>
                  <button className="bg-[#0ab463] hover:bg-green-600 text-white px-4 py-1  cursor-pointer font-bold rounded-[8.5px]">
                    SEE DETAILS
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
