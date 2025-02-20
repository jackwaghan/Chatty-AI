import { getChat } from "@/app/action";
import Link from "next/link";
import React, { useEffect } from "react";
import { TbLayoutSidebarFilled } from "react-icons/tb";
import Loading from "./Loading";
import { useDevice, useStore } from "@/lib/hooks";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const device = useDevice();
  const { sidebar, setSidebar, setLoading } = useStore();
  const [chat, setChat] = React.useState<{ id: string }[]>([]);
  const [path, setPath] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(true);
  const pathname = usePathname();
  const SidebarRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebar && device === "desktop") return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        SidebarRef.current &&
        !SidebarRef.current.contains(event.target as Node)
      ) {
        setSidebar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar, device, setSidebar]);

  React.useEffect(() => {
    setPath(pathname);
    console.log(pathname);
    const fetchChat = async () => {
      const chatData = await getChat();
      setChat(chatData);
      setIsLoading(false);
    };

    fetchChat();
  }, [pathname]);

  return (
    <div
      ref={SidebarRef}
      className={`flex flex-col w-[250px] inset-y-2 bg-black text-white z-50 duration-500 fixed transform-gpu ${sidebar ? "translate-x-0 " : "-translate-x-full "}`}
    >
      <div className="h-[60px] w-full items-center flex p-2 gap-12">
        {sidebar && (
          <div
            className="p-1.5 hover:bg-[#1A1C1E] hover:scale-95 duration-200 rounded-lg cursor-pointer"
            onClick={() => {
              setSidebar(false);
              localStorage.setItem("sidebar", "false");
            }}
          >
            <TbLayoutSidebarFilled size={30} className="" />
          </div>
        )}
        <h1 className="font-semibold text-xl">Sidebar</h1>
      </div>

      {!isLoading ? (
        <div className="w-full h-screen flex flex-col p-4 md:p-2 overflow-y-scroll gap-1.5">
          {chat.map((data) => (
            <Link
              key={data.id}
              href={`/chat/${data.id}`}
              onClick={() => {
                if (device === "mobile") setSidebar(false);
                setLoading(true);
              }}
              className={`px-2 py-1.5 pr-10 hover:bg-[#1A1C1E] rounded-lg ${path === `/chat/${data.id}` ? "bg-[#1A1C1E] " : ""}`}
            >
              <p className="text-sm truncate">{data.id}</p>
            </Link>
          ))}
          {chat.length === 0 && (
            <div className=" justify-center flex items-center h-full">
              No Chat Found
            </div>
          )}
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
