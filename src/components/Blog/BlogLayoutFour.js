import { format } from "date-fns";
import { Tag } from "lucide-react";
import Image from "next/image";

import React from "react";

const BlogLayoutFour = ({ blog }) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl bg-light shadow-xl transition-all duration-500 hover:shadow-2xl dark:bg-dark">
      <div className="grid h-full grid-cols-1 items-center gap-6 p-6 md:grid-cols-2">
        <div className="relative aspect-[5/4] overflow-hidden rounded-xl">
          <Image
            src={blog.image.filePath.replace("../public", "")}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <Tag
            tag={blog.tags[0]}
            className="self-start bg-light/80 backdrop-blur-sm dark:bg-dark/80"
          />
          <h3 className="font-display text-xl font-semibold md:text-2xl">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_3px]">
              {blog.title}
            </span>
          </h3>
          <time className="text-sm text-dark/70 dark:text-light/70">
            {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
          </time>
        </div>
      </div>
    </div>
  );
};

export default BlogLayoutFour;
