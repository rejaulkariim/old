import { Icons } from "@/components/shared/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { GetProfileByUserName } from "@/server/actions/profile.action";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { Banknote, Link2, LinkIcon, MapPin, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string;
  };
}

const MakersPage = async ({ params }: PostPageProps) => {
  const profile = await GetProfileByUserName({ username: params.slug });

  console.log(profile, "profile from makers page");

  if (!profile.success) {
    return notFound();
  }

  return (
    <>
      <div className="border shadow-md z-50 bg-card flex items-center gap-3 p-3 rounded-lg absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <Button className={cn(buttonVariants({ size: "sm" }))}>
          Share my canvas
        </Button>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Link2 className="h-4 w-4" />
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <LinkIcon className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 mb-5">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Add Link</h4>
                  <p className="text-sm text-muted-foreground">
                    Enter a URL to add to your profile.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Input id="link" placeholder="https://example.com" />
                    <Button size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Input id="link" placeholder="https://example.com" />
                    <Button size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Input id="link" placeholder="https://example.com" />
                    <Button size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Input id="link" placeholder="https://example.com" />
                    <Button size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Input id="link" placeholder="https://example.com" />
                    <Button size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Input id="link" placeholder="https://example.com" />
                    <Button size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Separator orientation="vertical" className="h-6" />
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Icons.bag className="h-4 w-4" />
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Icons.pencil className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-12 gap-6 md:min-h-screen">
        <div className="md:col-span-4 h-full md:p-10 p-4">
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
              <Input
                placeholder="Your Name"
                className="h-12 tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-4xl no-focus !important border-none bg-transparent shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <p>
                <Textarea
                  placeholder="Bio"
                  className="h-auto text-foreground no-focus !important border-none bg-transparent shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </p>
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
            show products
          </div>
        </div>
      </div>
    </>
  );
};

export default MakersPage;
