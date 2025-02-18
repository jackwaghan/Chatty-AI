import { getChat } from "@/app/action";
import Link from "next/link";
import React, { memo } from "react";
import { TbLayoutSidebarFilled } from "react-icons/tb";

interface SidebarProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}
// const chat = [
//   {
//     id: 1,
//     chat: "Demo Chat 1",
//   },
//   {
//     id: 2,
//     chat: "Demo Chat 2",
//   },
//   {
//     id: 3,
//     chat: "Demo Chat 3",
//   },
//   {
//     id: 4,
//     chat: "Demo Chat 4",
//   },
// ];

const Sidebar: React.FC<SidebarProps> = memo(
  ({ setIsSidebarOpen, isSidebarOpen }) => {
    const [chat, setChat] = React.useState<{ id: string }[]>([]);

    React.useEffect(() => {
      const fetchChat = async () => {
        if (localStorage.getItem("chat")) {
          const chatData = JSON.parse(localStorage.getItem("chat") || "");
          setChat(chatData);
          console.log("fetched chat from local storage");
          return;
        }
        const chatData = await getChat();
        setChat(chatData);
        localStorage.setItem("chat", JSON.stringify(chatData));
        console.log("fetched chat from supabase");
      };

      fetchChat();
    }, []);

    return (
      <div className="flex flex-col w-[250px] fixed inset-y-2 bg-black text-white z-50">
        <div className="h-[60px] w-full items-center flex p-2 gap-12">
          {isSidebarOpen && (
            <div
              className="p-1.5 hover:bg-[#1A1C1E] hover:scale-95 duration-200 rounded-lg cursor-pointer"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
            >
              <TbLayoutSidebarFilled size={30} className="" />
            </div>
          )}
          <h1 className="font-semibold text-xl">Sidebar</h1>
        </div>
        <div className="w-full h-screen flex flex-col p-2">
          {chat.map((data) => (
            <Link
              href={`/chat/${data.id}`}
              key={data.id}
              className="px-2 py-1 hover:bg-[#1A1C1E] cursor-pointer rounded-lg "
            >
              <p className="text-sm">{data.id}</p>
            </Link>
          ))}
        </div>

        <Profile />
      </div>
    );
  }
);

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
