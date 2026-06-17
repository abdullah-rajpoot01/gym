import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <p className="select-none font-satoshi font-semibold text-[8rem] text-muted-foreground/50 leading-none tracking-tight">
        404
      </p>
      <h1 className="mt-2 font-medium text-3xl tracking-tight">
       Zaki Gym | Page not found
      </h1>
      <p className="mt-3 max-w-sm text-pretty text-center text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact-us">Contact support</Link>
        </Button>
      </div>
    </div>
  );
}
