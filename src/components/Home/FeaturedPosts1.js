import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";

import BlogLayoutFour from "./../Blog/BlogLayoutFour";
import ConnectedSite from "../ConnectedSite/ConnectedSite";

const FeaturedPosts1 = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <article className="flex flex-row items-start justify-end  sm:mx-10 relative h-[164vh] sm:h-[85vh] ">
        <ConnectedSite />
        <section className="w-full mt-0 margin-right:11rem margin-left:-174px sm:mt-24   sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center z-10">
          <h2 className="text-center w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
            DESIGN CORNER
          </h2>

          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <div className="row-span-2 col-start-2 row-start-1">
              <article
                className=" "
                style={{ width: "70%", left: "0px", bottom: "-5px" }}
              >
                <BlogLayoutFour blog={sortedBlogs[9]} />
              </article>
            </div>
            <div className="row-span-2 col-start-3 row-start-1">
              <article
                className="  "
                style={{ width: "70%", left: "0px", bottom: "-5px" }}
              >
                <BlogLayoutFour blog={sortedBlogs[9]} />
              </article>
            </div>
            <div className="col-start-3 row-start-3">
              <article
                className="  "
                style={{ width: "70%", left: "0px", bottom: "-5px" }}
              >
                <BlogLayoutFour blog={sortedBlogs[9]} />
              </article>
            </div>
            <div className="col-start-1 row-start-1">
              <article
                className=" col-span-2 sm:col-span-1 row-span-1 relative width:72px "
                style={{ width: "70%", left: "0px", bottom: "-5px" }}
              >
                <BlogLayoutFour blog={sortedBlogs[9]} />
              </article>
            </div>
            <div className="col-start-1 row-start-2">
              <article
                className=" col-span-2 sm:col-span-1 row-span-1 relative width:72px "
                style={{ width: "70%", left: "0px", bottom: "-5px" }}
              >
                <BlogLayoutFour blog={sortedBlogs[9]} />
              </article>
            </div>
            <div className="col-span-2 col-start-1 row-start-3">
              <article
                className=" col-span-2 sm:col-span-1 row-span-1 relative width:72px "
                style={{ width: "70%", left: "0px", bottom: "-5px" }}
              >
                <BlogLayoutFour blog={sortedBlogs[9]} />
              </article>
            </div>
          </div>
        </section>
      </article>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />;
    </>
  );
};

export default FeaturedPosts1;
