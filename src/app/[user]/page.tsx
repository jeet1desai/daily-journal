"use client";

import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/sidebar";
import BottomNavigation from "@/components/bottom-navigation";
import JournalCard from "@/components/journal-card";
import { Button } from "@/components/ui/button";
import Daily from "@/components/daily";
import axios from "axios";
import toast from "react-hot-toast";

const UserBlog = () => {
  const [isDailyDialogOpen, setDailyDialog] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState("");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const [post, setPost] = useState<any[]>([]);

  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState({
    title: "",
    content: "",
  });

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
    getAllPost();

    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setTimeOfDay("Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setTimeOfDay("Afternoon");
    } else {
      setTimeOfDay("Evening");
    }
    setCurrentDate(currentDate);
  }, []);

  const getAllPost = async () => {
    try {
      const response = await axios.get("../api/note");
      if (response.data.post.length === 0) {
        toast.error("Post not found");
      } else {
        setPost(response.data.post);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      const response = await axios.post("../api/note", {
        title: values.title,
        content: values.content,
      });
      toast.success(response.data.message);
      setPost([...post, response.data.savedPost]);
      setDailyDialog(false);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleEdit = async (values: any) => {
    try {
      const response = await axios.put("../api/note", {
        title: values.title,
        content: values.content,
        id: editId,
      });
      const newPostList = post.map((post: any) => (post._id === response.data.note._id ? response.data.note : post));
      setPost(newPostList);
      toast.success(response.data.message);
      setDailyDialog(false);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleOpenEdit = (post: any) => {
    setEditId(post._id);
    setEditValue((prev) => ({
      ...prev,
      title: post.title,
      content: post.content,
    }));
    setDailyDialog(true);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar name={user.name} createdAt={user.createdAt} profilePicture={user.profilePicture} />
        <div className="w-[100%] md:w-[60%] lg:w-[55%] border-l-2 border-r-2 overflow-auto">
          <div className="sticky top-0 bg-white dark:bg-background">
            <div className="px-5 py-8">
              <h1 className="text-black text-3xl font-bold dark:text-primary mb-2">Good {timeOfDay},</h1>
              <p className="text-black text-xl dark:text-primary">{currentDate.toDateString()}</p>
            </div>
            <Separator />
            <div className="my-5 mx-4 flex gap-[30px]">
              <Input placeholder="Search by title" type="text" />
              <Button
                onClick={() => {
                  setEditValue({
                    title: "",
                    content: "",
                  });
                  setEditId(null);
                  setDailyDialog(true);
                }}
              >
                Add
              </Button>
            </div>
            <Separator />
          </div>
          <div className="px-5 my-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-6">
              {post.map((post) => {
                return <JournalCard key={post._id} title={post.title} handleOpenEdit={() => handleOpenEdit(post)} />;
              })}
            </div>
          </div>
          <BottomNavigation />
        </div>
        <div className="hidden lg:block w-[25%] p-5">
          <div className="flex justify-left">
            <Calendar mode="single" className="rounded-md border shadow" />
          </div>
        </div>
      </div>

      {isDailyDialogOpen && <Daily id={editId} value={editValue} isOpen={isDailyDialogOpen} handleOpen={setDailyDialog} handleSubmit={handleSubmit} handleEdit={handleEdit} />}
    </>
  );
};

export default UserBlog;
