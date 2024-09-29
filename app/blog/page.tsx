/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spotlight } from "@/components/ui/Spotlight";
import { getPosts } from "@/sanity/lib/utils";
import BlogItem from "@/components/Blog";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-v-7xl w-full min-h-screen">
        <div className="pb-20 pt-36 ">
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="top-10 left-full h-[80vh] w-[50vw]"
              fill="purple"
            />
            <Spotlight
              className="top-28 left-80 h-[80vh] w-[50vw]"
              fill="blue"
            />
          </div>
          <ul className=" py-5">
            {posts?.length > 0 ? (
              posts.map((post: any) => <BlogItem key={post._id} blog={post} />)
            ) : (
              <p className="text-slate-200">No posts found</p>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}
