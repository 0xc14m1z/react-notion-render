import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { BulletedListBlock } from "./BulletedListBlock";
import { NumberedListBlock } from "./NumberedListBlock";

export type ExtendedBlockObjectResponse =
  | BlockObjectResponse
  | BulletedListBlock
  | NumberedListBlock;
