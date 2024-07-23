import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type BulletedListBlock = {
  type: "bulleted_list";
  bulleted_list: {
    items: BulletedListItemBlockObjectResponse[];
  };
};
