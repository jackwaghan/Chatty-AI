import React, { FormEvent, memo } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { LuCircleStop } from "react-icons/lu";
interface ChatRequestProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  isLoading: boolean;
  stop: () => void;
}

const ChatRequest: React.FC<ChatRequestProps> = memo(
  ({ handleInputChange, handleSubmit, input, isLoading, stop }) => {
    return (
      <div className="h-full w-full bg-[#1A1C1E] rounded-b-3xl flex items-center justify-center">
        <div className="w-[350px] md:w-[700px] pl-6 pr-3 py-3 bg-black rounded-full ">
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-between gap-4"
          >
            <input
              name="prompt"
              placeholder="Type a message"
              value={input}
              onChange={handleInputChange}
              className="w-full bg-transparent  focus:outline-none text-white placeholder:text-white/40"
            />
            <button
              type="submit"
              disabled={input.length === 0}
              className={` flex justify-center items-center rounded-full bg-white  ${input.length === 0 && !isLoading ? "opacity-50  cursor-not-allowed" : "cursor-pointer hover:opacity-80"}`}
            >
              {isLoading ? (
                <LuCircleStop onClick={stop} className="fill-black w-8 h-8 " />
              ) : (
                <FaArrowUp className="fill-black w-8 h-8 p-1.5" />
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }
);
ChatRequest.displayName = "ChatRequest";

export default ChatRequest;
