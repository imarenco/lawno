import { useEffect, useState } from "react";
import { Movie, People, SearchType } from "../app/types";
import { getList } from "@/utils/requests";

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
        const data = await getList(type, query);
        setResults(data);
      } catch (error: unknown) {
        console.error(error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [type, query]);

  return { results, loading, error };
}
