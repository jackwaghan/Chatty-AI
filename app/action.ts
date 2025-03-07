"use server";

import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { createClient as Auth } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

interface dataTypes {
  id: string;
  chatid: string;
  messages: { id: string; role: string; content: string }[];
}

export const saveMessage = async (value: dataTypes) => {
  const { data, error } = await supabase
    .from("Chatty-AI")
    .upsert({ id: value.id, chatid: value.chatid, message: value.messages })
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getMessages = async (id: string, chatid: string) => {
  const { data, error } = await supabase
    .from("Chatty-AI")
    .select()
    .eq("id", id)
    .eq("chatid", chatid)
    .select();

  if (error) {
    redirect("/chat");
  }
  return data;
};

export const getChatId = async () => {
  const supabase = await Auth();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/login");
  }

  const { data, error } = await supabase
    .from("Chatty-AI")
    .select()
    .eq("id", user.id)
    .select("chatid");

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getUser = async () => {
  const supabase = await Auth();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

export async function login(formData: FormData) {
  const supabase = await Auth();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
  }

  revalidatePath("/", "layout");
  redirect("/chat");
}

export async function signup(formData: FormData) {
  const supabase = await Auth();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error(error.code);
  }

  revalidatePath("/", "layout");
  redirect("/chat");
}
