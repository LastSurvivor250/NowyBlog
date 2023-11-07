import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block  sm:px-10  bg-emerald-800 text-light rounded-lg capitalize font-semibold border-1 border-solid border-light hover:scale-105 transition-all ease duration-200 text-xs sm:text-base",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
