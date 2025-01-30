import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutFour from "./../Blog/BlogLayoutFour";
import BlogLayoutFive from "./../Blog/BlogLayoutFive";
import ConnectedSite from "../ConnectedSite/ConnectedSite";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-center font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light mb-8">
        --- SMMA SCHOOL ---
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Hero Post (BlogLayoutOne) - Spans 2 columns on medium screens, 3 on large */}
        <div className="sm:col-span-2 lg:col-span-3">
          <BlogLayoutOne blog={sortedBlogs[0]} />
        </div>

        {/* Featured Posts (BlogLayoutFour) - Medium-sized posts */}
        <div className="sm:col-span-1">
          <BlogLayoutFour blog={sortedBlogs[1]} />
        </div>
        <div className="sm:col-span-1">
          <BlogLayoutFour blog={sortedBlogs[2]} />
        </div>

        {/* Compact Posts (BlogLayoutFive) - Smaller posts */}
        <div className="sm:col-span-1">
          <BlogLayoutFive blog={sortedBlogs[3]} />
        </div>
        <div className="sm:col-span-1">
          <BlogLayoutFive blog={sortedBlogs[4]} />
        </div>
        <div className="sm:col-span-1">
          <BlogLayoutFive blog={sortedBlogs[5]} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
