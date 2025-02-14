import React from "react";
import Page from "../page";
import { getMessages } from "@/app/action";

const page = async ({ params }: { params: { chatid: string } }) => {
  // const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  // const history: {
  //   id: string;

  //   role: "system" | "user" | "assistant" | "data";
  //   content: string;
  // }[] = [
  const { chatid } = await params;

  // Fetch messages history
  const history: {
    id: string;
    role: "system" | "user" | "assistant" | "data";
    content: string;
  }[] = await getMessages(chatid);

  console.log(history);

  return <Page sidebar={true} initialMessage={history} />;
};

export default page;
