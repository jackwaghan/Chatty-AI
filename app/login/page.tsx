import { redirect } from "next/navigation";
import { getUser } from "../action";
import { login } from "./action";
import Link from "next/link";

export default async function LoginPage() {
  const data = await getUser();
  if (data) {
    redirect("/chat");
  }
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="text-xl md:text-2xl font-semibold mb-8">Login</div>
      <form className="flex flex-col gap-9 p-9 rounded-2xl border border-white/10 text-base w-[300px] bg-white/10 backdrop-blur-3xl">
        <div className="flex flex-col gap-2">
          {" "}
          <label htmlFor="email">Email</label>
          <input
            className="text-white rounded-lg px-2 py-2 bg-white/15  focus:outline-none text-sm"
            id="email"
            name="email"
            type="email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className="text-white rounded-lg px-2 py-2 bg-white/15  focus:outline-none text-sm"
            id="password"
            name="password"
            type="password"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="bg-white/80 text-black rounded-lg text-base p-1"
            formAction={login}
          >
            Log in
          </button>
        </div>
      </form>
      <Link href="/signup" className="mt-5 hover:underline cursor-pointer">
        New user ?
      </Link>
    </div>
  );
}
