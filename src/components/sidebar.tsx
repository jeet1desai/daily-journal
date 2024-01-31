"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import dayjs from "dayjs";

const Sidebar = ({ name, createdAt, profilePicture }: { name: string; createdAt: string; profilePicture: string }) => {
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
    <div className="hidden md:flex md:w-[40%] lg:w-[20%] py-5 px-4 flex flex-col justify-between items-center">
      <div className="w-full lg:w-[80%] flex flex-col justify-start items-center gap-[20px]">
        <Avatar className="h-20 w-20">
          <AvatarImage src={profilePicture} alt={name} />
          <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h1 className="text-gray-gray1k font-semibold text-base">{name}</h1>
          <span className="text-gray-gray5 text-xs">Joined at {dayjs(createdAt).format("DD MMM YYYY")}</span>
        </div>
        <div className="w-full">
          <div className="grid grid-flow-row auto-rows-max text-sm gap-2">
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
      </div>
      <div className="flex flex-col items-center gap-[20px]">
        <Calendar mode="single" className="lg:hidden rounded-md border shadow" />
        <Button onClick={handleLogout}>Logout</Button>
        <span className="text-gray-gray5 text-xs">© 2024 Jeet Desai • v0.0.1</span>
      </div>
    </div>
  );
};

export default Sidebar;
