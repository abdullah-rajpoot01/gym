import Navbar from "@/components/navbar";
import Footer1 from "@/components/footer-1";
import AOSInit from "@/components/init-aos";
import { Suspense } from "react";
import WhatsAppButton from "@/components/whatsapp-button";
import ThemeMode from "@/components/change-theme";
import { GymProvider } from "@/context/use-gym";

export const dynamic = 'force-dynamic';

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