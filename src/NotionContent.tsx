import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Blocks } from "./Blocks";
import { groupListItems } from "./groupListItems";

interface NotionContentProps {
  blocks: BlockObjectResponse[];
}

export function NotionContent({ blocks }: NotionContentProps) {
  return <Blocks blocks={groupListItems(blocks)} />;
}
