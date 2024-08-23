import { getServerAuthSession } from "@/server/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EllipsisVertical,
  LogIn,
  LogOut, MessageCircleQuestion,
  MessageCircleReply,
  User2
} from "lucide-react";
import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function EllipsisMenus() {
  const session = await getServerAuthSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className={buttonVariants({ variant: "ghost" })}>
          <EllipsisVertical />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="w-full">
          {session ? (
            <div className="flex flex-row gap-2">
              <Avatar>
                <AvatarImage
                  className="rounded-full border-2 border-primary"
                  alt={"user " + session.user.name}
                  width={60}
                  height={60}
                  src={session.user.image ?? "/favicon.ico"}
                />
                <AvatarFallback>
                  {session.user.name ? (
                    session.user.name?.slice(0, 2)
                  ) : (
                    <>
                      <User2 />
                    </>
                  )}
                </AvatarFallback>
              </Avatar>
              <div className="flex max-w-28 flex-col overflow-hidden">
                {session?.user?.name && (
                  <p className="truncate text-sm font-medium text-primary">
                    {session?.user?.name}
                  </p>
                )}
                <p className="truncate text-sm text-muted-foreground">
                  {session?.user?.email}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <LogIn className="size-4" />
              <Link
                href="/api/auth/signin"
                className="flex w-full flex-1 text-sm font-semibold text-primary"
              >
                Sign In
              </Link>
            </div>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <MessageCircleReply className="size-4" />
          Chat History
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <MessageCircleQuestion className="size-4" />
          Help
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <LogOut className="size-4" />
          <SignOutButton className="flex-1 text-start" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
