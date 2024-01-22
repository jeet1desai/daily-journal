import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import RichTextEditor from "react-rte";

const toolbarConfig: any = {
  display: ["INLINE_STYLE_BUTTONS", "BLOCK_TYPE_BUTTONS", "LINK_BUTTONS", "BLOCK_TYPE_DROPDOWN", "HISTORY_BUTTONS"],
  INLINE_STYLE_BUTTONS: [
    { label: "Bold", style: "BOLD", className: "custom-css-class" },
    { label: "Italic", style: "ITALIC" },
    { label: "Underline", style: "UNDERLINE" },
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: "Normal", style: "unstyled" },
    { label: "Heading Large", style: "header-one" },
    { label: "Heading Medium", style: "header-two" },
    { label: "Heading Small", style: "header-three" },
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" },
  ],
};

const Daily = ({ isOpen, handleOpen }: any) => {
  const [note, setNote] = useState(RichTextEditor.createValueFromString("", "html"));
  return (
    <Dialog open={isOpen} onOpenChange={() => handleOpen(false)}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Today's Entry</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="title" className="sr-only">
              Title
            </Label>
            <Input id="title" placeholder="12/12/1212 or Title" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <RichTextEditor className="w-full" toolbarConfig={toolbarConfig} value={note} onChange={(val) => setNote(val)} />
        </div>
        <DialogFooter className="sm:justify-end">
          <Button type="button" variant="secondary">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Daily;
