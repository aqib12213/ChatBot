import { siteConfig } from "config/site";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ui/ModeToggle";
import SignInOrUserAvatar from "./SignInOrUserAvatar";

export default function NavBar() {
    const navigation = [
    { title: "Features", path: "/#features" },
    { title: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className="w-full bg-gray-900 h-fit">
      <div className="mx-auto max-w-screen-xl items-center px-4 flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <Link href="/">
            <Image
            className="rounded-lg bg-gray-200 size-10 p-1"
              src="/bot.png"
              width={40}
              height={40}
              alt={siteConfig.name + " logo"}
            />
          </Link>
        </div>
        <div
          className={`flex-1 justify-end items-center`}
        >
          <ul className="items-center justify-end pr-10 flex gap-2">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-300 hover:text-gray-100"
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-2">
 
          <SignInOrUserAvatar />
        </div>
      </div>
    </nav>
  );
}
