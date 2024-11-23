import Link from "next/link";

const articles = {
  "article-1": "ARTICOLO 1: lorem...",
  "article-2": "ARTICOLO 2: lorem...",
  "article-3": "ARTICOLO 3: lorem...",
};

export default function ArticlePage({ params }) {
  const articleSlug = params["article-slug"];
  const content = articles[articleSlug];
  return (
    <div>
      <div>{articleSlug}</div>
      <div>{content}</div>
      <Link href="/blog">Torna alla lista</Link>
    </div>
  );
}
