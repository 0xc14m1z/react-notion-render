import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./RichText";

interface CalloutProps {
  block: CalloutBlockObjectResponse;
}

export function Callout({ block }: CalloutProps) {
  const { color, rich_text } = block.callout;
  return (
    <div role="alert" data-color={color}>
      <p>
        <RichText blocks={rich_text} />
      </p>
    </div>
  );
}
