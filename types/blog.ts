import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: number;
  title: string;
  slug: string;
  metadata: string;
  body: PortableTextBlock[];
  mainImage: any;
  tags: string[];
  publishedAt: string;
};
