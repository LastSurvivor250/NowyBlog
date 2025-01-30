import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutFour from "./../Blog/BlogLayoutFour";
import ConnectedSite from "../ConnectedSite/ConnectedSite";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <>
      <div className="mb-16 sm:mb-24">
        <article className="flex flex-row items-start justify-center sm:justify-between sm:mx-10 relative">
          <ConnectedSite />

          <section className="w-full mt-0 sm:mt-24 px-4 sm:px-10 md:px-24 sxl:px-32 flex flex-row items-start gap-6">
            {/* Left & Center Grid */}
            <div className="w-full max-w-[900px]">
              {/* Title */}
              <h2 className="text-center w-full font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light mb-8">
                --- SMMA SCHOOL ---
              </h2>

              {/* Posts Grid */}
              <div className="grid gap-6">
                {/* First Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="w-full h-[300px]">
                    <BlogLayoutOne blog={sortedBlogs[11]} />
                  </div>
                  <div className="w-full h-[300px]">
                    <BlogLayoutOne blog={sortedBlogs[3]} />
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  {[7, 5, 10].map((index) => (
                    <div key={index} className="w-full h-[250px]">
                      <BlogLayoutFour blog={sortedBlogs[index]} />
                    </div>
                  ))}
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8">
                  {[13, 14, 15, 16].map((index) => (
                    <div key={index} className="w-full h-[200px]">
                      <BlogLayoutFour blog={sortedBlogs[index]} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full sm:w-1/3 max-w-[300px] flex flex-col gap-6">
              {/* Adjusted heights to match the total height of the central-left section */}
              {[18, 19, 20, 21].map((index) => (
                <div key={index} className="h-[187.5px] flex">
                  <BlogLayoutFour blog={sortedBlogs[index]} />
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default FeaturedPosts;
