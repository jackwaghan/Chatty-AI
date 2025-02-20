import React from "react";
import { Loader } from "lucide-react";
const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full ">
      <Loader className="animate-spin" />
    </div>
  );
};

export default Loading;
