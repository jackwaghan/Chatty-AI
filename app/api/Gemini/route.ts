import { saveMessage } from "@/app/action";
import { google } from "@ai-sdk/google";
import {
  appendResponseMessages,
  createIdGenerator,
  smoothStream,
  streamText,
} from "ai";

export const runtime = "edge";
interface dataTypes {
  id: string;
  messages: { id: string; role: string; content: string }[];
}

export async function POST(req: Request) {
  const { messages, uuid } = await req.json();
  const result = await streamText({
    model: google("gemini-2.0-flash-001"),
    system:
      "You are a helpful assistant. Make the user feel heard and understood. Provide helpful information and resources and  make it short and sweet.",
    messages,
    experimental_transform: smoothStream(),
    experimental_generateMessageId: createIdGenerator({
      prefix: "assistant",
      size: 16,
    }),
    async onFinish({ response }) {
      const data: dataTypes = {
        id: uuid,
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
