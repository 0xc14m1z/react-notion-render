import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { SyntaxHighlighter } from "./SyntaxHighlighter";

interface CodeProps {
  block: CodeBlockObjectResponse;
}

export function Code({ block }: CodeProps) {
  return (
    <div data-code>
      {block.code.rich_text.map(({ plain_text }, index) => (
        <SyntaxHighlighter
          key={index}
          code={plain_text}
          language={block.code.language}
        />
      ))}
    </div>
  );
}
