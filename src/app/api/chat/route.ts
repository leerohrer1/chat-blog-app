import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // Extract the `messages` and optional `id` from the body
  const { messages, id } = await req.json();

  // Set up OpenAI-compatible client for Ollama
  const openai = createOpenAI({
    baseURL: "http://localhost:11434/v1",
  });

  console.log("chat id", id); // optional: for persisting chat

  // Stream response from Ollama
  const result = await streamText({
    model: openai.chat("llama2"), // OR: openai("llama2")
    messages,
    async onFinish({ text, toolCalls, toolResults, usage, finishReason }) {
      // implement custom logic here (e.g. save to DB, log usage)
    },
  });

  // Respond with the stream
  return result.toDataStreamResponse({
    getErrorMessage: errorHandler,
  });
}

// Error handling function
function errorHandler(error: unknown) {
  if (error == null) return "unknown error";
  if (typeof error === "string") return error;
  if (error instanceof Error) return error.message;
  return JSON.stringify(error);
}
