import type { PropsWithChildren } from "react";
import NextLink from "next/link";
import { NotionLink } from "./NotionLink";

interface LinkProps {
  href: string;
}

const RELATIVE_NOTION_LINK = /\/([a-f0-9]{32})$/;

export function Link({ href, children }: PropsWithChildren<LinkProps>) {
  if (RELATIVE_NOTION_LINK.test(href)) {
    const [_, pageId] = href.match(RELATIVE_NOTION_LINK)!;
    return <NotionLink pageId={pageId}>{children}</NotionLink>;
  }

  return (
    <NextLink href={href} target="_blank">
      {children}
    </NextLink>
  );
}
