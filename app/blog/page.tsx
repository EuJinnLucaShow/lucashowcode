import { Spotlight } from "@/components/ui/Spotlight";
import { getPosts } from "@/sanity/lib/utils";
import { PinContainer } from "@/components/Blog/";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import MagicButton from "@/components/ui/MagicButton";
import { FaArrowLeft } from "react-icons/fa";
import { Blog } from "@/types/blog";

export default async function BlogPage() {
  const posts: Blog[] = await getPosts();

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Link href={"/"}>
        <MagicButton title="Back" icon={<FaArrowLeft />} position="left" />
      </Link>
      <div className="max-v-7xl w-full min-h-screen">
        <div>
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

          <div className="w-full flex items-center justify-center flex-wrap">
            {posts?.length > 0 ? (
              posts.map((post) => (
                <div key={post.publishedAt} className="my-8">
                  <PinContainer blog={post}>
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        {post.title}
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                          {post.metadata.slice(0, 70)}...
                        </span>
                      </div>
                      {post.mainImage?.asset?._ref && (
                        <div
                          style={{
                            backgroundImage: `url(${urlFor(post.mainImage)
                              .width(400)
                              .url()})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                          className="flex flex-1 w-full rounded-lg mt-4 h-[200px]"
                        />
                      )}
                    </div>
                  </PinContainer>
                </div>
              ))
            ) : (
              <p className="text-slate-200">No posts found</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
