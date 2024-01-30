"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const userId = localStorage.getItem("user");
  if (!userId) {
    router.push(`/login`);
  }

  return (
    <div className="sticky bottom-0 bg-white dark:dark:bg-background md:hidden">
      <Separator />
      <div className="my-5 mx-4 bg-white dark:dark:bg-background">
        <div className="grid grid-flow-col auto-col-max text-sm gap-2">
          <Link
            href={`/${userId}`}
            className={cn("flex justify-center items-center rounded-md p-2 bg-muted", {
              "bg-primary": pathname === `/${userId}`,
              "text-secondary": pathname === `/${userId}`,
            })}
            rel="noreferrer"
          >
            Home
          </Link>
          <Link
            href={`/${userId}/account`}
            className={cn("flex justify-center items-center rounded-md p-2 bg-muted", {
              "bg-primary": pathname === `/${userId}/account`,
              "text-secondary": pathname === `/${userId}/account`,
            })}
            rel="noreferrer"
          >
            Account
          </Link>
          <Link
            href={`/${userId}/appearance`}
            className={cn("flex justify-center items-center rounded-md p-2 bg-muted", {
              "bg-primary": pathname === `/${userId}/appearance`,
              "text-secondary": pathname === `/${userId}/appearance`,
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
