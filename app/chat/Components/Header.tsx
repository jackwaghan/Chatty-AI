import React from "react";
import { TbLayoutSidebarFilled } from "react-icons/tb";
const Header = () => {
  const HeadTools = {
    sidebar: <TbLayoutSidebarFilled size={30} className="text-white/80 " />,
    list: <h1 className="text-white text-xl font-semibold">Gemini</h1>,
  };
  return (
    <div className="h-full w-full flex gap-2 items-center  pb-2 pl-2 ">
      <div className="p-1.5 rounded-lg hover:bg-[#1A1C1E] cursor-pointer hover:scale-95 duration-200">
        {HeadTools.sidebar}
      </div>
      <div className="p-1.5 rounded-lg hover:bg-[#1A1C1E]  ">
        {HeadTools.list}
      </div>
    </div>
  );
};

export default Header;
