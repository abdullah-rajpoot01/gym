"use client";

import { useSearchParams } from "next/navigation";

import AboutFeatures from "@/components/features";
import CTA from "@/components/cta";
import Features from "@/components/why-us";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  const searchParams = useSearchParams();

  const gymName = searchParams.get("name") || "Rajpoot";
  const phone = searchParams.get("phone") || "+92 300 0000000";
  const city = searchParams.get("city") || "Multan";

  return (
    <div className="overflow-hidden">
      <Hero
        gymName={gymName}
        phone={phone}
        city={city}
      />

      <Features
        gymName={gymName}
        city={city}
      />

      <AboutFeatures
        gymName={gymName}
        city={city}
      />

      <Pricing gymName={gymName} city={city} phone={phone}/>

      <Testimonials gymName={gymName} city={city} />

      <CTA
        gymName={gymName}
        phone={phone}
        city={city}
      />
    </div>
  );
}