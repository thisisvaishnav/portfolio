import Layout from "@/components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/data/blog");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ""),
    }));
}

const getPost = async (slug: string) => {
  const postsDirectory = path.join(process.cwd(), "src/data/blog");
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    contentHtml,
  };
};

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <Layout>
      <article className="max-w-3xl mx-auto py-16">
        <header className="space-y-4 mb-8">
          <h1 className="text-3xl font-normal">{post.title}</h1>
          <p className="text-sm text-muted-foreground">{post.date}</p>
        </header>

        <div
          className="prose prose-neutral dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </Layout>
  );
} 