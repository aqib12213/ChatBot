import Link from "next/link";
import ChatBotNaveBar from "./(conponents)/ChatBotNaveBar";
import { X } from "lucide-react";

export default function ChatBotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="backgroundImage w-full flex justify-center items-center">
    <div className=" h-dvh max-h-dvh min-h-dvh w-full  max-w-screen-md sm:py-4">
      <div className="relative flex h-full max-h-full flex-col overflow-hidden sm:m-2 sm:rounded-lg sm:border bg-background">
        <div className="flex h-6 w-full items-center justify-end border-b border-muted px-2">
          <Link href="/" className="flex h-6 w-6 items-center justify-center text-muted-foreground hover:text-primary focus:outline-none">
            <X className="size-4" />
          </Link>
        </div>
        <ChatBotNaveBar />
        {children}
      </div>
    </div></main>
  );
}
