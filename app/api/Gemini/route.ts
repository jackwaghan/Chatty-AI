import { saveMessage } from "@/app/action";
import { google } from "@ai-sdk/google";
import {
  appendResponseMessages,
  createIdGenerator,
  smoothStream,
  streamText,
} from "ai";
import { NextResponse } from "next/server";

export const runtime = "edge";
interface dataTypes {
  id: string;
  chatid: string;
  messages: { id: string; role: string; content: string }[];
}

export async function POST(req: Request) {
  const { messages, uuid, user } = await req.json();
  const result = await streamText({
    model: google("gemini-2.0-flash-exp"),
    system:
      "You are a helpful assistant. Make the user feel heard and understood. Provide helpful information and resources and  make it short and sweet.",
    messages,
    experimental_transform: smoothStream({ chunking: "word", delayInMs: 5 }),
    experimental_generateMessageId: createIdGenerator({
      prefix: "assistant",
      size: 16,
    }),

    async onFinish({ response }) {
      const data: dataTypes = {
        id: user.id,
        chatid: uuid,
        messages: appendResponseMessages({
          messages,
          responseMessages: response.messages,
        }),
      };

      await saveMessage(data);
    },
  });
  return result.toDataStreamResponse();
}

export async function GET() {
  return new NextResponse("GET is not supported", { status: 405 });
}
