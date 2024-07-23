import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";

interface ImageProps {
  block: ImageBlockObjectResponse;
}

export function Image({ block }: ImageProps) {
  const { image } = block;
  const src = image.type === "external" ? image.external.url : image.file.url;
  const hasCaption = image.caption.length > 0;
  const caption = hasCaption ? <RichText blocks={image.caption} /> : undefined;
  return (
    <figure>
      <picture>
        <img loading="lazy" decoding="async" src={src} alt={""} />
      </picture>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
