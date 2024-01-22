"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:w-[40%] lg:w-[20%] py-5 px-4 flex flex-col justify-between items-center">
      <div className="w-full lg:w-[80%] flex flex-col justify-start items-center gap-[20px]">
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h1 className="text-gray-gray1k font-semibold text-base">Jeet Desai</h1>
          <span className="text-gray-gray5 text-xs">Joined at 12 Jan 2023</span>
        </div>
        <div className="w-full">
          <div className="grid grid-flow-row auto-rows-max text-sm gap-2">
            <Link
              href={`/1`}
              className={cn("flex justify-center items-center rounded-md p-2 bg-muted", {
                "bg-primary": pathname === `/1`,
                "text-secondary": pathname === `/1`,
              })}
              rel="noreferrer"
            >
              Home
            </Link>
            <Link
              href={`/1/account`}
              className={cn("flex justify-center items-center rounded-md p-2 bg-muted", {
                "bg-primary": pathname === `/1/account`,
                "text-secondary": pathname === `/1/account`,
              })}
              rel="noreferrer"
            >
              Account
            </Link>
            <Link
              href={`/1/appearance`}
              className={cn("flex justify-center items-center rounded-md p-2 bg-muted", {
                "bg-primary": pathname === `/1/appearance`,
                "text-secondary": pathname === `/1/appearance`,
              })}
              rel="noreferrer"
            >
              Appearance
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[20px]">
        <Calendar mode="single" className="lg:hidden rounded-md border shadow" />
        <span className="text-gray-gray5 text-xs">© 2024 Jeet Desai • v0.0.1</span>
      </div>
    </div>
  );
};

export default Sidebar;
