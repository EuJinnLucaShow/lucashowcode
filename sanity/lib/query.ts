import { groq } from "next-sanity";
const postData = `{
  title,
  metadata,
  slug,
  tags, 
  mainImage,
  publishedAt,
  body
}`;

export const postQuery = groq`*[_type == "post"] ${postData}`;

export const postQueryBySlug = groq`*[_type == "post" && slug.current == $slug][0] ${postData}`;

export const postQueryByTag = groq`*[_type == "post" && $slug in tags[]->slug.current] ${postData}`;

export const postQueryByCategory = groq`*[_type == "post" && category->slug.current == $slug] ${postData}`;
