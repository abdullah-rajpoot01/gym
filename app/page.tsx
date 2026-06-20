"use client";

import { useSearchParams } from "next/navigation";

import AboutFeatures from "@/components/features";
import CTA from "@/components/cta";
import Features from "@/components/why-us";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import ProgramsComponent from "@/components/programs";
import Team from "@/components/team";
import WhatTakeUsApart from "@/components/what-is-different";
import VideoSection from "@/components/video-section";
import OwnerSection from "@/components/owner-section";
import Location from "@/components/location";
import Stats from "@/components/stats";
import HeroSection from "@/components/hero-section";

export default function Home() {
  const searchParams = useSearchParams();


  const gymName = searchParams.get("name") || "CrossFit";
  const phone = searchParams.get("phone") || "92 300 0000000";
  const city = searchParams.get("city") || "Multan";
  return (
    <div className="overflow-hidden">
      <HeroSection gymName={gymName}
        phone={phone}
        city={city} />

      <Features />

      <VideoSection gymName={gymName} city={city} phone={phone} />

      <ProgramsComponent />

      <OwnerSection
        gymName={gymName}
        phone={phone}
        city={city}
      />


      <AboutFeatures
        gymName={gymName}
        city={city}
      />

      <WhatTakeUsApart
        gymName={gymName}
        city={city} />

      <Pricing gymName={gymName} city={city} phone={phone} />


      <Team />

      <Testimonials gymName={gymName} city={city} />

      <Location gymName={gymName} city={city} phone={phone} />

      <CTA
        gymName={gymName}
        phone={phone}
        city={city}
      />
    </div>
  );
}