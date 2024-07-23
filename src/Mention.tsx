import type { MentionRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { LinkPreview } from "./LinkPreview";

interface MentionProps {
  mention: MentionRichTextItemResponse["mention"];
}

export function Mention({ mention }: MentionProps) {
  switch (mention.type) {
    case "link_preview":
      return <LinkPreview url={mention.link_preview.url} />;
    default:
      return null;
  }
}
