import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutFour from "./../Blog/BlogLayoutFour";
import BlogLayoutFive from "./../Blog/BlogLayoutFive";
import ConnectedSite from "../ConnectedSite/ConnectedSite";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-light/5 via-dark/5 to-light/5 dark:from-dark/5 dark:via-light/5 dark:to-dark/5">
      <ConnectedSite />

      <section className="container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <h2 className="sr-only">SMMA School</h2>

        <div className="grid auto-rows-[minmax(300px,auto)] grid-cols-1 gap-6 sm:grid-cols-8 sm:gap-8 lg:gap-12">
          {/* Hero Post - Spans 4 columns */}
          <article className="relative z-10 sm:col-span-4 sm:row-span-2">
            <BlogLayoutOne blog={sortedBlogs[0]} />
          </article>

          {/* Featured Post - Spans 4 columns with overlay */}
          <article className="group relative sm:col-span-4">
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark/60 to-transparent" />
            <BlogLayoutFour blog={sortedBlogs[1]} />
          </article>

          {/* Vertical Posts - Creates rhythm */}
          {[2, 3, 4].map((index) => (
            <article key={index} className="sm:col-span-2">
              <BlogLayoutFive blog={sortedBlogs[index]} />
            </article>
          ))}

          {/* Spotlight Post - Creates visual break */}
          <article className="relative sm:col-span-3 sm:col-start-6">
            <div className="absolute -inset-4 -z-10 bg-accent/10" />
            <BlogLayoutFour blog={sortedBlogs[5]} />
          </article>

          {/* Grid Filler Posts - Maintains rhythm */}
          {[6, 7, 8].map((index) => (
            <article key={index} className="sm:col-span-2">
              <BlogLayoutFive blog={sortedBlogs[index]} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedPosts;
