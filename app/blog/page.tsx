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
          <div className="py-5">
            {posts?.length > 0 ? (
              posts.map((post: any) => <BlogItem key={post._id} blog={post} />)
            ) : (
              <p>No posts found</p>
            )}
          </div>
          <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>
        </div>
      </div>
    </main>
  );
}
