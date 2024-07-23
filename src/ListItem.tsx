import type {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";

interface ListItemProps {
  block:
    | BulletedListItemBlockObjectResponse
    | NumberedListItemBlockObjectResponse;
}

export function ListItem({ block }: ListItemProps) {
  const item =
    "bulleted_list_item" in block
      ? block.bulleted_list_item
      : block.numbered_list_item;
  return (
    <li>
      <RichText blocks={item.rich_text} />
    </li>
  );
}
