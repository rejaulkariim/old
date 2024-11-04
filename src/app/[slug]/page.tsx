import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import {
  Banknote,
  Cloud,
  LayoutGrid,
  Link2,
  MapPin,
  Monitor,
  Mountain,
  Quote,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MakersPage = () => {
  const products = [
    {
      name: "ShipFast",
      icon: "⚡",
      description: "Ship your startup in days, not months",
      revenue: "$46.6k/mo",
      graph: "/placeholder.svg?height=100&width=300",
    },
    {
      name: "DataFast",
      icon: "📊",
      description: "Grow your startup with data, not guesses",
      revenue: "$749/mo",
      graph: "/placeholder.svg?height=100&width=300",
    },
    {
      name: "Zenvoice",
      icon: "💚",
      description: "Focus on your startup, not the invoices",
      revenue: "$817/mo",
      graph: "/placeholder.svg?height=100&width=300",
    },
    {
      name: "Indie Page",
      icon: "📑",
      description: "All your startups in a page, like this one",
      revenue: "$6.3k/mo",
      graph: "/placeholder.svg?height=100&width=300",
    },
    {
      name: "PopUp",
      icon: "🎯",
      description: "Turn your visitors into customers with wake-up call",
      revenue: "$151/mo",
      graph: "/placeholder.svg?height=100&width=300",
    },
    {
      name: "ByeDispute",
      icon: "🔵",
      description: "Prevent disputes before getting banned from Stripe",
      revenue: "$165/mo",
      graph: "/placeholder.svg?height=100&width=300",
    },
  ];

  return (
    <>
      <div className=" border bg-amber-300 flex items-center gap-3 p-3 rounded-lg shadow-sm absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <Button className="bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-white font-medium">
          Share my canvas
        </Button>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Link2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Mountain className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Quote className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Cloud className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <LayoutGrid className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Monitor className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Smartphone className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-12 gap-6 md:min-h-screen">
        <div className="md:col-span-4 h-full md:p-10 p-4 border-r">
          <div>
            <Image
              src="/rejaul.png"
              alt="Rejaul"
              width={500}
              height={500}
              draggable={false}
              className="object-cover h-40 w-40 rounded-full aspect-square"
            />
            <div className="mt-2">
              {/* <h3 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-4xl">
                Rejaul Karim
              </h3> */}
              <Input
                defaultValue={"Rejaul"}
                placeholder="Your Name"
                className="h-12  tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-4xl no-focus !important border-none bg-transparent shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="flex gap-4 items-center mt-2">
              <span className="flex gap-1 items-center">
                <MapPin className="size-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Dhaka</p>
              </span>
              <span className="flex gap-1 items-center">
                <Banknote className="size-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">10k Earnings</p>
              </span>
            </div>

            <div>
              <p>
                I share how to find startup ideas, launch fast, and get
                profitable 👇
              </p>
            </div>

            <div>
              <Link
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" })
                )}
                href="#"
              >
                <TwitterLogoIcon className="size-4 text-muted-foreground" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-8 md:p-10 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {products.map((product) => (
              <Link
                href=""
                key={product.name}
                className="flex gap-4 items-center p-4 bg-card border shadow-sm rounded-xl hover:bg-accent transition-all duration-300 scale-100 hover:scale-105"
              >
                <div className="">
                  <h3 className="font-bold">{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MakersPage;
