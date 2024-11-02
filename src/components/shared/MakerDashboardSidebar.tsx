import {
  AudioWaveform,
  BriefcaseBusiness,
  Command,
  GalleryVerticalEnd,
  PencilRuler,
  Settings,
  User,
} from "lucide-react";

import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import Link from "next/link";
import UserAccountNav from "./UserAccountNav";
// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Profile",
      url: "/maker/dashboard/profile",
      icon: User,
      isActive: true,
    },
    {
      title: "Startups",
      url: "/maker/dashboard/startups",
      icon: BriefcaseBusiness,
    },
    {
      title: "Customization",
      url: "/maker/dashboard/settings",
      icon: PencilRuler,
    },
    {
      title: "Page Settings",
      url: "/maker/dashboard/settings",
      icon: Settings,
    },
  ],
};

const MakerDashboardSidebar = async () => {
  const session = await auth();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="mt-10">
            {data.navMain.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <Link href={item.url}>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <UserAccountNav user={session?.user} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default MakerDashboardSidebar;
