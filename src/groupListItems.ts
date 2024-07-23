import type {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { BulletedListBlock } from "./BulletedListBlock";
import type { ExtendedBlockObjectResponse } from "./ExtendedBlockObjectResponse";
import type { NumberedListBlock } from "./NumberedListBlock";

type Grouping = false | BulletedListBlock["type"] | NumberedListBlock["type"];
type ListItemBlock =
  | BulletedListItemBlockObjectResponse
  | NumberedListItemBlockObjectResponse;

export function groupListItems(
  blocks: ExtendedBlockObjectResponse[]
): ExtendedBlockObjectResponse[] {
  let output: ExtendedBlockObjectResponse[] = [];
  let grouping: Grouping = false;
  let listItems: ListItemBlock[] = [];

  for (const block of blocks) {
    switch (block.type) {
      case "bulleted_list_item": {
        if (grouping !== "bulleted_list") commitPreviousList();
        grouping = "bulleted_list";
        listItems.push(block);
        break;
      }
      case "numbered_list_item": {
        if (grouping !== "numbered_list") commitPreviousList();
        grouping = "numbered_list";
        listItems.push(block);
        break;
      }
      default: {
        commitPreviousList();
        output.push(block);
        break;
      }
    }
  }

  function commitPreviousList() {
    if (!grouping) return;

    output.push({
      type: grouping,
      [grouping]: {
        items: [...listItems],
      },
    } as ExtendedBlockObjectResponse);

    listItems = [];
    grouping = false;
  }

  return output;
}
