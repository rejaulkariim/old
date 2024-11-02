import { Icons } from "@/components/shared/Icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold flex flex-col items-center gap-1 rounded-full group"
    >
      <span className="h-10 w-10 rounded-sm bg-primary flex items-center justify-center">
        <Icons.logo className="h-6 w-6 text-primary-foreground" />
      </span>

      <span className="font-extrabold text-lg mt-0.5 leading-tight tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  );
};

export default Logo;
