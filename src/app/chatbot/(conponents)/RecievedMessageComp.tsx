import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CopyIcon, StarIcon } from "lucide-react";
import { marked } from 'marked';
// import DOMPurify from 'dompurify';

type RecievedMessageProps = {
  role: string;
  message: string;
  time: string;
  messageId: string;
};

const RecievedMessageComp = ({
  MessageData,
}: {
  MessageData: RecievedMessageProps;
}) => {
  const { role, message, time } = MessageData;
  // const htmlContent = DOMPurify.sanitize(marked(message));
  const htmlContent = marked(message);

  return (
    <div className="flex items-start space-x-2">
      <Avatar className="size-9 border-2 bg-secondary p-2">
        <AvatarImage src="/Bot.png" alt={"bot Image"} />
        <AvatarFallback>BT</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <div className="rounded-lg border bg-primary px-4 py-2  text-secondary shadow prose prose-sm">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
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
