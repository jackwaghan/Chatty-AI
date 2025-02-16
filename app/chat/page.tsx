"use client";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import React from "react";

const MemoizedSidebar = React.memo(Sidebar);
MemoizedSidebar.displayName = "Sidebar";
const MemoizedChat = React.memo(Chat);
MemoizedChat.displayName = "Chat";

const Page = ({
  sidebar,
  chatid,
  initialMessage,
}: {
  sidebar: boolean;
  chatid: string;
  initialMessage: {
    id: string;
    role: "system" | "user" | "assistant" | "data";
    content: string;
  }[];
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(sidebar || false);
  return (
    <div className="flex h-dvh w-dvw  bg-black text-white overflow-hidden ">
      {isSidebarOpen && (
        <MemoizedSidebar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      )}

      <MemoizedChat
        initialMessages={initialMessage}
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        chatid={chatid}
      />
      {/* <div className="fixed flex items-center justify-center w-screen h-screen bg-white/10">
        <div className="w-[50%] h-[50%] bg-white rounded-xl"></div>
      </div> */}
    </div>
  );
};

export default Page;
