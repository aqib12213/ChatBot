
type SendedMessageCompProps = {
  userId: string;
  message: string;
  time: string;
  messageId: string;
};

const SendedMessageComp = ({
  MessageData,
}: {
  MessageData: SendedMessageCompProps;
}) => {
  const { message, time, messageId, userId } = MessageData;
  return (
    <div className="flex items-end justify-end space-x-2">
      <div className="flex flex-col items-end space-y-1">
        <div className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow">
          <p>{message}</p>
        </div>
        <span className="text-xs text-muted-foreground">{time}</span>
      </div>
    </div>
  );
};

export default SendedMessageComp;
