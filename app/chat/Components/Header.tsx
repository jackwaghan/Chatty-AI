import React from "react";
import { TbLayoutSidebarFilled } from "react-icons/tb";
interface HeaderProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}
const Header: React.FC<HeaderProps> = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const HeadTools = {
    sidebar: <TbLayoutSidebarFilled size={30} className="text-white/80 " />,
    list: <h1 className="text-white text-xl font-semibold">Gemini</h1>,
  };
  return (
    <div className="h-full w-full flex gap-2 items-center  pb-2 pl-2 ">
      {!isSidebarOpen && (
        <div
          className="p-1.5 rounded-lg hover:bg-[#1A1C1E] cursor-pointer hover:scale-95 duration-200"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          {HeadTools.sidebar}
        </div>
      )}

      <div className="p-1.5 rounded-lg hover:bg-[#1A1C1E]  ">
        {HeadTools.list}
      </div>
    </div>
  );
};

export default Header;
