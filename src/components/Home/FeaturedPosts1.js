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
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />;
    </>
  );
};

export default FeaturedPosts1;
