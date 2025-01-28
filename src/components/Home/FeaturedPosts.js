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
      <div className="container mx-auto px-4 sm:px-10">
        <article className="flex flex-col sm:flex-row items-start justify-end relative min-h-screen sm:h-[85vh]">
          <ConnectedSite />

          <section className="w-full mt-4 sm:mt-24 lg:px-24 xl:px-32">
            <h2 className="text-center font-bold text-2xl md:text-4xl text-dark dark:text-light mb-8">
              --- SMMA SCHOOL ---
            </h2>

            <div className="grid gap-6">
              {/* Top Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:w-4/5">
                  {" "}
                  {/* Zmiana z 3/4 na 4/5 */}
                  <BlogLayoutFour blog={sortedBlogs[1]} />
                </div>
                <div className="md:-ml-56 md:w-[135%]">
                  {" "}
                  {/* Zwiększenie procentu i marginesu */}
                  <BlogLayoutOne blog={sortedBlogs[3]} />
                </div>
              </div>

              {/* Middle Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[7, 5, 10].map((index) => (
                  <BlogLayoutFour key={index} blog={sortedBlogs[index]} />
                ))}
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[17, 16, 15, 14].map((index) => (
                  <BlogLayoutFour key={index} blog={sortedBlogs[index]} />
                ))}
              </div>
            </div>
          </section>
        </article>{" "}
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default FeaturedPosts;
