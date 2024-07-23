import type { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";

interface Heading1Props {
  block: Heading1BlockObjectResponse;
}

export function Heading1({ block }: Heading1Props) {
  return (
    <h1>
      <RichText blocks={block.heading_1.rich_text} />
    </h1>
  );
}
