"use client";
import Chat from "./Components/Chat";
import React from "react";

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
    <div className="flex h-dvh w-dvw pl-[250px] bg-black text-white overflow-hidden ">
      <Chat
        initialMessages={initialMessage}
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        chatid={chatid}
      />
    </div>
  );
};

export default Page;
