import { createClient, type QueryParams } from "next-sanity";
import clientConfig from "./config";
import {
  allCategoriesQuery,
  postQuery,
  postQueryByCategory,
  postQueryBySlug,
} from "./query";
import { Blog, NavItem } from "@/types/blog";

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
    tags: [],
  });
  return data;
};

export const getPostBySlug = async (slug: string) => {
  const data: Blog = await sanityFetch({
    query: postQueryBySlug,
    qParams: { slug },
    tags: [],
  });

  return data;
};

export const getPostsByCategory = async (category: string) => {
  const data: Blog[] = await sanityFetch({
    query: postQueryByCategory,
    qParams: { category },
    tags: ["post", "category"],
  });

  return data;
};

export const getAllCategories = async () => {
  const data: NavItem[] = await sanityFetch({
    query: allCategoriesQuery,
    qParams: {},
    tags: ["category"],
  });
  return data;
};
