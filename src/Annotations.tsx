import type { PropsWithChildren, ReactNode } from "react";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

interface AnnotationsProps {
  annotations: RichTextItemResponse["annotations"];
}

export function Annotations({
  annotations,
  children,
}: PropsWithChildren<AnnotationsProps>) {
  if (!children) return null;

  const { strikethrough, underline, italic, bold, code, color } = annotations;
  let output: ReactNode = children;

  if (strikethrough) output = <del>{output}</del>;
  if (underline) output = <u>{output}</u>;
  if (italic) output = <em>{output}</em>;
  if (bold) output = <strong>{output}</strong>;
  if (color !== "default") output = <mark data-color={color}>{output}</mark>;
  if (code) output = <code>{output}</code>;

  return output;
}
