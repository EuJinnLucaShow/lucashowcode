import { PortableTextBlock } from "sanity";

export type Image = {
  alt: string;
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

export type BlogCategory = {
  title: string;
  slug: {
    current: string;
  };
};

export type NavItem = {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
};
