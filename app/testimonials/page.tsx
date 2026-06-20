import Testimonials from '@/components/testimonials';
import { useSearchParams } from 'next/navigation';

const Page = () => {
    const searchParams = useSearchParams();

    const gymName = searchParams.get("name") || "CrossFit";
    const phone = searchParams.get("phone") || "92 300 0000000";
    const city = searchParams.get("city") || "Multan";

    return (
        <Testimonials
            gymName={gymName}
            city={city} />
    )
}

export default Page