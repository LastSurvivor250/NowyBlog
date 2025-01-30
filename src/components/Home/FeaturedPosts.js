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
        <article className="flex flex-row items-start justify-center sm:justify-between sm:mx-10 relative min-h-[164vh] sm:min-h-[85vh]">
          <ConnectedSite />

          <section className="w-full mt-0 sm:mt-24 px-4 sm:px-10 md:px-24 sxl:px-32 flex flex-col sm:flex-row items-start">
            {/* Left & Center Grid */}
            <div className="w-full max-w-[1200px] grid gap-6 mx-auto">
              <h2 className="text-center w-full font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light mb-8">
                --- SMMA SCHOOL ---
              </h2>

              <div className="grid gap-6 w-full">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {/* BlogLayoutFour (Left) */}
                  <div className="w-full">
                    <BlogLayoutOne blog={sortedBlogs[11]} />
                  </div>

                  {/* BlogLayoutOne (Right) */}
                  <div className="w-full">
                    <BlogLayoutOne blog={sortedBlogs[3]} />
                  </div>
                </div>

                {/* Middle Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                  {[7, 5, 10].map((index) => (
                    <div key={index}>
                      <BlogLayoutFour blog={sortedBlogs[index]} />
                    </div>
                  ))}
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                  {[17, 16, 15, 14].map((index) => (
                    <div key={index}>
                      <BlogLayoutFour blog={sortedBlogs[index]} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full sm:w-1/3 max-w-[300px] flex flex-col gap-6 sm:ml-8">
              {[18, 19, 20, 21].map((index) => (
                <div key={index} className="w-full">
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
