"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import { DollarSign, Dumbbell, HeartPulse, Home, Menu, MenuSquare, User2Icon, UserCircle } from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useGym } from "@/context/use-gym"

export function MobileNavDialog() {
    const [open, setOpen] = useState(false);
    const router = useRouter()

    const gymParams = useGym();
    const { gymName, phone, id, createRoute } = gymParams;
    const closeDialog = () => { setTimeout(() => setOpen(false), 400) };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="rounded-full" size="icon" variant="outline">
                    <Menu />
                </Button>
            </DialogTrigger>
            <DialogContent className="h-[80vh] sm:max-w-none lg:hidden  flex flex-col gap-0 p-0">
                <DialogHeader className="p-6 pb-0 shrink-0">
                    <DialogTitle className="">
                        <Link onClick={closeDialog} href={createRoute("")} className="flex items-center gap-3">

                            <div className="relative w-8 h-8 flex justify-center items-center aspect-square rounded-lg shadow-lg border-2 border-foreground/80 overflow-hidden">
                                <Dumbbell className="w-6 h-6" />
                            </div>


                            <span className="min-w-0 leading-none">
                                <span className="block text-base font-black uppercase tracking-wide text-foreground">
                                    {gymName}
                                </span>
                                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-red-500">
                                    Gym
                                </span>
                            </span>

                        </Link>
                    </DialogTitle>
                </DialogHeader>

                <ScrollArea className="flex-1 h-full w-full px-6 overflow-hidden">
                    <div className="pt-4 pb-2 flex flex-col gap-4">
                        <nav className="flex flex-col items-start w-full gap-3">
                            <Link onClick={closeDialog}
                                href={createRoute("")}
                                className="w-full flex items-center  gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <Home className="size-5" /> <span>Home</span>
                            </Link>
                            <Link onClick={closeDialog}
                                href={createRoute("programs")}
                                className="w-full flex items-center  gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <MenuSquare className="size-5" /> <span>Programs</span>
                            </Link>
                            <Link onClick={closeDialog}
                                href={createRoute("pricing")}
                                className="w-full flex items-center  gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <HeartPulse className="size-5" /> <span>Pricing</span>
                            </Link>
                            <Link onClick={closeDialog}
                                href={createRoute("coaches")}

                                className="w-full flex items-center  gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <DollarSign className="size-5" /> <span>Coaches</span>
                            </Link>
                            <Link onClick={closeDialog}
                                href={createRoute("testimonials")}
                                className="w-full flex items-center  gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <User2Icon className="size-5" /> <span>Testimonials</span>
                            </Link>
                            <Link onClick={closeDialog}
                                href={createRoute("about-us")}

                                className="w-full flex items-center  gap-3 px-6 py-3 text-left bg-accent transition-colors"
                            >
                                <UserCircle className="size-5" /> <span>About Us</span>
                            </Link>
                        </nav>
                        <div className="shrink-0 p-6 pt-0">
                            <div className="flex flex-col gap-3">
                                <Button onClick={() => {
                                    router.push(createRoute("contact-us"));
                                    closeDialog()
                                }}
                                    className=" w-full"
                                    variant="outline"
                                >
                                    Contact Us
                                </Button>
                                <a onClick={closeDialog} href={`tel:+${phone}`}>
                                    <Button className=" w-full">Call Now</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollArea>


            </DialogContent>
        </Dialog>
    )
}