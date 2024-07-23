import { Blocks } from "./Blocks";
import type { NumberedListBlock } from "./NumberedListBlock";

interface NumberedListProps {
  block: NumberedListBlock;
}

export function NumberedList({ block }: NumberedListProps) {
  return (
    <ol>
      <Blocks blocks={block.numbered_list.items} />
    </ol>
  );
}
