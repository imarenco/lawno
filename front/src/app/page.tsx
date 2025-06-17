"use client";

import React, { useState } from "react";
import { SearchBox } from "../components/SearchBox";
import { ResultsList } from "../components/ResultsList";

import { SearchType } from "./types";
import { useSwapiSearch } from "@/hooks/useList";

export default function SearchPage() {
  const [searchType, setSearchType] = useState<SearchType>("people");
  const [search, setSearch] = useState("");
  const onChangeType = (type: SearchType) => {
    setSearchType(type);
    setSearch("");
  };

  const { results, loading } = useSwapiSearch(searchType, search);
  return (
    <div className="flex gap-8 items-start">
      <SearchBox
        searchType={searchType}
        loading={loading}
        setSearchType={onChangeType}
        onSearch={(str) => setSearch(str)}
      />
      <ResultsList
        searchType={searchType}
        results={results}
        isLoading={loading}
      />
    </div>
  );
}
