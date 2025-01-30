// components/Elements/Tag.js
import Link from "next/link";
import { slug } from "github-slugger";

const Tag = ({ link, name, className }) => {
  return link ? (
    <Link
      href={`/categories/${slug(name)}`}
      className={`inline-block rounded-full border border-dark/10 px-4 py-1 text-xs font-semibold uppercase transition-all hover:scale-105 dark:border-light/10 ${className}`}
    >
      {name}
    </Link>
  ) : (
    <span
      className={`inline-block rounded-full border border-dark/10 px-4 py-1 text-xs font-semibold uppercase dark:border-light/10 ${className}`}
    >
      {name}
    </span>
  );
};

export default Tag;
