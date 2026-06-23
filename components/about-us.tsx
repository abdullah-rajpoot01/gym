"use client"
import Stats from './stats'
import AboutFeatures from './features'
import AboutHeroSection from './about-hero'

const AboutUs = () => {

    return (
        <div className='relative w-full overflow-x-hidden'>
            <AboutHeroSection />
            <AboutFeatures />
            <Stats />
        </div>
    )
}

export default AboutUs