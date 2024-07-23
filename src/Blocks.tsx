import type { ExtendedBlockObjectResponse } from "./ExtendedBlockObjectResponse";
import { BulletedList } from "./BulletedList";
import { Callout } from "./Callout";
import { Code } from "./Code";
import { Divider } from "./Divider";
import { Heading1 } from "./Heading1";
import { Heading2 } from "./Heading2";
import { Heading3 } from "./Heading3";
import { Image } from "./Image";
import { ListItem } from "./ListItem";
import { NumberedList } from "./NumberedList";
import { Paragraph } from "./Paragraph";
import { Quote } from "./Quote";

interface BlocksProps {
  blocks: ExtendedBlockObjectResponse[];
}

export function Blocks({ blocks }: BlocksProps) {
  return blocks.map((block) => {
    switch (block.type) {
      case "bulleted_list":
        return <BulletedList block={block} />;
      case "bulleted_list_item":
        return <ListItem block={block} />;
      case "callout":
        return <Callout block={block} />;
      case "code":
        return <Code block={block} />;
      case "divider":
        return <Divider />;
      case "heading_1":
        return <Heading1 block={block} />;
      case "heading_2":
        return <Heading2 block={block} />;
      case "heading_3":
        return <Heading3 block={block} />;
      case "image":
        return <Image block={block} />;
      case "numbered_list":
        return <NumberedList block={block} />;
      case "numbered_list_item":
        return <ListItem block={block} />;
      case "paragraph":
        return <Paragraph block={block} />;
      case "quote":
        return <Quote block={block} />;
      default:
        return null;
    }
  });
}
