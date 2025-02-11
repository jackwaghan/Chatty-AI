import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link href="/chat">Chat now</Link>
    </div>
  );
}
