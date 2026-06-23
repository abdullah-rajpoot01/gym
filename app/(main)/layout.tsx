"use client"
import Navbar from "@/components/navbar";
import Footer1 from "@/components/footer-1";
import AOSInit from "@/components/init-aos";
import { Suspense } from "react";
import WhatsAppButton from "@/components/whatsapp-button";
import ThemeMode from "@/components/change-theme";
import { useGym } from "@/context/use-gym";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const { loading } = useGym();
    if (loading) return null;
    return (
        <div>        <Suspense fallback={null}>
            <Navbar />
            {children}
            <Footer1 />
            <AOSInit />
            <WhatsAppButton />
            <ThemeMode />
        </Suspense></div>
    )
}

export default Layout