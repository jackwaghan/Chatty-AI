"use server";

import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

interface dataTypes {
  id: string;
  messages: { id: string; role: string; content: string }[];
}

export const saveMessage = async (value: dataTypes) => {
  const { data, error } = await supabase
    .from("Chatty-AI")
    .upsert({ id: value.id, message: value.messages })
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getMessages = async (id: string) => {
  const { data, error } = await supabase
    .from("Chatty-AI")
    .select("*")
    .eq("id", id);

  if (error) {
    redirect("/chat");
  }
  return data;
};

export const getChatId = async (id: string) => {
  const { data, error } = await supabase
    .from("Chatty -AI")
    .select("chatid")
    .eq("chatid", id)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  return data[0].chatid;
};

export const getChat = async () => {
  const { data, error } = await supabase.from("Chatty-AI").select("id");

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
