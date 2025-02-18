import { getChat } from "@/app/action";
import Link from "next/link";
import React, { useEffect } from "react";
import { TbLayoutSidebarFilled } from "react-icons/tb";
import Loading from "./Loading";
import { useStore } from "@/lib/hooks";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { sidebar, setSidebar } = useStore();
  const [chat, setChat] = React.useState<{ id: string }[]>([]);
  const [path, setPath] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(true);
  const pathname = usePathname();
  useEffect(() => {}, [pathname]);
  React.useEffect(() => {
    setPath(pathname);
    console.log(pathname);
    const fetchChat = async () => {
      // if (localStorage.getItem("chat")) {
      //   const chatData = JSON.parse(localStorage.getItem("chat") || "");
      //   setChat(chatData);
      //   setIsLoading(false);
      //   console.log("fetched chat from local storage");
      //   return;
      // }
      const chatData = await getChat();
      setChat(chatData);
      setIsLoading(false);
      // localStorage.setItem("chat", JSON.stringify(chatData));
      // console.log("fetched chat from supabase");
    };

    fetchChat();
  }, [pathname]);

  return (
    <div
      className={`flex flex-col w-[250px]  inset-y-2 bg-black text-white z-50 duration-500 fixed transform-gpu ${sidebar ? "translate-x-0 " : "-translate-x-full "}`}
    >
      <div className="h-[60px] w-full items-center flex p-2 gap-12">
        {sidebar && (
          <div
            className="p-1.5 hover:bg-[#1A1C1E] hover:scale-95 duration-200 rounded-lg cursor-pointer"
            onClick={() => setSidebar(false)}
          >
            <TbLayoutSidebarFilled size={30} className="" />
          </div>
        )}
        <h1 className="font-semibold text-xl">Sidebar</h1>
      </div>

      {!isLoading ? (
        <div className="w-full h-screen flex flex-col p-2 overflow-y-scroll gap-1.5">
          {chat.map((data) => (
            <Link
              href={`/chat/${data.id}`}
              key={data.id}
              className={`px-2 py-1.5 pr-10 hover:bg-[#1A1C1E] cursor-pointer rounded-lg ${path === `/chat/${data.id}` ? "bg-[#1A1C1E]" : ""}`}
            >
              <p className="text-sm truncate">{data.id}</p>
            </Link>
          ))}
        </div>
      ) : (
        <Loading />
      )}

      <Profile />
    </div>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;

const Profile = () => {
  return (
    <div className="h-[60px] w-full flex items-center gap-4 justify-center">
      <h1 className="">Logo</h1>
      <h1>Jack Waghan A S</h1>
    </div>
  );
};
