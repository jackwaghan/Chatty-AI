"use client";
import dynamic from "next/dynamic";
import React from "react";
const Sidebar = dynamic(() => import("./Sidebar"));

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full text-white">
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;
