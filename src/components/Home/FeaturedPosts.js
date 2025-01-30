import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";

import BlogLayoutFour from "./../Blog/BlogLayoutFour";
import ConnectedSite from "../ConnectedSite/ConnectedSite";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <>
      <div className="mb-16 sm:mb-24">
        <article className="flex flex-row items-start justify-end sm:mx-10 relative min-h-[164vh] sm:min-h-[85vh]">
          <ConnectedSite />
          <section className="w-full mt-0 sm:mt-24 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center sm:-ml-[174px] mr-[11rem]">
            <h2 className="text-center w-full font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light mb-8">
              --- SMMA SCHOOL ---
            </h2>

            <div className="grid gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:mt-16">
                <article className="sm:w-3/4">
                  <BlogLayoutFour blog={sortedBlogs[1]} />
                </article>
                <article className="sm:-ml-48 sm:w-[125%]">
                  <BlogLayoutOne blog={sortedBlogs[3]} />
                </article>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[7, 5, 10].map((index) => (
                  <article key={index}>
                    <BlogLayoutFour blog={sortedBlogs[index]} />
                  </article>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[17, 16, 15, 14].map((index) => (
                  <article key={index}>
                    <BlogLayoutFour blog={sortedBlogs[index]} />
                  </article>
                ))}
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default FeaturedPosts;
