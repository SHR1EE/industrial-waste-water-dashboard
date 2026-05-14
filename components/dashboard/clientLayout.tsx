"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./appSidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <AppSidebar />
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </SidebarProvider>
  );
}