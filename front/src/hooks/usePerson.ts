/* eslint-disable @typescript-eslint/no-explicit-any */

import { People } from "@/app/types";
import { getPerson } from "@/utils/requests";
import { useEffect, useState } from "react";

export function usePerson(id: string) {
  const [data, setData] = useState<People | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const person = await getPerson(id);
        setData(person);
      } catch (error) {
        console.error("Error fetching person detail:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDetail();
  }, [id]);

  return { data, loading };
}
