import React from "react";
import Sidebar from "@/components/sidebar";
import BottomNavigation from "@/components/bottom-navigation";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Account = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar  />
      <div className="w-[100%] md:w-[70%] lg:w-[80%] border-l-2 border-r-2 h-full">
        <div className=" overflow-hidden">
          <div className="sticky top-0 bg-white dark:bg-background">
            <div className="px-5 py-8">
              <h1 className="text-black text-3xl font-bold dark:text-primary">Account</h1>
            </div>
            <Separator />
          </div>
        </div>
        <div className="px-5 my-8 h-full">
          <div className="w-full md:w-[50%] flex flex-col gap-[20px]">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John deo" />
            </div>
            <Button className="w-fit">Update account</Button>
          </div>
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Account;
