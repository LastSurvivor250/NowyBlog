import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutFour from "./../Blog/BlogLayoutFour";
import BlogLayoutFive from "./../Blog/BlogLayoutFive";
import ConnectedSite from "../ConnectedSite/ConnectedSite";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <div className="mb-16 sm:mb-24">
      <article className="flex flex-col sm:flex-row items-start sm:justify-between sm:mx-4 lg:mx-10 relative">
        <ConnectedSite />

        <section className="w-full mt-0 sm:mt-24 px-4 sm:px-6 md:px-12 sxl:px-16 flex flex-col sm:flex-row gap-6">
          {/* Main Content (Left & Center) */}
          <div className="w-full sm:w-2/3 flex flex-col">
            <h2 className="text-center sm:text-left font-bold capitalize text-2xl md:text-3xl xl:text-4xl text-dark dark:text-light mb-6 sm:mb-8">
              --- SMMA SCHOOL ---
            </h2>

            <div className="grid gap-4 sm:gap-6">
              {/* Top Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[11, 3].map((index) => (
                  <div key={index} className="aspect-[2/1]">
                    <BlogLayoutOne blog={sortedBlogs[index]} />
                  </div>
                ))}
              </div>

              {/* Middle Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[7, 5, 10].map((index) => (
                  <div key={index} className="aspect-[4/3]">
                    <BlogLayoutFour blog={sortedBlogs[index]} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Adjusted Height */}
          <div className="w-full sm:w-1/3 flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-[56px]">
            {[18, 19, 17, 16].map((index) => (
              <div key={index} className="h-[200px] sm:h-[220px]">
                {" "}
                {/* Fixed height */}
                <BlogLayoutFive blog={sortedBlogs[index]} />
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default FeaturedPosts;
