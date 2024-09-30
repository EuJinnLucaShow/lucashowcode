import config from "@/sanity/lib/config";
import { Blog } from "@/types/blog";
import { PortableText } from "@portabletext/react";
import { getImageDimensions, SanityImageSource } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";

type ImageComponentProps = {
  value: SanityImageSource & { alt?: string };
  isInline?: boolean;
};

const ImageComponent = ({ value, isInline }: ImageComponentProps) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div className="my-10 overflow-hidden rounded-[15px]">
      <Image
        src={urlBuilder(config).image(value).fit("max").auto("format").url()}
        width={width}
        height={height}
        alt={value.alt || "blog image"}
        loading="lazy"
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
      />
    </div>
  );
};

const components = {
  types: {
    image: ImageComponent,
  },
};

const RenderBodyContent = ({ post }: { post: Blog }) => {
  return <PortableText value={post?.body} components={components} />;
};

export default RenderBodyContent;
