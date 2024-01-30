"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";

const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userId = localStorage.getItem("user");

      if (!userId) {
        router.push(`/login`);
      } else {
        setUserId(userId);
      }
    }
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await axios.get("./api/auth/logout");
      toast.success(response.data.message);
      localStorage.clear();
      router.push(`/`);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

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
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default BottomNavigation;
