"use client";
import { CheckIcon, CopyIcon, StarIcon } from "lucide-react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useState } from "react";

const MessageActions = ({ message }: { message: string }) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [Stared, setStared] = useState(false);
  const isCopied = Boolean(copiedText);
  return (
    <>
      <button className="size-4 p-0" onClick={() => copyToClipboard(message)}>
        {isCopied ? (
          <CheckIcon className="h-full w-full" />
        ) : (
          <CopyIcon className="h-full w-full" />
        )}
        <span className="sr-only">Copy message</span>
      </button>
      <button className="size-4 p-0" onClick={() => setStared(!Stared)}>
        <StarIcon
          className={`h-full w-full ${Stared ? "text-yellow-500" : "text-muted-foreground"}`}
        />
        <span className="sr-only">Stared message</span>
      </button>
    </>
  );
};

export default MessageActions;
