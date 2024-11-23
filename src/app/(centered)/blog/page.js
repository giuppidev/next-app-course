import Link from "next/link";

const articles = [
  {
    label: "Articolo 1",
    href: "/blog/article-1",
  },
  {
    label: "Articolo 2",
    href: "/blog/article-2",
  },
  {
    label: "Articolo 3",
    href: "/blog/article-3",
  },
];

export default function Blog() {
  return (
    <div>
      <h1 className="text-3xl">Blog articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.label}>
            <Link href={article.href}>{article.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
