import React, { useState } from "react";
import { SearchType } from "../../app/types";

interface Props {
  searchType: string;
  setSearchType: (type: SearchType) => void;
  onSearch: (query: string) => void;
  loading: boolean;
}

export const SearchBox: React.FC<Props> = ({
  searchType,
  setSearchType,
  onSearch,
  loading,
}) => {
  const [query, setQuery] = useState("");
  const isDisabled = !query || query == "";

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-96 h-[225px]">
      <p className="mb-4 font-semibold">What are you searching for?</p>
      <div className="flex gap-4 mb-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="searchType"
            checked={searchType === SearchType.People}
            onChange={() => {
              setSearchType(SearchType.People);
              setQuery("");
            }}
          />
          People
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="searchType"
            checked={searchType === SearchType.Films}
            onChange={() => {
              setSearchType(SearchType.Films);
              setQuery("");
            }}
          />
          Movies
        </label>
      </div>
      <input
        type="text"
        placeholder={
          searchType === SearchType.People
            ? "e.g. Chewbacca, Yoda, Boba Fett"
            : "e.g. The Empire Strikes Back, The Force Awakens"
        }
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
      />
      <button
        onClick={() => onSearch(query)}
        disabled={isDisabled}
        className={`w-full bg-[#0ab463] rounded-[10px] hover:bg-green-600 text-white font-semibold py-2 cursor-pointer disabled:bg-[#c4c4c4] disabled:cursor-not-allowed`}
      >
        {loading ? "SEARCHING..." : "SEARCH"}
      </button>
    </div>
  );
};
