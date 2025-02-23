import { getChatId, getUser } from "@/app/action";
import Link from "next/link";
import React from "react";
import { TbLayoutSidebarFilled } from "react-icons/tb";
import Loading from "./Loading";
import { useDevice, useStore } from "@/lib/hooks";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const device = useDevice();
  const { sidebar, setSidebar, setLoading } = useStore();
  const [chat, setChat] = React.useState<{ chatid: string }[]>([]);
  const [path, setPath] = React.useState<string>("");
  const [user, setUser] = React.useState<string | undefined>("");
  const [isLoading, setIsLoading] = React.useState(true);
  const pathname = usePathname();
  const SidebarRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
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
    const fetchChat = async () => {
      const chatData = await getChatId();
      setChat(chatData);
      setIsLoading(false);
    };

    fetchChat();
  }, [pathname]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const fetchUser = async () => {
      const data = await getUser();
      setUser(data?.email);
    };
    fetchUser();
  }, []);

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
        <div className="w-full h-screen flex flex-col p-4 md:p-2 overflow-y-scroll gap-1.5 border-t border-white/10">
          {chat.map((data) => (
            <Link
              key={data.chatid}
              href={`/chat/${data.chatid}`}
              onClick={() => {
                if (device === "mobile") setSidebar(false);
                setLoading(true);
              }}
              className={`px-2 py-1.5 pr-10 hover:bg-[#1A1C1E] rounded-lg ${path === `/chat/${data.chatid}` ? "bg-[#1A1C1E] " : ""}`}
            >
              <p className="text-sm truncate">{data.chatid}</p>
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

      <Profile user={user} />
    </div>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;

const Profile = ({ user }: { user: string | undefined }) => {
  return (
    <div className="h-[60px] w-full flex items-center gap-4 justify-center border-t border-white/10 shadow-2xl">
      <h1 className="text-sm">{user}</h1>
    </div>
  );
};
