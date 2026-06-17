import Contact from "@/components/contact-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch With Our Fitness Team",
  description:
    "Contact Us for membership details, fitness programs, personal training, and gym timings. Reach out to our team and start your fitness journey with the leading unisex fitness center in your city.",
};

const Page = () => (
  <Contact />
);

export default Page;
