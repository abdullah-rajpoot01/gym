"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ThemeMode() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const mode = searchParams.get("mode") || "light";

    document.body.classList.remove("light", "dark");
    document.body.classList.add(mode === "dark" ? "dark" : "light");
  }, [searchParams]);

  return null;
}