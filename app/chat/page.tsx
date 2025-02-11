"use client";
import React from "react";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex w-screen h-screen">
      {isSidebarOpen && (
        <div className="w-[300px] h-full  ">
          <Sidebar
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
        </div>
      )}
      <div className="h-full w-full ">
        <Chat
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </div>
  );
};

export default Page;
