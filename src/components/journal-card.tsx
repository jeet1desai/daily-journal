import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

const JournalCard = () => {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center flex-row py-3">
        <CardTitle className="text-ellipsis overflow-hidden line-clamp-1">12 Jan 1212</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <DotsVerticalIcon />
              <span className="sr-only">Edit Delete Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <p className="text-ellipsis overflow-hidden line-clamp-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sint, reiciendis quisquam corporis soluta modi delectus odio molestiae doloribus et officia magnam quaerat similique nam ipsa temporibus ducimus numquam voluptate!</p>
      </CardContent>
    </Card>
  );
};

export default JournalCard;
