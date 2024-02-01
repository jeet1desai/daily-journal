"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import BottomNavigation from "@/components/bottom-navigation";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { uploadDocument } from "@/lib/upload";
import Link from "next/link";

const Account = () => {
  const [loading, setLoading] = useState(false);
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
  }, []);

  const formValidation: any = Yup.object().shape({
    name: Yup.string().required("Required"),
    profilePicture: Yup.string(),
    profileFile: Yup.string()
      .nullable()
      .test({
        name: "isNotEmpty",
        message: "Required",
        test: function (value) {
          const { profilePicture } = this.parent;
          const file_note = value;
          if ((profilePicture === "" || profilePicture === undefined) && file_note === null) {
            return false;
          }
          return true;
        },
      }),
  });

  const handleUpdateProfile = async (value: any) => {
    try {
      const response = await axios.post("../api/user", value);
      toast.success(response.data.message);
      setUser(response.data.user);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar name={user.name} createdAt={user.createdAt} profilePicture={user.profilePicture} />
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
          <Formik
            enableReinitialize
            initialValues={{
              name: user.name,
              profilePicture: user.profilePicture,
              profileFile: null,
            }}
            validationSchema={formValidation}
            onSubmit={async (values, { resetForm }) => {
              setLoading(true);
              let note_value = { ...values };
              if (note_value.profileFile) {
                const url: any = await uploadDocument("image", note_value.profileFile);
                note_value["profilePicture"] = url;
              }

              handleUpdateProfile(note_value);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
              return (
                <Form className="grid gap-2" onSubmit={handleSubmit}>
                  <div className="w-full md:w-[50%] flex flex-col gap-[20px]">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="picture">Picture</Label>
                      <Input id="picture" type="file" name="profileFile" onChange={(e: any) => setFieldValue("profileFile", e.target.files[0])} onBlur={handleBlur} accept="image/*" />
                      {user.profilePicture && (
                        <Link href={values.profilePicture} target="_blank" className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                          {values.profilePicture}
                        </Link>
                      )}
                      {errors.profileFile && touched.profileFile && <span className="text-sm text-red-500">{errors.profileFile}</span>}
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="John deo" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                      {errors.name && touched.name && <span className="text-sm text-red-500">{errors.name}</span>}
                    </div>
                    <Button disabled={loading} type="submit" className="w-fit">
                      Update account
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Account;
