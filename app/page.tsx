"use client";

import { useSearchParams } from "next/navigation";

import AboutFeatures from "@/components/features";
import CTA from "@/components/cta";
import Features from "@/components/why-us";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import ProgramsComponent from "@/components/programs";
import Team from "@/components/team";
import WhatTakeUsApart from "@/components/what-is-different";
import VideoSection from "@/components/video-section";
import OwnerSection from "@/components/owner-section";
import Location from "@/components/location";
import Stats from "@/components/stats";

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

      <Features />

      <Stats />


      <ProgramsComponent />

      <OwnerSection />


      <AboutFeatures
        gymName={gymName}
        city={city}
      />

      <WhatTakeUsApart
        gymName={gymName}
        city={city} />

      <Pricing gymName={gymName} city={city} phone={phone} />

      <VideoSection />

      <Team />

      <Testimonials gymName={gymName} city={city} />

      <Location />

      <CTA
        gymName={gymName}
        phone={phone}
        city={city}
      />
    </div>
  );
}