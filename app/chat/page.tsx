import React from "react";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";

const page = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-[300px] h-full  ">
        <Sidebar />
      </div>
      <div className="h-full w-full ">
        <Chat />
      </div>
    </div>
  );
};

export default page;
