import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const BlogCard = ({ title, date, excerpt, slug }: BlogCardProps) => {
  return (
    <article className="border border-border rounded-lg p-6 hover:bg-accent/50 transition-colors">
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="text-lg font-normal">
            <Link href={`/blog/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label={`Read more about ${title}`}
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard; 