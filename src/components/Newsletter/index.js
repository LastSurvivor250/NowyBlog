"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div class="flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 p-8 rounded-xl shadow-md text-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          class="w-full bg-light pl-2 sm:pl-0 text-white focus:border-sky-500 focus:ring-0 border-0 border-b mr-2 pb-1"
        />
        <input
          type="submit"
          value="Subscribe"
          class="bg-indigo-500 hover:bg-indigo-700 text-white font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
    </div>
  );
};

export default Newsletter;
