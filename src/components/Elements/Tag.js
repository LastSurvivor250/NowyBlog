import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block  sm:px-10  bg-yellow-800 text-light rounded-lg capitalize  border-1 border-solid border-rgb(99,131,148) hover:scale-105 transition-all ease duration-200 text-10px sm:text-base",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
