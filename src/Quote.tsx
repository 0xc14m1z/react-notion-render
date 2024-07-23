import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";

interface QuoteProps {
  block: QuoteBlockObjectResponse;
}

export function Quote({ block }: QuoteProps) {
  return (
    <blockquote>
      <RichText blocks={block.quote.rich_text} />
    </blockquote>
  );
}
