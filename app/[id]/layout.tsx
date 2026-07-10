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

    const title = `${lead.name} | Best Gym in ${lead.city}`;
    const description = `Visit ${lead.name} in ${lead.city}. Get contact details, address, directions, membership information, and start your fitness journey today.`;

    return {
      title,
      description,

      openGraph: {
        title,
        description,
        images: [
          {
            url: "/og-default.png",
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/og-default.png"],
      },
    };
  } catch {
    return {
      title: "Gym",
      description: "Find gym information and contact details.",

      openGraph: {
        title: "Gym",
        description: "Find gym information and contact details.",
        images: [
          {
            url: "/og-default.png",
            width: 1200,
            height: 630,
            alt: "Gym",
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: "Gym",
        description: "Find gym information and contact details.",
        images: ["/og-default.png"],
      },
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