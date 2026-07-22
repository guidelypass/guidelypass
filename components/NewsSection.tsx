import type { NewsArticle } from "@/lib/news";
import type { Dictionary } from "@/lib/i18n";

type Props = { articles: NewsArticle[]; dict: Dictionary };

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const h = Math.floor(diff / 3600000);
  if (h < 1) return "agora";
  if (h < 24) return `${h}h atrás`;
  return `${Math.floor(h / 24)}d atrás`;
}

export default function NewsSection({ articles, dict }: Props) {
  if (!articles.length) return null;

  return (
    <section className="border-t border-gray-100 bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-5 sm:mb-8">
          <h2 className="text-lg font-semibold text-ink sm:text-3xl">{dict.home.newsTitle}</h2>
          <p className="mt-0.5 text-xs text-gray-500 sm:mt-1 sm:text-base">{dict.home.newsSubtitle}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {article.image && (
                <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-4">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-brand-500">
                  {article.source.name} · {timeAgo(article.publishedAt)}
                </p>
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-ink group-hover:text-brand-600">
                  {article.title}
                </h3>
                {article.description && (
                  <p className="mt-1.5 line-clamp-2 text-xs text-gray-500">{article.description}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
