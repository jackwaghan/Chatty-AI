"use client";
import { useStore } from "@/lib/hooks";
import Chat from "./Components/Chat";
import React from "react";

const Page = ({
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
  const { sidebar } = useStore();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(sidebar || false);
  return (
    <div
      className={`flex h-full w-full overflow-hidden duration-500 transform-gpu ${!sidebar ? "pl-0" : "pl-[250px]"}`}
    >
      <Chat
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        initialMessages={initialMessage}
        chatid={chatid}
      />
    </div>
  );
};

export default Page;
