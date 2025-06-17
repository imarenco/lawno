/* eslint-disable @typescript-eslint/no-explicit-any */

import { People } from "@/app/types";
import { useEffect, useState } from "react";

export function usePersonDetail(id: string) {
  const [data, setData] = useState<People | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:4000/api/people/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");

        const json = await res.json();
        setData({
          ...json?.person?.properties,
          ...json?.person,
          films: json?.person?.properties?.films?.map((film: any) => ({
            ...film,
            ...film.properties,
          })),
        });
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
