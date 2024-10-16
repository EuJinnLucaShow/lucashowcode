import { createClient, type QueryParams } from "next-sanity";
import clientConfig from "./config";
import { postQuery, postQueryBySlug } from "./query";
import { Blog } from "@/types/blog";

export const client = createClient(clientConfig);

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: "no-store",
    next: { tags },
  });
}

export const getPosts = async () => {
  const data: Blog[] = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags: ["post", "category"],
  });
  return data;
};

export const getPostBySlug = async (slug: string) => {
  const data: Blog = await sanityFetch({
    query: postQueryBySlug,
    qParams: { slug },
    tags: ["post", "category"],
  });

  return data;
};
