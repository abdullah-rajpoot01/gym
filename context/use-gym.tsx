"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { notFound, useParams, useSearchParams } from "next/navigation";
import { Lead } from "@/types/lead";
import Loading from "@/components/loading";

type GymContextType = {
  loading: boolean;
  id: string | null;


  leadNotFound: boolean;

  gymName: string;
  email: string;
  phone: string;
  whatsapp: string;
  city: string;
  address: string;

  googleMapPinUrl: string;
  googleMapShareLink: string;
  createRoute: (route: string) => string;
  mode: string;
};

const GymContext = createContext<GymContextType | null>(null);

export function GymProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const params = useParams();
  const id = params.id as string;

  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [leadNotFound, setLeadNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;

    const getLead = async () => {
      try {
        setLoading(true);
        setLeadNotFound(false);

        const response = await fetch(
          `https://gym-leads-with-sveltia-cms.pages.dev/leads/${id}.json`
        );

        if (!response.ok) {
          setLeadNotFound(true);
          return;
        }

        const data: Lead = await response.json();
        setLead(data);
      } catch (error) {
        console.error("Error fetching lead:", error);
        setLeadNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    getLead();
  }, [id]);

  const createRoute = (route: string) => {
    const query = searchParams.toString();

    return `/${id}/${route}${query ? `?${query}` : ""}`;
  };

  const value: GymContextType = {
    loading,
    id,

    leadNotFound,

    gymName: lead?.name || "Your Fitness",
    email: lead?.email || `${lead?.name || "gym"}@gmail.com`,
    phone: lead?.mobiles?.[0] ?? "92 300 0000000",
    whatsapp: lead?.whatsapp || lead?.mobiles?.[0] || "92 300 0000000",

    city: lead?.city || "Multan",

    address:
      lead?.detail?.address ||
      `XYZ Street Sector 2 Phase 2, ${lead?.city || "Your City"}`,

    googleMapPinUrl:
      lead?.detail?.googleMapPinUrl ||
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6502565.951838052!2d-119.306607!3d37.26950555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2s!4v1781942165425!5m2!1sen!2s",

    googleMapShareLink:
      lead?.detail?.googleMapShareLink ||
      "https://share.google/QqrDdwCNao5wRTUKp",
    createRoute,
    mode: searchParams.get("mode") || "light",
  };

  if (loading) {
    return <Loading />;
  }
  if (leadNotFound) {
    notFound()
  }

  return (
    <GymContext.Provider value={value}>
      {children}
    </GymContext.Provider>
  );
}

export function useGym() {
  const context = useContext(GymContext);

  if (!context) {
    throw new Error("useGym must be used within GymProvider");
  }

  return context;
}