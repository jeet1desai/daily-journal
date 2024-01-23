"use client";

import React, { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const [form, _setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formValidation: any = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Enter valid email"),
    password: Yup.string().required("Required"),
  });

  return (
    <div className="flex relative h-screen">
      <Link href="/login" rel="noreferrer" className={buttonVariants({ variant: "outline" }) + " border-0 top-8 right-8 absolute disabled:opacity-50 disabled:opacity-50 hover:bg-accent"}>
        Login
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
      <div className="w-full lg:w-[50%] xl:w-[50%] h-full flex justify-center items-center flex-col p-10 gap-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your details to create your account</p>
        </div>
        <div className="w-[350px]">
          <Formik
            enableReinitialize
            initialValues={form}
            validationSchema={formValidation}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
              return (
                <Form className="grid gap-2" onSubmit={handleSubmit}>
                  <div>
                    <Input value={values.name} onChange={handleChange} onBlur={handleBlur} name="name" placeholder="John Deo" type="text" />
                    {errors.name && touched.name && <span className="text-red-600 text-xs">{errors.name}</span>}
                  </div>
                  <div>
                    <Input value={values.email} onChange={handleChange} onBlur={handleBlur} name="email" placeholder="name@emaple.com" type="text" />
                    {errors.email && touched.email && <span className="text-red-600 text-xs">{errors.email}</span>}
                  </div>
                  <div>
                    <Input value={values.password} onChange={handleChange} onBlur={handleBlur} name="password" placeholder="********" type="password" />
                    {errors.password && touched.password && <span className="text-red-600 text-xs">{errors.password}</span>}
                  </div>
                  <Button type="submit">Submit</Button>
                </Form>
              );
            }}
          </Formik>
          <Separator className="my-4" />
          <div className="text-center">
            <span className="text-sm text-muted-foreground">By clicking submit, you agree to our Terms of Service and Privacy Policy.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
