import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const getPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), "src/data/blog");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
      };
    })
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));

  return posts;
};

export default function Blog() {
  const posts = getPosts();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 py-16">
        <section className="space-y-4">
          <h1 className="text-3xl font-normal">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts on software engineering, lessons learned, and technical deep dives.
          </p>
        </section>

        <section className="grid gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </section>
      </div>
    </Layout>
  );
} 