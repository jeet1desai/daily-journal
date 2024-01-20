import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserBlog = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-[20%] py-10 px-4 flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h1 className="text-gray-gray1k font-semibold text-base">Jeet Desai</h1>
            <span className="text-gray-gray5 text-xs">Joined at 12 Jan 2023</span>
          </div>
        </div>
        <div>
          <span className="text-gray-gray5 text-xs">© 2024 Jeet Desai • v0.0.1</span>
        </div>
      </div>
      <div className="w-[60%] border-l-2 border-r-2 py-10 px-4 overflow-auto">
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
      </div>
      <div className="w-[20%] p-10">
        <div className="flex justify-left">
          <Calendar mode="single" className="rounded-md border shadow" />
        </div>
      </div>
    </div>
  );
};

export default UserBlog;
