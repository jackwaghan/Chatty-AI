"use client";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import React from "react";

const MemoizedSidebar = React.memo(Sidebar);
MemoizedSidebar.displayName = "Sidebar";
const MemoizedChat = React.memo(Chat);
MemoizedChat.displayName = "Chat";

const Page = ({}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <div className="flex h-dvh w-dvw  bg-black text-white overflow-hidden ">
      {isSidebarOpen && (
        <MemoizedSidebar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      )}

      <MemoizedChat
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      {/* <div className="fixed flex items-center justify-center w-screen h-screen bg-white/10">
        <div className="w-[50%] h-[50%] bg-white rounded-xl"></div>
      </div> */}
    </div>
  );
};

export default Page;
