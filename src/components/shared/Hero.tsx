import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-[70vh]">
      <MaxWidthWrapper>
        <div className="mx-auto text-center flex flex-col items-center max-w-3xl space-y-6">
          <h1 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-6xl">
            Pitch Your Startup, Connect With Entrepreneurs.
          </h1>
          <p className="text-base md:text-xl text-foreground max-w-2xl mx-auto">
            An open-source community for indie makers to show stratups and and
            get noticed in virtual competitions.
          </p>
          <Link href="/wishlist" className={cn(buttonVariants())}>
            Get early access
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
