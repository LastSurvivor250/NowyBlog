import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import { slug } from "github-slugger";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutThree from "../Blog/BlogLayoutTwo";
import BlogLayoutFour from "../Blog/BlogLayoutFour";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className="">
      <br /> <br />
      <article className="flex flex-row items-start justify-end  sm:mx-10 relative h-[164vh] sm:h-[85vh] ">
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="width-100% object-bottom object-cover rounded-medium -z-1 "
          sizes="100vw"
          priority
        />
        <section className="w-full mt-0 sm:mt-24   sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center z-10">
          <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
            Recent Dramas Will Make Year Head Spin in 2024
          </h2>
          <div className="grid grid-rows-2 gap-6 ">
            <div className="grid grid-cols-2 grid-rows-1 gap-6   sm:mt-16 space-between">
              <article
                className=" col-span-2  sxl:col-span-1 row-span-2 relative"
                style={{ width: "121%" }}
              >
                <BlogLayoutOne blog={sortedBlogs[7]} />
              </article>
              <article
                className=" col-span-2 sm:col-span-1 row-span-1 relative width:72px left:130"
                style={{ width: "70%", left: "175px" }}
              >
                <BlogLayoutFour blog={sortedBlogs[9]} />
              </article>
            </div>
            <div className="flex justify-between align-items ">
              <article className=" col-span-1 sm:col-span-1 row-span-1 relative">
                <BlogLayoutFour blog={sortedBlogs[6]} />
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
        ; ;
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-100% w-full
            dark:bg-gradient-to-b from-transparent from-[-150%] to-dark
             rounded-xl z-0
            "
        />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </article>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
};

export default HomeCoverSection;
