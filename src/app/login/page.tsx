import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex relative h-screen">
      <Link href="/register" rel="noreferrer" className={buttonVariants({ variant: "outline" }) + " border-0 top-8 right-8 absolute disabled:opacity-50 disabled:opacity-50 hover:bg-accent"}>
        Register
      </Link>
      <div className="w-[50%] h-full bg-primary dark:bg-muted p-10 text-white hidden lg:block xl:block">
        <div className="h-full flex justify-between flex-col">
          <Link href="/" rel="noreferrer">
            <h3 className="text-lg font-medium">Daily Journal</h3>
          </Link>
          <div>
            <blockquote>
              <p className="text-lg mb-2">“It made me really wanted to bump up my journal writing in this year. Grid Diary is a new way to look at journaling.”</p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] xl:w-[50%] h-full flex justify-center items-center	flex-col p-10 gap-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
          <p className="text-sm text-muted-foreground">Enter your details to Login</p>
        </div>
        <div className="w-[350px]">
          <form className="grid gap-2">
            <Input placeholder="name@emaple.com" type="text" />
            <Input placeholder="********" type="password" />
            <Button type="submit">Submit</Button>
          </form>
          <Separator className="my-4" />
          <div className="text-center">
            <span className="text-sm text-muted-foreground">By clicking continue, you agree to our Terms of Service and Privacy Policy.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
