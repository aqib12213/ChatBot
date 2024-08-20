import ChatBotNaveBar from "./(conponents)/ChatBotNaveBar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import RecievedMessageComp from "./(conponents)/RecievedMessageComp";
import { ArrowUp, PaperclipIcon } from "lucide-react";
import SendedMessageComp from "./(conponents)/SendedMessageComp";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Page() {
  const messages = [
    {
      role: "bot",
      message: "Welcome to chatbot.co, how can I help you?",
      time: "09.12PM",
      messageId: "Hash",
    },
    {
      role: "user",
      message: "What you can do",
      time: "12:01 PM",
      messageId: "anything",
    },
    {
      role: "bot",
      message: `## I can help you with the following
      1. Get information about our products 
      2. Get information about our services
      3. Get information about our company
      4. Get information about our team
      5. Get information about our contact details
      `,
      time: "12:02 PM",
      messageId: "Hash",
    },
    {
      role: "user",
      message: "Is this possible that I can store my user response, my chatbot response in Markdown and then render them as Markdown with styled and prose?",
      time: "12:01 PM",
      messageId: "anything",
    },
    {
      role: "bot",
      message: ` Yes, you can store your user response, chatbot response in Markdown and then render them as Markdown with styled and prose.`,
      time: "12:02 PM",
      messageId: "Hash",
    },
    
  ];
  return (
    <div className=" h-dvh max-h-dvh min-h-dvh w-full  max-w-screen-md sm:py-4">
      <div className="backgroundImage relative sm:m-2 flex h-full max-h-full flex-col overflow-hidden sm:rounded-lg sm:border">
        <ChatBotNaveBar />
        <ScrollArea className=" pb-20 px-3 h-full max-h-full">
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
          <div className="flex flex-1 flex-col space-y-2">
            <div className="flex justify-center">
              <span className="rounded-full bg-primary px-2 py-1 text-sm text-secondary">
                Today
              </span>
            </div>
            {messages.map((message, index) =>
              message.role === "bot" ? (
                <RecievedMessageComp key={index} MessageData={message} />
              ) : (
                <SendedMessageComp key={index} MessageData={message} />
              ),
            )}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        <footer className="absolute bottom-4 flex w-[97%] items-end self-center rounded-[26px] bg-primary px-3 py-2">
          <PaperclipIcon className="h-5 w-5 text-muted-foreground mb-2" />
          <textarea
            // type="text"
            rows={1}
            dir="auto"
            placeholder="What is meaning of Accessibility"
            className="mx-4 flex-1 bg-transparent text-secondary mb-2 h-full focus:outline-none max-h-[25dvh] resize-y min-h-full"
          />
          <Button
            variant="secondary"
            className="flex h-10 w-10 items-center justify-center rounded-full p-0"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </footer>
      </div>
    </div>
  );
}
