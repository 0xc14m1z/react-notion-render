import { codeToHtml } from "shiki";

interface SyntaxHighlighterProps {
  code: string;
  language: string;
}

export async function SyntaxHighlighter({
  code,
  language,
}: SyntaxHighlighterProps) {
  const lang = language === "typescript" ? "tsx" : language;
  const theme = "min-light";
  const html = await codeToHtml(code, { lang, theme });
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
