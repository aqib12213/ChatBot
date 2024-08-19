import ChatBotNaveBar from "./(conponents)/ChatBotNaveBar";

// const page = () => {
//   return (
//     <div className="w-full max-w-screen-md">
//       <ChatBotNaveBar />

//     </div>
//   );
// };

// export default page;

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import RecievedMessageComp from "./(conponents)/RecievedMessageComp";
import { ArrowUp, PaperclipIcon } from "lucide-react";
import SendedMessageComp from "./(conponents)/SendedMessageComp";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Page() {
  return (
    <div className=" h-dvh max-h-dvh min-h-dvh w-full  max-w-screen-md py-4">
      <div className="backgroundImage relative m-2 flex h-full max-h-full flex-col overflow-hidden rounded-md border">
        <ChatBotNaveBar />
        <ScrollArea className=" mb-20 h-full max-h-full  sm:px-3">
          <div className="flex h-full flex-col items-center justify-center space-y-4 pb-20 pt-5">
            <Avatar className="h-20 w-20 border-2 bg-secondary p-4">
              <AvatarImage src="/Bot.png" alt="ChatBot" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold">Chatbot</h2>
            <p className="text-center text-muted-foreground">
              Our virtual assistant is here to help you.
            </p>
          </div>
          <div className="flex flex-1 flex-col space-y-4">
            <div className="flex justify-center">
              <span className="rounded-full bg-primary px-2 py-1 text-sm text-secondary">
                Today
              </span>
            </div>
            <RecievedMessageComp
              MessageData={{
                avatarSrc: "/Bot.png",
                message: "Welcome to chatbot.co, how can I help you?",
                time: "09.12PM",
                senderName: "Ehtisham",
                senderId: "1",
                messageId: "Hash",
              }}
            />
            <SendedMessageComp
              MessageData={{
                message: "What you can do",
                time: "12:01 PM",
                userId: "222",
                messageId: "anth",
              }}
            />
            <RecievedMessageComp
              MessageData={{
                avatarSrc: "/Bot.png",
                message: "I can help you with the following",
                time: "09.12PM",
                senderName: "Ehtisham",
                senderId: "1",
                messageId: "Hash",
              }}
            />
            <RecievedMessageComp
              MessageData={{
                avatarSrc: "/Bot.png",
                message: "1. What is meaning of Accessibility",
                time: "09.12PM",
                senderName: "Ehtisham",
                senderId: "1",
                messageId: "Hash",
              }}
            />
            <SendedMessageComp
              MessageData={{
                message: "What is meaning of Accessibility",
                time: "12:01 PM",
                userId: "222",
                messageId: "anth",
              }}
            />
            <RecievedMessageComp
              MessageData={{
                avatarSrc: "/Bot.png",
                message:
                  "Accessibility is the practice of making your websites usable by as many people as possible. We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobile devices, or those with slow network connections.",
                time: "09.12PM",
                senderName: "Ehtisham",
                senderId: "1",
                messageId: "Hash",
              }}
            />
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        <footer className="absolute bottom-3 mx-2 mb-4 flex w-[97%] items-center self-center rounded-full border-t bg-secondary px-4 py-1">
          <PaperclipIcon className="h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="What is meaning of Accessibility"
            className="mx-4 flex-1 bg-transparent text-muted-foreground focus:outline-none"
          />
          <Button
            variant="default"
            className="flex h-10 w-10 items-center justify-center rounded-full p-0"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </footer>
      </div>
    </div>
  );
}
