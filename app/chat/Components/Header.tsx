import React, { memo } from "react";
import { TbLayoutSidebarFilled } from "react-icons/tb";

interface HeaderProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = memo(
  ({ setIsSidebarOpen, isSidebarOpen }) => {
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
        <div className="p-1.5 rounded-lg hover:bg-[#1A1C1E]">
          <h1 className="text-white text-xl font-semibold">Gemini</h1>
        </div>
      </div>
    );
  }
);

Header.displayName = "Header";

export default Header;
