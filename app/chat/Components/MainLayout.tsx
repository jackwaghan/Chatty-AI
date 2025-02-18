"use client";
import React from "react";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  return (
    <div className="h-dvh w-dvw flex text-white">
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
