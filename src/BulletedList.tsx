import { Blocks } from "./Blocks";
import type { BulletedListBlock } from "./BulletedListBlock";

interface BulletedListProps {
  block: BulletedListBlock;
}

export function BulletedList({ block }: BulletedListProps) {
  return (
    <ul>
      <Blocks blocks={block.bulleted_list.items} />
    </ul>
  );
}
