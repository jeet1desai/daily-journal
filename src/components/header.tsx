"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser || "");
    }
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Daily Journal</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 gap-[20px]">
            {user ? (
              <Link href={`/${user}`} rel="noreferrer">
                <span className="text-sm font-medium text-muted-foreground">Dashboard</span>
              </Link>
            ) : (
              <Link href="/login" rel="noreferrer">
                <span className="text-sm font-medium text-muted-foreground">Login</span>
              </Link>
            )}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
