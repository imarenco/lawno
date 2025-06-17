import React from "react";
import { getFilm } from "@/utils/requests";
import { PageProps } from "../../../../.next/types/app/page";
import { FilmDetails } from "@/components/organisms/FilmDetails";

export default async function FilmDetailPage({ params }: PageProps) {
  const { id } = await params;
  const film = await getFilm(id);

  if (!film) {
    return <div className="p-4">Film not found.</div>;
  }

  return <FilmDetails film={film} />;
}
