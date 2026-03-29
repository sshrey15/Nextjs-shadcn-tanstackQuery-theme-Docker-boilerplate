
import { Suspense } from "react";
import DashboardLayout, { DashboardSidebar, DashboardNavbarSlot, DashboardContent } from "@/features/dashboard-layout";
import Sidebar from "@/features/sidebar";
import DashboardNavbar from "@/features/dashboard-navbar";

function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    
        <DashboardLayout>
          <DashboardSidebar>
            <Sidebar />
          </DashboardSidebar>

          <div className="flex flex-col flex-1 overflow-hidden">
            <DashboardNavbarSlot>
              <Suspense fallback={<div className="w-full h-14" />}>
                <DashboardNavbar />
              </Suspense>
            </DashboardNavbarSlot>

            <DashboardContent>{children}</DashboardContent>
          </div>
        </DashboardLayout>
    
  );
}

export default Dashboard;