import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type NumberedListBlock = {
  type: "numbered_list";
  numbered_list: {
    items: NumberedListItemBlockObjectResponse[];
  };
};
