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
                <div className="md:w-3/4">
                  <BlogLayoutFour blog={sortedBlogs[1]} />
                </div>
                <div className="md:-ml-48 md:w-[125%]">
                  <BlogLayoutOne blog={sortedBlogs[3]} />
                </div>
              </div>

              {/* Middle Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[7, 5, 10].map((index) => (
                  <BlogLayoutFour key={index} blog={sortedBlogs[index]} />
                ))}
              </div>
              <br />
              {/* Bottom Row */}
              <div className="relative">
                {/* Scrollable Container */}
                <div
                  className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
                  style={{ scrollBehavior: "smooth" }}
                >
                  {/* Map through all elements */}
                  {sortedBlogs.slice(0, 10).map((blog, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 snap-start"
                    >
                      <BlogLayoutFour blog={blog} />
                    </div>
                  ))}
                </div>

                {/* Scroll Buttons (Optional) */}
                <button
                  onClick={() => {
                    const container = document.querySelector(
                      ".scrollable-container"
                    );
                    container.scrollBy({
                      left: -container.offsetWidth,
                      behavior: "smooth",
                    });
                  }}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
                >
                  &larr;
                </button>
                <button
                  onClick={() => {
                    const container = document.querySelector(
                      ".scrollable-container"
                    );
                    container.scrollBy({
                      left: container.offsetWidth,
                      behavior: "smooth",
                    });
                  }}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </section>
        </article>{" "}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br /> <br />
    </>
  );
};

export default FeaturedPosts;
