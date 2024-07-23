import type { PropsWithChildren, ReactNode } from "react";

export function PlainText({ children }: PropsWithChildren) {
  if (typeof children !== "string")
    throw new Error("PlainText accepts only strings as children.");

  const parts = children.split("\n");

  let output: ReactNode[] = [];
  for (let index = 0; index < parts.length; index++) {
    output.push(parts[index]);
    if (index !== parts.length - 1) output.push(<br />);
  }

  return output;
}
