import { format } from "date-fns";
import { Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutFive = ({ blog }) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-xl bg-light shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-dark">
      <div className="flex h-full flex-col">
        <div className="relative aspect-[3/2] flex-1 overflow-hidden">
          <Image
            src={blog.image.filePath.replace("../public", "")}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-4">
          <h3 className="font-medium line-clamp-2">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
              {blog.title}
            </span>
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <Tag
              tag={blog.tags[0]}
              className="text-xs bg-light/80 backdrop-blur-sm dark:bg-dark/80"
            />
            <time className="text-xs text-dark/60 dark:text-light/60">
              {format(new Date(blog.publishedAt), "MMM dd")}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayoutFive;
