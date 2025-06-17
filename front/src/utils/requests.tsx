import { Movie, People } from "@/app/types";
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://0.0.0.0:4000";

export async function getFilm(id: string): Promise<Movie | null> {
  try {
    console.log(`Fetching from: ${apiUrl}/api/films/${id}`);
    const res = await fetch(`${apiUrl}/api/films/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching film:", error);
    return null;
  }
}

export async function getPerson(id: string): Promise<People | null> {
  try {
    const res = await fetch(`${apiUrl}/api/people/${id}`);
    if (!res.ok) throw new Error("Failed to fetch");

    const json = await res.json();
    return json.person;
  } catch (error) {
    console.error("Error fetching person detail:", error);
    return null;
  }
}

export async function getList(
  type: string,
  query: string
): Promise<People[] | Movie[] | []> {
  try {
    const res = await fetch(
      `${apiUrl}/api/${type}?search=${encodeURIComponent(query)}`
    );
    if (!res.ok) throw new Error("Failed to fetch");

    const json = await res.json();
    return json.result;
  } catch (error) {
    console.error("Error fetching person detail:", error);
    return [];
  }
}
