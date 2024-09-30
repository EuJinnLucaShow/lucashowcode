import { PortableTextBlock } from "sanity";

export type Image = {
  asset: {
    _ref: string;
    _type: string;
  };
};

export type Blog = {
  title: string;
  slug: {
    current: string;
  };
  metadata: string;
  body: PortableTextBlock[];
  mainImage: Image;
  tags: string[];
  publishedAt: string;
};
