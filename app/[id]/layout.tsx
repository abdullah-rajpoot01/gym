import Navbar from "@/components/navbar";
import Footer1 from "@/components/footer-1";
import AOSInit from "@/components/init-aos";
import { Suspense } from "react";
import WhatsAppButton from "@/components/whatsapp-button";
import ThemeMode from "@/components/change-theme";
import { GymProvider } from "@/context/use-gym";

export const dynamic = 'force-dynamic';
export const revalidate = 86400;

import { Metadata } from "next";
import { Lead } from "@/types/lead";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { id } = await params;

    try {
        const response = await fetch(
            `https://gym-leads-with-sveltia-cms.pages.dev/content/leads/${id}.json`,
            {
                next: {
                    revalidate: 3600,
                },
            }
        );

        if (!response.ok) {
            return {
                title: "Gym Not Found",
                description: "The requested gym could not be found.",
            };
        }

        const lead: Lead = await response.json();

        return {
            title: `${lead.name} | Best Gym in ${lead.city}`,
            description: `Visit ${lead.name} located in ${lead.city}. Find contact information, address, directions, and more about this fitness center.`,
        };
    } catch {
        return {
            title: "Gym",
            description: "Find gym information and contact details.",
        };
    }
}
const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <Suspense fallback={null}>
                <GymProvider>
                    <Navbar />
                    {children}
                    <Footer1 />
                    <AOSInit />
                    <WhatsAppButton />
                    <ThemeMode />
                </GymProvider>
            </Suspense>
        </div>
    )
}

export default Layout