import { Metadata } from "next";
import { redirect } from "next/navigation";
import Page from "../page";
import { getMessages } from "@/app/action";
import { Suspense } from "react";
import Loading from "../Components/Loading";

export type MessageType = {
  id: string;
  role: string;
  content: string;
};

export async function generateMetadata(props: {
  params: Promise<{ chatid: string }>;
}): Promise<Metadata> {
  const { chatid } = await props.params;
  return {
    title: `Chat ${chatid} - Chatty AI`,
    description: `Continue your conversation in chat ${chatid} with Chatty AI.`,
  };
}

// Fixed: Removed async from parent component
const ChatPage = async (props: { params: Promise<{ chatid: string }> }) => {
  const { chatid } = await props.params;

  return (
    <Suspense fallback={<Loading />}>
      <ChatContent chatid={chatid} />
    </Suspense>
  );
};

export default ChatPage;

const ChatContent = async ({ chatid }: { chatid: string }) => {
  const history = await getMessages(chatid);

  if (!history || history.length === 0) {
    redirect("/chat");
  }

  const chat =
    history[0]?.message?.map((message: MessageType) => ({
      id: message.id,
      role: message.role,
      content: message.content,
    })) || [];

  return <Page sidebar={true} initialMessage={chat} chatid={chatid} />;
};
