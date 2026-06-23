"use client"
import { useGym } from '@/context/use-gym'
import React from 'react'

export interface LegalPolicy2Props {
    title?: string
    effectiveDate?: string

    contactEmail?: string
    variant?: 'light' | 'dark' | 'minimal'
}

const LegalPolicy2: React.FC<LegalPolicy2Props> = ({
    title = "Privacy Policy",
    effectiveDate = "Effective date: June 15, 2026",

}) => {
    const { gymName, city,phone,  mode } = useGym();
    const isDark = mode === "light" ? false : true;
    const sections = [
        {
            title: "Information We Collect",
            content:
                `At ${gymName} Gym ${city}, we only collect basic information necessary to provide inquiries and communication support through our website.`,
            items: [
                "Name (when you contact us)",
                "Phone number (for callback or WhatsApp inquiries)",
                "Email address (for responses and updates)",
                "Messages you send through contact forms",
            ],
        },
        {
            title: "How We Use Your Information",
            content: "We use the information only for communication and support purposes:",
            items: [
                "Respond to your questions and inquiries",
                "Provide information about gym membership and services",
                "Share updates related to gym schedules or offers (if applicable)",
                "Improve user experience on our website",
            ],
        },
        {
            title: "Payments",
            content:
                `We do not collect any payments, subscriptions, or financial information through our website. All membership payments (if applicable) are handled physically at ${gymName} Gym ${city}.`,
        },
        {
            title: "Information Sharing",
            content:
                "We do not sell, trade, or share your personal information with any third parties. Your data is only used internally for communication purposes.",
        },
        {
            title: "Data Security",
            content:
                "We take reasonable measures to protect your information from unauthorized access or misuse. However, no online system is 100% secure.",
        },
        {
            title: "Cookies & Analytics",
            content:
                "Our website may use basic cookies or analytics tools to improve performance and user experience. No sensitive financial data is collected.",
        },
        {
            title: "Your Rights",
            content: "You have full control over your data and may request to:",
            items: [
                "Access the information we have about you",
                "Request correction of incorrect details",
                "Request deletion of your data",
                "Stop receiving communications from us",
            ],
        },
        {
            title: "Contact Us",
            content:
                `If you have any questions about this Privacy Policy, you can contact us at ${gymName}gym@gmail.com or via WhatsApp at +${phone}.`,
        },
    ];
    return (
        <section className={`pt-30 pb-15 sm:py-32 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="mx-auto max-w-2xl px-6 lg:max-w-4xl lg:px-8">
                <div className="mx-auto max-w-2xl text-base/7">
                    <h2 className={`mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl  ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>{title}</h2>
                    <p className={`mt-6  text-xl/8 ${isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>{effectiveDate}</p>
                    <div className="mt-8 space-y-8">
                        {sections.map((section, index) => (
                            <div data-aos={"fade-right"} key={index}>
                                <h2 className={`text-2xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'
                                    }`}>{section.title}</h2>
                                <p className={`mt-6 text-base/7 ${isDark ? 'text-gray-300' : 'text-gray-600'
                                    }`}>{section.content}</p>
                                {section.items && (
                                    <ul role="list" className={`mt-6 space-y-4 text-base/7 ${isDark ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        {section.items.map((item, itemIndex) => (
                                            <li data-aos={"fade-left"} key={itemIndex} className="flex gap-x-1">
                                                <svg className="mt-1 size-5 flex-none" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                                </svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LegalPolicy2;