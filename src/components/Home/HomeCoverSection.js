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
    <>
      <div className="">
        <article className="flex flex-row items-start justify-end sm:mx-10 relative h-[164vh] sm:h-[85vh]">
          <ConnectedSite />
          <section className="w-full mt-0 sm:mt-24 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
            <h3 className="text-center w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
              The Larger Consciousness System- The God.
            </h3>
            <div className="grid grid-cols-3 gap-6 sm:mt-16">
              {/* Top Row */}
              <article className="col-span-2 row-span-1 relative">
                <BlogLayoutOne blog={sortedBlogs[8]} />
              </article>
              <article className="col-span-1 row-span-1 relative">
                <BlogLayoutFour blog={sortedBlogs[0]} />
              </article>
              {/* Second Row */}
              <article className="col-span-1 row-span-1 relative">
                <BlogLayoutFour blog={sortedBlogs[10]} />
              </article>
              <article className="col-span-1 row-span-1 relative">
                <BlogLayoutFour blog={sortedBlogs[9]} />
              </article>
              <article className="col-span-1 row-span-1 relative">
                <BlogLayoutFour blog={sortedBlogs[7]} />
              </article>
              {/* Second Row */}
              <article className="col-span-1 row-span-1 relative">
                <BlogLayoutFour blog={sortedBlogs[11]} />
              </article>
              <article className="col-span-1 row-span-1 relative">
                <BlogLayoutFour blog={sortedBlogs[9]} />
              </article>
              <article className="col-span-1 row-span-1 relative">
                <BlogLayoutFour blog={sortedBlogs[7]} />
              </article>
              <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </div>
          </section>
        </article>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    </>
  );
};

export default HomeCoverSection;
