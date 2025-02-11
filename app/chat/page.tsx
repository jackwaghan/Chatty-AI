"use client";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import React from "react";

const MemoizedSidebar = React.memo(Sidebar);
MemoizedSidebar.displayName = "Sidebar";
const MemoizedChat = React.memo(Chat);
MemoizedChat.displayName = "Chat";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex w-screen h-screen">
      {isSidebarOpen && (
        <div className="w-[300px] h-full">
          <MemoizedSidebar
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
        </div>
      )}
      <div className="h-full w-full">
        <MemoizedChat
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </div>
  );
};

export default Page;
