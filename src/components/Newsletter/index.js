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
    <div className="mt-6  bg-dark2 items-end content-end  border border-solid border-light dark:bg-dark2 m-2 sm:m-10 flex flex-col  text-light dark:text-light">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-1 mb-1 mr-1 w-fit justify-end sm:min-w-[384px] flex items-stretch bg-light2 dark:bg-dark p-1 sm:p-2 rounded mx04"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-light2 focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
    </div>
  );
};

export default Newsletter;
