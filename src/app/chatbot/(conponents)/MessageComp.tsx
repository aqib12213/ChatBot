import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { marked } from "marked";
import MessageActions from "./MessageActions";

type MessageCompProps = {
  role: string;
  message: string;
  time: string;
  messageId: string;
};

const MessageComp = ({ MessageData }: { MessageData: MessageCompProps }) => {
  const { role, message, time } = MessageData;
  const htmlContent = marked(message);

  return (
    <div
      className={`flex w-full ${role === "bot" ? "items-end justify-start space-x-2 pr-[10%] sm:pr-[20%]" : "sm:pl-[20%]] items-start justify-end pl-[10%]"}`}
    >
      {role === "bot" && (
        <Avatar className="size-9 border border-muted-foreground bg-secondary p-1 mb-6">
          <AvatarImage src="/Bot.png" alt={"bot Image"} />
          <AvatarFallback>BT</AvatarFallback>
        </Avatar>
      )}
      <div className="flex flex-col gap-2">
        <div
          className={`${role === "bot" ? "bg-primary text-secondary dark:prose-stone rounded-bl-none" : " bg-blue-500 text-white prose-p:my-2 rounded-br-none"} prose prose-sm prose-invert h-fit rounded-lg  border px-4 shadow sm:prose-base`}
        >
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
        <div className="flex items-center space-x-2 px-2 text-xs text-muted-foreground justify-between">
          {role === "bot" && <MessageActions message={message} />}
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageComp;
