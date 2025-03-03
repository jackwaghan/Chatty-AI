import Link from "next/link";
import React from "react";
import { Github as GithubImage } from "lucide-react";

const Github = () => {
  return (
    <Link
      aria-label="Git Repo Link"
      href="https://github.com/jackwaghan/Chatty-AI"
      className="px-2 py-1.5 border border-white/10 rounded-lg bg-[#1A1C1E] cursor-pointer hover:scale-95 duration-200"
      target="_blank"
    >
      <GithubImage />
    </Link>
  );
};

export default Github;
