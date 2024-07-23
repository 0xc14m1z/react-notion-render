import type { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";

interface Heading3Props {
  block: Heading3BlockObjectResponse;
}

export function Heading3({ block }: Heading3Props) {
  return (
    <h3>
      <RichText blocks={block.heading_3.rich_text} />
    </h3>
  );
}
