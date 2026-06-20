import Pricing from '@/components/pricing'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Page = () => {
    const searchParams = useSearchParams();

    const gymName = searchParams.get("name") || "CrossFit";
    const phone = searchParams.get("phone") || "92 300 0000000";
    const city = searchParams.get("city") || "Multan";

    return (
        <Pricing
            gymName={gymName}
            phone={phone}
            city={city} />
    )
}

export default Page