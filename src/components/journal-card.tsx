"use client";

import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

const JournalCard = ({ title }: any) => {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center flex-row py-3">
        <CardTitle className="text-ellipsis overflow-hidden line-clamp-1">{title}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" style={{ margin: 0 }}>
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
    </Card>
  );
};

export default JournalCard;
