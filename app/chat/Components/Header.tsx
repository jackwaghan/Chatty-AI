import React, { memo, useEffect, useRef } from "react";
import { TbLayoutSidebarFilled } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { LuMessageSquarePlus } from "react-icons/lu";
import Link from "next/link";

interface HeaderProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}

const modelList = ["Gemini", "OpenAI", "Claude"];
const Header: React.FC<HeaderProps> = memo(
  ({ setIsSidebarOpen, isSidebarOpen }) => {
    const [model, setModel] = React.useState("Gemini");
    const [isModelOpen, setIsModelOpen] = React.useState(false);
    const modelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          modelRef.current &&
          !modelRef.current.contains(event.target as Node)
        ) {
          setIsModelOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleSidebarToggle = () => {
      setIsSidebarOpen((prev) => !prev);
    };

    return (
      <div className="h-full w-full flex items-center gap-2 pb-2 pl-2">
        {!isSidebarOpen && (
          <button
            className="p-1.5 rounded-lg hover:bg-[#1A1C1E] cursor-pointer hover:scale-95 duration-200"
            onClick={handleSidebarToggle}
            aria-label="Toggle Sidebar"
          >
            <TbLayoutSidebarFilled size={30} className="text-white/80" />
          </button>
        )}
        <Link
          href="/chat"
          className="p-2 rounded-lg hover:bg-[#1A1C1E] cursor-pointer mt-1 hover:scale-95 duration-200"
        >
          <LuMessageSquarePlus size={25} className="text-white/80 " />
        </Link>
        <div
          ref={modelRef}
          className="p-1.5 rounded-lg hover:bg-[#1A1C1E] relative flex  items-center justify-center gap-3 cursor-pointer"
          onClick={() => setIsModelOpen((prev) => !prev)}
        >
          {isModelOpen && (
            <div className="absolute top-16 left-0 rounded-xl bg-black p-2 text-white/80 flex flex-col gap-1">
              {modelList
                .filter((m) => m !== model)
                .map((filteredModel, i) => (
                  <h1
                    key={i}
                    className="px-5 py-2 rounded-lg hover:bg-[#1A1C1E] cursor-pointer"
                    onClick={() => {
                      setModel(filteredModel);
                    }}
                  >
                    {filteredModel}
                  </h1>
                ))}
            </div>
          )}
          <h1 className="text-white text-xl font-semibold">{model}</h1>
          <div
            className={`pt-1 duration-200 ${isModelOpen ? "transform rotate-180 " : "rotate-0"}`}
          >
            <FaChevronDown />
          </div>
        </div>
      </div>
    );
  }
);

Header.displayName = "Header";

export default Header;
