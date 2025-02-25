import React from "react";
import { Forward } from "lucide-react";
const data = [
  "Fast API code for full stack application",
  "User-friendly interface with intuitive design",
  "Real-time data processing and analytics",
  "Highly scalable and reliable architecture",
  "Advanced security features to protect data",
];

const EmptyPage = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-full md:w-[50%] flex flex-col items-center ">
        <h1 className="text-2xl md:text-5xl font-semibold text-white/60">
          Hey👋 I am Chatty AI
        </h1>
        <div className="flex flex-col gap-2 text-white/60 mt-10 md:mt-20 text-sm md:text-lg md:w-[70%] w-[90%] p-3 rounded-xl bg-black ">
          {data.map((feature, index) => (
            <div
              key={index}
              className="p-2 hover:underline cursor-pointer rounded-lg flex gap-5"
            >
              <Forward />
              <h1> {feature}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmptyPage;
