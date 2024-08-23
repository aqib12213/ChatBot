import React from "react";
import MessagesAndFooter from "./(conponents)/MessagesAndFooter";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/server/auth";
const Page = async () => {
  const session = await getServerAuthSession();

  if (!session?.user) {
    redirect("/login");
  }

  return <MessagesAndFooter />;
};

export default Page;
