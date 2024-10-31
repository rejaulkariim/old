import MakerDashboardSidebar from "@/components/shared/MakerDashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

const MakerDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <MakerDashboardSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default MakerDashboardLayout;
