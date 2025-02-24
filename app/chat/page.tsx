"use client";
import { useDevice, useStore } from "@/lib/hooks";
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
  const device = useDevice();
  const { sidebar, setSidebar, setLoading } = useStore();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(sidebar);

  React.useEffect(() => {
    if (device === "mobile") return;
    if (localStorage.getItem("sidebar") === "true") {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  }, [setSidebar, device]);
  React.useEffect(() => {
    if (device === "mobile") setSidebar(false);
    setLoading(false);
  }, [device, setSidebar, setLoading]);

  return (
    <div
      className={`flex  antialiased w-dvw h-dvh overflow-hidden duration-500 transform-gpu ${sidebar && device === "desktop" ? "pl-[250px]" : "pl-0"} "}`}
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
