"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Lead } from "@/types/lead";

type GymContextType = {
  loading: boolean;
  id: string | null;

  hasData: boolean;

  gymName: string;
  email: string;
  phone: string;
  whatsapp: string;
  city: string;
  address: string;

  googleMapPinUrl: string;
  googleMapShareLink: string;

  mode: string;
};

const GymContext = createContext<GymContextType | null>(null);

export function GymProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const getLead = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://gym-leads-with-sveltia-cms.pages.dev/content/leads/05a6555de017.json`
        );

        if (!response.ok) throw new Error("Failed to fetch lead");

        const data: Lead = await response.json();
        setLead(data);
      } catch (error) {
        console.error("Error fetching lead:", error);
      } finally {
        setLoading(false);
      }
    };

    getLead();
  }, [id]);

  const value: GymContextType = {
    loading,
    id,

    hasData: !!lead,

    gymName: lead?.name || searchParams.get("name") || "Your Fitness",
    email: lead?.email || `${lead?.name || "gym"}@gmail.com`,
    phone: lead?.mobiles?.[0] || searchParams.get("phone") || "92 300 0000000",
    whatsapp:
      lead?.whatsapp ||
      lead?.mobiles?.[0] ||
      searchParams.get("phone") ||
      "92 300 0000000",

    city: lead?.city || searchParams.get("city") || "Multan",

    address:
      lead?.detail?.address ||
      `XYZ Street Sectore 2 Phase 2 , ${lead?.city || "Multan"}`,

    googleMapPinUrl:
      lead?.detail?.googleMapPinUrl ||
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6502565.951838052!2d-119.306607!3d37.26950555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2s!4v1781942165425!5m2!1sen!2s",

    googleMapShareLink:
      lead?.detail?.googleMapShareLink ||
      "https://share.google/QqrDdwCNao5wRTUKp",

    mode: searchParams.get("mode") || "light",
  };

  return <GymContext.Provider value={value}>{children}</GymContext.Provider>;
}

export function useGym() {
  const context = useContext(GymContext);
  if (!context) {
    throw new Error("useGym must be used within GymProvider");
  }
  return context;
}