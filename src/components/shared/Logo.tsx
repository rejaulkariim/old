import { Icons } from "@/components/shared/Icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold flex items-center gap-1 rounded-full group"
    >
      <Icons.logo className="h-6 w-6 text-primary fill-foreground transform transition-transform duration-500 group-hover:rotate-180" />

      <span className="font-extrabold text-lg mt-0.5 leading-tight tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  );
};

export default Logo;
