import { redirect } from "next/navigation";
import Page from "../page";
import { getMessages } from "@/app/action";
import { Suspense } from "react";

export type MessageType = {
  id: string;
  role: string;
  content: string;
};

interface PageProps {
  params: { chatid: string };
}

const ChatPage = async ({ params }: PageProps) => {
  const { chatid } = await params;

  const ChatContent = async () => {
    const history = await getMessages(chatid);

    if (!history || history.length === 0) {
      redirect("/chat");
    }

    const chat = history[0].message.map((message: MessageType) => ({
      id: message.id,
      role: message.role,
      content: message.content,
    }));

    return <Page sidebar={true} initialMessage={chat} chatid={chatid} />;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatContent />
    </Suspense>
  );
};

export default ChatPage;
