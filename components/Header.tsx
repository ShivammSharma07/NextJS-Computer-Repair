import { HomeIcon, FileIcon, UserRound, LogOut } from "lucide-react";
import Link from "next/link";
import NavButton from "./NavButton";
import { ModeToggle } from "./ModeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton icon={HomeIcon} href="/home" label="Home" />
          <Link
            href={"/home"}
            className="flex items-center justify-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Computer Repair Shop
            </h1>
          </Link>
        </div>

        <div className="flex items-center">
          <NavButton icon={FileIcon} href="/tickets" label="Tickets" />
          <NavButton icon={UserRound} href="/customers" label="Customers" />
          <ModeToggle />
          <Button
            variant={"ghost"}
            size={"icon"}
            aria-label="Logout"
            title="Logout"
            asChild
            className="rounded-full"
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
