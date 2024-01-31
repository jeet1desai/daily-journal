"use client";

import React, { useEffect, useState } from "react";
import BottomNavigation from "@/components/bottom-navigation";
import Sidebar from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import axios from "axios";
import toast from "react-hot-toast";

const Appearance = () => {
  const { theme, setTheme } = useTheme();

  const [c_theme, setCTheme] = useState(theme ?? "light");

  const [user, setUser] = useState({
    name: "",
    profilePicture: "",
    createdAt: "",
  });

  const getAccountDetails = async () => {
    try {
      const response = await axios.get("../api/user");
      setUser((prev) => ({
        ...prev,
        ...response.data.user,
      }));
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAccountDetails();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar name={user.name} createdAt={user.createdAt} profilePicture={user.profilePicture}/>
      <div className="w-[100%] md:w-[70%] lg:w-[80%] border-l-2 border-r-2">
        <div className="overflow-hidden">
          <div className="sticky top-0 bg-white dark:bg-background">
            <div className="px-5 py-8">
              <h1 className="text-black text-3xl font-bold dark:text-primary mb-3">Appearance</h1>
              <p className="text-black text-sm dark:text-primary">Customize the appearance of the app. Automatically switch between day and night themes.</p>
            </div>
            <Separator />
          </div>
        </div>
        <div className="px-5 my-8 h-full">
          <div className="w-full md:w-[50%] flex flex-col gap-[20px]">
            <Label>Theme</Label>
            <p className="text-xs">Select the theme for the dashboard.</p>

            <div>
              <div className="flex gap-[20px] mb-5">
                <Button
                  onClick={() => setCTheme("light")}
                  className={cn("bg-white text-black hover:bg-white hover:text-black dark:border dark:border-white dark:bg-black dark:text-white", {
                    "bg-black text-white hover:bg-black hover:text-white dark:bg-white dark:text-black": c_theme === "light",
                  })}
                >
                  <SunIcon />
                </Button>
                <Button
                  onClick={() => setCTheme("dark")}
                  className={cn("bg-white text-black hover:bg-white hover:text-black dark:border dark:border-white dark:bg-black dark:text-white", {
                    "bg-black text-white hover:bg-black hover:text-white dark:bg-white dark:text-black": c_theme === "dark",
                  })}
                >
                  <MoonIcon />
                </Button>
              </div>
              <Button onClick={() => setTheme(c_theme)}>Update preferences</Button>
            </div>
          </div>
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Appearance;
