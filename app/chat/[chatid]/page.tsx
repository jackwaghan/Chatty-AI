import { redirect } from "next/navigation";
import Page from "../page";
import { getMessages } from "@/app/action";

export type MessageType = {
  id: string;
  role: string;
  content: string;
};

interface PageProps {
  params: { chatid: string }; // ✅ Explicitly define params type
}

const ChatPage = async ({ params }: PageProps) => {
  const { chatid } = params; // ✅ Ensure params is treated correctly

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

export default ChatPage;
