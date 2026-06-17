import LegalPolicy2 from "@/components/privacy-policy";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Gym & Fitness Center | Build Strength, Fitness & Confidence",
  description:
    "Join a modern gym and fitness center designed to help you build strength, improve health, and achieve your fitness goals. Explore training programs, equipment, and membership plans.",
};


const Page = () => {
    return (
        <LegalPolicy2 />
    )
}

export default Page