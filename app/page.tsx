import Image from "next/image";
import Source from "../public/Chat_Template.png";
import Login from "./components/Login";
import Github from "./components/Github";
export default function Home() {
  return (
    <div className="flex flex-col h-dvh w-dvw overflow-hidden px-5 md:px-10">
      <div className="flex w-full justify-between h-[60px] items-center mt-5 ">
        <p className="text-xl font-semibold">Chatty AI</p>
        <div className="flex gap-4 items-center">
          <Github />
          <Login />
        </div>
      </div>
      <div className="w-full h-full flex justify-center ">
        <div className="max-w-6xl text-pretty">
          <p className=" text-3xl md:text-6xl font-semibold mt-20 md:mt-40 md:leading-normal leading-relaxed">
            Unlock the power of
            <span className="px-4 py-1 bg-white text-black mx-3 font-bold">
              multiple AI models
            </span>
            in one lightning-fast chat experience.
          </p>
        </div>
      </div>
      <div className="h-full w-full flex justify-center items-center md:mt-20">
        <div className="md:p-2.5 p-2  border border-white/10 rounded-lg bg-white/10 w-full md:w-[85%]">
          <Image
            alt="Chatty AI Image source"
            src={Source}
            className="rounded-lg h-full"
          />
        </div>
      </div>
    </div>
  );
}
