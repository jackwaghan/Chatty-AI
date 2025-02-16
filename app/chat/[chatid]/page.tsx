import React from "react";
import Page from "../page";
import { getMessages } from "@/app/action";
import { redirect } from "next/navigation";

export type messageType = {
  id: string;
  role: string;
  content: string;
};
const page = async ({ params }: { params: { chatid: string } }) => {
  const { chatid } = await params;
  const history = await getMessages(chatid);
  if (history.length === 0) {
    redirect("/chat");
  }

  const chat = history[0].message.map((message: messageType) => {
    return {
      id: message.id,
      role: message.role,
      content: message.content,
    };
  });

  return <Page sidebar={true} initialMessage={chat} chatid={chatid} />;
};

export default page;
