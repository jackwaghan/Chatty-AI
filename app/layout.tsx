import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chatty AI",
  description:
    "Unlock the power of multiple AI models in one lightning-fast chat experience.",
  keywords: [
    "AI",
    "Chat",
    "Chatty",
    "Chatty AI",
    "Chatbot",
    "AI Chatbot",
    "jackwaghan",
    "jack waghan",
    "jack",
    "waghan",
    "chatbot",
    "chat",
    "ai",
    "chatty",
    "chatty ai",
    "ai chatbot",
    "jackwaghan chatbot",
    "jack waghan chatbot",
    "jack chatbot",
    "waghan chatbot",
    "jackwaghan chat",
    "jack waghan chat",
    "jack chat",
    "waghan chat",
    "jackwaghan ai",
    "jack waghan ai",
    "jack ai",
    "waghan ai",
    "jackwaghan chatty",
    "jack waghan chatty",
    "jack chatty",
    "waghan chatty",
    "chatbot ai",
    "chatbot chatty",
    "chatbot chat",
    "chatbot jackwaghan",
    "chatbot waghan",
    "chat ai",
    "chat chatty",
    "chat jackwaghan",
    "chat waghan",
    "ai chatty",
    "ai chat",
    "ai jackwaghan",
    "ai waghan",
    "chatty chat",
    "chatty jackwaghan",
    "chatty waghan",
    "chatbot ai chatty",
    "chatbot ai chat",
    "chatbot ai jackwaghan",
    "chatbot ai waghan",
    "chatbot chatty chat",
    "chatbot chatty jackwaghan",
    "chatbot chatty waghan",
    "chatbot chat jackwaghan",
    "chatbot chat waghan",
    "chatbot jackwaghan chat",
    "chatbot waghan chat",
    "ai chatty chat",
    "ai chatty jackwaghan",
    "ai chatty waghan",
    "ai chat jackwaghan",
    "ai chat waghan",
    "ai jackwaghan chat",
    "ai waghan chat",
    "chatty chat jackwaghan",
    "chatty chat waghan",
    "chatty jackwaghan chat",
    "chatty waghan chat",
    "chatbot ai chatty chat",
    "chatbot ai chatty jackwaghan",
    "chatbot ai chatty waghan",
    "chatbot ai chat jackwaghan",
    "chatbot ai chat waghan",
    "chatbot ai jackwaghan chat",
    "chat",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
