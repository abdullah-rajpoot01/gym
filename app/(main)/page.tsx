"use client";
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
import HeroSection from "@/components/hero-section";

export default function Home() {

  return (
    <div className="overflow-hidden">
      <HeroSection />

      <Features />

      <VideoSection />

      <ProgramsComponent />

      <OwnerSection />


      <AboutFeatures />

      <WhatTakeUsApart />

      <Pricing />


      <Team />

      <Testimonials />

      <Location />

      <CTA />
    </div>
  );
}