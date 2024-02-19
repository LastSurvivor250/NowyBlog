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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div className="row-span-2 col-start-2 row-start-1">2</div>
        <div className="row-span-2 col-start-3 row-start-1">3</div>
        <div className="col-start-3 row-start-3">4</div>
        <div className="col-start-1 row-start-1">5</div>
        <div className="col-start-1 row-start-2">6</div>
        <div className="col-span-2 col-start-1 row-start-3">7</div>
      </div>
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-100% w-full
            dark:bg-gradient-to-b from-transparent from-[-150%] to-dark
             rounded-xl z-0
            "
      />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />;
    </>
  );
};

export default FeaturedPosts1;
