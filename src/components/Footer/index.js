"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer class="flex flex-col items-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white mt-16 sm:mt-24 p-8 rounded-lg shadow-md">
      <h3 class="font-medium text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p class="mt-5 px-4 text-center w-full sm:w-3/5 text-base leading-relaxed">
        Subscribe to learn about new technology and updates. Join our community
        of over 5000+ members to stay up to date with the latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        class="flex items-stretch mt-6 w-fit sm:min-w-[384px] bg-white rounded-lg p-4 shadow-md"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          class="w-full bg-transparent pl-2 sm:pl-0 text-gray-700 focus:border-sky-500 focus:ring-0 border-0 border-b mr-2 pb-1"
        />
        <input
          type="submit"
          value="Subscribe"
          class="bg-indigo-500 hover:bg-indigo-700 text-white font-medium rounded px-3 sm:px-5 py-1 cursor-pointer"
        />
      </form>

      <div class="flex items-center mt-8 justify-center">
        <a
          href={siteMetadata.linkedin}
          class="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon class="fill-current hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          class="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon class="fill-current hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          class="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon class="fill-current hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.dribbble}
          class="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <DribbbleIcon class="fill-current hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between pt-6">
        <span class="text-center text-white">
          ©2024 FocusedP. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          class="text-center text-white underline mt-4 md:mt-0"
        >
          sitemap.xml
        </Link>
        <div class="text-center text-white">
          Made with ❤️ by{" "}
          <a
            href="https://devdreaming.com"
            class="underline text-white"
            target="_blank"
          >
            FocusedP
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
