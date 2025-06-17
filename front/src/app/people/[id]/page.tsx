import React from "react";
import { getPerson } from "@/utils/requests";
import { PageProps } from "../../../../.next/types/app/page";
import { PersonDetails } from "@/components/organisms/PersonDetails";

export default async function PersonDetailPage({ params }: PageProps) {
  const { id } = await params;
  const person = await getPerson(id);

  if (!person) {
    return <div className="p-4">Person not found.</div>;
  }

  return <PersonDetails person={person} />;
}
