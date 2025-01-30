import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutFour = ({ blog }) => {
  return (
    <div className="group flex flex-col h-full gap-4 text-dark dark:text-light">
      {/* Image Container */}
      <div className="w-full h-40 sm:h-48 overflow-hidden rounded-lg">
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
      <div className="flex flex-col flex-grow">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm mb-1">
          {blog.tags[0]}
        </span>

        <Link href={blog.url} className="flex-grow">
          <h2 className="font-semibold text-base sm:text-lg line-clamp-2">
            <span
              className="bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-gray dark:text-light/50 font-semibold text-xs sm:text-base mt-2">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutFour;
