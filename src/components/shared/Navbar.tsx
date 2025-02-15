import Logo from "@/components/shared/Logo";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = async () => {
  // const user = await getUserFromDB();

  const session = await auth();

  const user = session?.user;

  console.log(user);

  return (
    <header className="h-16 border-b sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthWrapper>
        <nav className="h-full w-full flex justify-between items-center">
          {/* Logo on the left */}
          <div className="w-44">
            <Logo />
          </div>

          {/* Centered NavItems */}
          {/* <div className="flex justify-center items-center">
            <NavItems />
          </div> */}

          {/* UserAccountNav or Login on the right */}
          <div className="hidden w-44 md:flex justify-end items-center space-x-4">
            <Link href="/auth/login" className={cn(buttonVariants())}>
              Login
            </Link>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
