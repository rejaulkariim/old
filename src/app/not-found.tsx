import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-center text-foreground">
          Not Found
        </h2>
        <p>Could not find requested resource</p>
        <Link href="/" className={cn(buttonVariants())}>
          Return Home
        </Link>
      </div>
    </main>
  );
}
