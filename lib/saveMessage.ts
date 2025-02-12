"use client";
interface MessageData {
  id: string;
  message: string;
}

export const saveMessage = async (data: MessageData) => {
  localStorage.setItem("messages", JSON.stringify(data));
};
