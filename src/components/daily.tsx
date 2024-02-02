"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useTheme } from "next-themes";

const Daily = ({ isOpen, handleOpen, handleSubmit }: any) => {
  const { theme } = useTheme();

  const [formValue, setFormValue] = useState({
    title: "",
    content: "",
  });

  const editor: BlockNoteEditor = useBlockNote({
    initialContent: formValue.content ? JSON.parse(formValue.content) : undefined,
    onEditorContentChange: (editor) => {
      setFormValue((prev) => ({ ...prev, content: JSON.stringify(editor.topLevelBlocks) }));
    },
  });

  return (
    <Dialog open={isOpen} onOpenChange={() => handleOpen(false)}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Today&apos;s Entry</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="title" className="sr-only">
              Title
            </Label>
            <Input id="title" placeholder="12/12/1212 or Title" onChange={(e) => setFormValue((prev) => ({ ...prev, title: e.target.value }))} />
          </div>
        </div>
        <div className="flex items-center space-x-2 rounded-md border py-1 shadow-sm">
          <BlockNoteView editor={editor} theme={theme === "dark" ? "dark" : "light"} />
        </div>
        <DialogFooter className="sm:justify-end">
          <Button type="button" variant="secondary" disabled={formValue.title.length === 0 || formValue.content.length === 0} onClick={() => handleSubmit(formValue)}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Daily;
