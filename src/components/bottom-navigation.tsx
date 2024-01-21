"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="sticky bottom-0 bg-white dark:dark:bg-background md:hidden">
      <Separator />
      <div className="my-5 mx-4 bg-white dark:dark:bg-background">
        <div className="grid grid-flow-col auto-col-max text-sm gap-2">
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
      <Separator />
    </div>
  );
};

export default BottomNavigation;
