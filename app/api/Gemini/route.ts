import { google } from "@ai-sdk/google";
import { smoothStream, streamText } from "ai";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = await streamText({
    model: google("gemini-2.0-flash-001"),
    system:
      "You are a helpful assistant. Make the user feel heard and understood. Provide helpful information and resources and  make it short and sweet.",
    messages,
    experimental_transform: smoothStream(),
  });
  return result.toDataStreamResponse();
}
