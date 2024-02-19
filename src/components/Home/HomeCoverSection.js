import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutThree from "../Blog/BlogLayoutTwo";
import BlogLayoutFour from "../Blog/BlogLayoutFour";
import ConnectedSite from "../ConnectedSite/ConnectedSite";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className="">
      <article className="flex flex-row items-start justify-end  sm:mx-10 relative h-[164vh] sm:h-[85vh] ">
        <ConnectedSite />
        <section className="w-full mt-0 sm:mt-24   sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center z-10">
          <h2 className="text-center w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
            Doors To Your Digital Wisdom
          </h2>
          <div className="grid grid-rows-2 gap-6 ">
            <div className="grid grid-cols-2 grid-rows-1 gap-6   sm:mt-16 space-between ">
              <article
                className=" col-span-2  sxl:col-span-1 row-span-2 relative"
                style={{ width: "125%" }}
              >
                <BlogLayoutOne blog={sortedBlogs[7]} />
              </article>
              <article
                className=" col-span-2 sm:col-span-1 row-span-1 relative width:72px left:130"
                style={{ width: "70%", left: "175px" }}
              >
                <BlogLayoutFour blog={sortedBlogs[8]} />
              </article>
            </div>
            <div className="flex justify-between align-items ">
              <article className=" col-span-1 sm:col-span-1 row-span-1 relative">
                <BlogLayoutFour blog={sortedBlogs[9]} />
              </article>
              <article className="col-span-1 sm:col-span-1 row-span-1 relative">
                <BlogLayoutFour blog={sortedBlogs[6]} />
              </article>
              <article className="col-span-1 sm:col-span-1 row-span-1 relative">
                <BlogLayoutFour blog={sortedBlogs[10]} />
              </article>
              <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </div>
          </div>
        </section>
      </article>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
};

export default HomeCoverSection;
