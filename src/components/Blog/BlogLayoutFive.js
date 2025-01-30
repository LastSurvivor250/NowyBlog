import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutFive = ({ blog }) => {
  return (
    <div className="group flex flex-row h-full gap-4 text-dark dark:text-light">
      {/* Image Container */}
      <div className="w-2/5 h-full overflow-hidden rounded-lg flex-shrink-0">
        <Link href={blog.url} className="block h-full">
          <Image
            src={blog.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          />
        </Link>
      </div>

      {/* Text Content */}
      <div className="flex flex-col flex-grow w-3/5 justify-center">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-[0.6rem] sm:text-xs mb-1">
          {blog.tags[0]}
        </span>

        <Link href={blog.url}>
          <h2 className="font-semibold text-sm sm:text-base line-clamp-2 leading-tight">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_4px] group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="text-gray dark:text-light/50 font-semibold text-[0.6rem] sm:text-xs mt-1">
          {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutFive;
