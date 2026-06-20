"use client"
import Testimonials from '@/components/testimonials';
import { useSearchParams } from 'next/navigation';

const Page = () => {
    const searchParams = useSearchParams();

    const gymName = searchParams.get("name") || "CrossFit";
    const city = searchParams.get("city") || "Multan";

    return (
        <Testimonials
            gymName={gymName}
            city={city} />
    )
}

export default Page