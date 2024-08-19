import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CopyIcon, StarIcon } from "lucide-react";

type RecievedMessageProps = {
  senderName: string;
  senderId: string;
  avatarSrc: string;
  message: string;
  time: string;
  messageId: string;
};

const RecievedMessageComp = ({
  MessageData,
}: {
  MessageData: RecievedMessageProps;
}) => {
  const { senderName, senderId, messageId, avatarSrc, message, time } =
    MessageData;
    
  return (
    <div className="flex items-start space-x-2">
      <Avatar className="size-9 bg-secondary border-2 p-2">
        <AvatarImage src={avatarSrc} alt={senderName + " Image"} />
        <AvatarFallback>{senderName.substring(0, 1)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <div className="rounded-lg bg-secondary px-4 py-2  shadow">
          <p>{message}</p>
        </div>
        <div className="flex items-center space-x-2 pl-2 text-xs text-muted-foreground">
          <CopyIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default RecievedMessageComp;
