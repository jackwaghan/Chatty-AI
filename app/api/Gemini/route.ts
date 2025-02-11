import { google } from "@ai-sdk/google";
import { smoothStream, streamText } from "ai";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = await streamText({
    model: google("gemini-1.5-flash"),
    system: "You are a helpful assistant",
    messages,
    experimental_transform: smoothStream(),
  });
  return result.toDataStreamResponse();
}
