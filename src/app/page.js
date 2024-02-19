import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import FeaturedPosts1 from "../components/Home/FeaturedPosts1";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <FeaturedPosts1 blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
