"use client";

import { useParams, useSearchParams } from "next/navigation";

export function useRoute() {
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();

  return (route: string) => {
    const query = searchParams.toString();

    return `/${id}/${route}${query ? `?${query}` : ""}`;
  };
}