import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";

interface Heading2Props {
  block: Heading2BlockObjectResponse;
}

export function Heading2({ block }: Heading2Props) {
  return (
    <h2>
      <RichText blocks={block.heading_2.rich_text} />
    </h2>
  );
}
