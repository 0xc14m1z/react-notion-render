import { cloneElement } from "react";
import Link from "next/link";

interface LinkPreviewProps {
  url: string;
}

const GITHUB_REPO = /github.com\/.+?\/(.+?)$/;

export function LinkPreview({ url }: LinkPreviewProps) {
  let output = <Link href={url}>{url}</Link>;

  if (GITHUB_REPO.test(url)) {
    const [_, repo] = url.match(GITHUB_REPO)!;
    const attributes = { "data-github": true, target: "_blank" };
    output = cloneElement(output, attributes, repo);
  }

  return output;
}
