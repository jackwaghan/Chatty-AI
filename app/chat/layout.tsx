import { Metadata } from "next";
import React from "react";
import { Poppins } from "next/font/google";
import MainLayout from "./Components/MainLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chatty AI",
  description: "A chatbot that can help you with your queries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased `}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
