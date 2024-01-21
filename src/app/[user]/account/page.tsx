import React from "react";
import Sidebar from "@/components/sidebar";
import BottomNavigation from "@/components/bottom-navigation";

const Account = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="w-[100%] md:w-[70%] lg:w-[80%] border-l-2 border-r-2 overflow-auto">
        <div className="h-full overflow-hidden">Account</div>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Account;
