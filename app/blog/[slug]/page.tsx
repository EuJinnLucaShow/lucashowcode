import React from "react";
import { getPostBySlug } from "@/sanity/lib/utils";
import RenderBodyContent from "@/components/Blog/RenderBodyContent";
import Link from "next/link";
import MagicButton from "@/components/ui/MagicButton";
import { FaArrowLeft } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image";

type Params = {
  slug: string;
};

const SingleBlogPage = async ({ params }: { params: Params }) => {
  const post = await getPostBySlug(params.slug);

  return (
    <main className="max-w-[1000px] mx-auto px-10 md:px-24">
      <Link href={"/blog"}>
        <MagicButton title="Back" icon={<FaArrowLeft />} position="left" />
      </Link>
      <article className="my-10">
        <div className="mb-5">
          <h1 className="text-3xl py-2">{post.title}</h1>
          <p className="pb-1">
            <span className="font-medium">Published: </span>
            {new Date(post.publishedAt).toDateString()}
          </p>
          {post.mainImage?.asset?._ref ? (
            <picture>
              <img
                className="float-left m-0 w-1/3 mr-4 rounded-lg"
                src={urlFor(post.mainImage?.asset?._ref).url()}
                width={300}
                height={300}
                alt={post.mainImage.alt || ""}
              />
            </picture>
          ) : null}
        </div>

        <article className="prose lg:prose-xl">
          <RenderBodyContent post={post} />
        </article>
      </article>
    </main>
  );
};

export default SingleBlogPage;
