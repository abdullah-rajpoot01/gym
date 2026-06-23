import AboutUs from '@/components/about-us'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us | Your Trusted Fitness Partner",
  description:
    "Learn more about us, a leading unisex fitness center dedicated to helping men and women achieve their health and fitness goals. Discover our mission, experienced trainers, modern facilities, and commitment to creating a supportive fitness community.",
};

const Page = () => {
    return (
        <AboutUs />
    )
}

export default Page