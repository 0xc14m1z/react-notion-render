import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import { Annotations } from "./Annotations";
import { PlainText } from "./PlainText";

interface TextProps {
  plainText: string;
  annotations: RichTextItemResponse["annotations"];
  href: string | null;
}

export function Text({ plainText, annotations, href }: TextProps) {
  let output = <PlainText>{plainText}</PlainText>;
  output = <Annotations annotations={annotations}>{output}</Annotations>;
  if (href) output = <Link href={href}>{output}</Link>;
  return output;
}
