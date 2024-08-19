import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";
import EllipsisMenus from "./EllipsisMenus";

const ChatBotNaveBar = () => {
  return (
    <nav className="flex w-full max-w-screen-md items-center justify-between bg-background p-2">
      <div className="flex items-center justify-center gap-3">
        <Image
          className="size-12 rounded-full border-2 p-1"
          src="/bot.png"
          width={40}
          height={40}
          alt="ChatBot logo"
        />
        <div className="flex h-full w-fit flex-col">
          <h2 className="text-lg font-semibold">ChatBot</h2>
          <p className="text-xs text-muted-foreground">Powered by AI</p>
        </div>
      </div>
      {/* <div className="flex-1" /> */}
      <ul className="flex items-center gap-2">
        <ModeToggle />
        <EllipsisMenus />
      </ul>
    </nav>
  );
};

export default ChatBotNaveBar;
