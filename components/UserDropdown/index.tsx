"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { PATH } from "@/app/constants/path";
import { Avatar, AvatarFallback } from "../ui/avatar";
import NavItems from "../NavItems";
import { LogOut } from "lucide-react";

const UserDropdown = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await router.push(PATH.SIGN_IN);
  };

  const user = { name: "John Doe", email: "john.doe@example.com" };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button className="flex items-center gap-3 text-gray-4 hover:text-yellow-400 bg-transparent hover:bg-transparent cursor-pointer" />
        }
      >
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
            {user.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="hidden md:flex flex-row gap-3 items-center">
          <span className="text-base">{user.name}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400 w-full bg-gray-800 border-gray-600">
        <div className="flex relative items-center gap-3 py-2">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </div>
        </div>
        <nav className="sm:hidden">
          <NavItems />
        </nav>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"
        >
          <LogOut color="red" className="h-4 w-4 mr-2 hidden sm:block" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
