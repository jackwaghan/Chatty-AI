import { Metadata } from "next";
import { redirect } from "next/navigation";
import Page from "../page";
import { getMessages } from "@/app/action";
import { createClient } from "@/utils/supabase/server";

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

const ChatPage = async (props: { params: Promise<{ chatid: string }> }) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/login");
  }
  const { id } = user;
  const { chatid } = await props.params;
  const history = await getMessages(id, chatid);

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

export default ChatPage;
