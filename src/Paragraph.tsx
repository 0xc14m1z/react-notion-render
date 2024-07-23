import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";

interface ParagraphProps {
  block: ParagraphBlockObjectResponse;
}

export function Paragraph({ block }: ParagraphProps) {
  return (
    <p>
      <RichText blocks={block.paragraph.rich_text} />
    </p>
  );
}
