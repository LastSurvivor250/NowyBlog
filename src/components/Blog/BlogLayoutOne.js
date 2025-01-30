import React from "react";
import Tag from "../Elements/Tag";

import Image from "next/image";
import { format } from "date-fns";

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-dark/10 bg-light shadow-2xl transition-all duration-500 hover:shadow-3xl dark:border-light/10 dark:bg-dark">
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />

      <Image
        src={blog.image.filePath.replace("../public", "")}
        alt={blog.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="relative z-10 flex h-full flex-col justify-end p-8">
        <Tag
          tag={blog.tags[0]}
          className="mb-4 bg-light/80 backdrop-blur-sm dark:bg-dark/80"
        />
        <h3 className="font-display text-3xl font-bold text-light transition-colors group-hover:text-accentDark md:text-4xl">
          {blog.title}
        </h3>
        <time className="mt-2 block text-light/80">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </time>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
