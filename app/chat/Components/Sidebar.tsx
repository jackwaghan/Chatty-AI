import React from "react";
import { TbLayoutSidebarFilled } from "react-icons/tb";
interface SidebarProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}
const Sidebar: React.FC<SidebarProps> = ({
  setIsSidebarOpen,
  isSidebarOpen,
}) => {
  return (
    <div className="flex flex-col h-full w-full ">
      <div className="h-[60px] w-full items-center flex p-2 gap-12 ">
        {isSidebarOpen && (
          <div
            className="p-1.5 hover:bg-[#1A1C1E] hover:scale-95 duration-200 rounded-lg cursor-pointer"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <TbLayoutSidebarFilled size={30} className=" " />
          </div>
        )}
        <h1 className="font-semibold text-xl ">Sidebar</h1>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        History
      </div>
    </div>
  );
};

export default Sidebar;
