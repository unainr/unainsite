import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/modules/dashboard/ui/components/dashboard-header";
import { AdminSidebar } from "@/modules/dashboard/ui/components/sidebar";

interface LayoutProps {
    children: React.ReactNode;  
}
const Layout = ({children}: LayoutProps) => {
  return (
   
     <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <DashboardHeader
         
        />

        <div className="flex flex-1 flex-col gap-2 p-2 pt-0 sm:gap-4 sm:p-4">
          <div className="min-h-[calc(100vh-4rem)] flex-1 rounded-lg p-3 sm:rounded-xl sm:p-4 md:p-6">
            <div className="mx-auto max-w-6xl space-y-4 sm:space-y-6">
              <div className="px-2 sm:px-0">
                {children}
              </div>

             
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout