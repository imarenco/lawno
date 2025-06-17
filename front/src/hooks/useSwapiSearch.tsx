/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Movie, People, SearchType } from "../app/types";

export function useSwapiSearch(type: SearchType, query: string) {
  const [results, setResults] = useState<Movie[] | People[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `http://localhost:4000/api/${type}?search=${encodeURIComponent(
            query
          )}`
        );
        const data = await res.json();
        setResults(
          data.result.map((item: any) => ({ ...item.properties, ...item }))
        );
      } catch (err: any) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [type, query]);

  return { results, loading, error };
}
