import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { Text } from "./Text";
import { Mention } from "./Mention";

interface RichTextProps {
  blocks: RichTextItemResponse[];
}

export function RichText({ blocks }: RichTextProps) {
  return blocks.map((block) => {
    switch (block.type) {
      case "text":
        return (
          <Text
            plainText={block.plain_text}
            annotations={block.annotations}
            href={block.href}
          />
        );
      case "mention":
        return <Mention mention={block.mention} />;
      default:
        return null;
    }
  });
}
