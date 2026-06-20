"use client"
import { useSearchParams } from 'next/navigation'
import Stats from './stats'
import AboutFeatures from './features'
import AboutHeroSection from './about-hero'

const AboutUs = () => {
    const searchParams = useSearchParams();

    const gymName = searchParams.get("name") || "Rajpoot";
    const phone = searchParams.get("phone") || "+92 300 0000000";
    const city = searchParams.get("city") || "Multan";

    return (
        <div className='relative w-full overflow-x-hidden'>
            <AboutHeroSection gymName={gymName}
                phone={phone}
                city={city} />
            <AboutFeatures
                gymName={gymName}
                city={city} />
            <Stats
                gymName={gymName}
                phone={phone}
                city={city}
            />
        </div>
    )
}

export default AboutUs