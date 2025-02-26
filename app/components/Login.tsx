"use client";
import Link from "next/link";
import React from "react";
import Loading from "../chat/Components/Loading";
const Login = () => {
  const [loading, setLoading] = React.useState(false);
  return (
    <Link
      href="/chat"
      className="px-4 py-1.5 border border-white/10 rounded-lg bg-[#1A1C1E] cursor-pointer hover:scale-95 duration-200"
      onClick={() => setLoading(true)}
    >
      {!loading ? (
        <p className="text-base font-medium tracking-wide">Login</p>
      ) : (
        <div className="w-5 h-5 ">
          <Loading />
        </div>
      )}
    </Link>
  );
};

export default Login;
