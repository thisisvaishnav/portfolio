import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-8 py-16">
        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-4xl font-normal">Vaishnav Verma</h1>
          <p className="text-xl text-muted-foreground">Software Engineer</p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Software engineer building backend systems, cloud-native tools, and minimalist UIs.
          </p>
        </section>

        {/* Contact Links */}
        <section className="space-y-2">
          <h2 className="text-lg font-normal mb-4">Connect</h2>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:vaishnavxwork@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email Vaishnav Verma"
            >
              vaishnavxwork@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/vaishnav-verma-2055b831b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
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
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              aria-label="GitHub Profile"
            >
              GitHub
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
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="space-y-2">
          <h2 className="text-lg font-normal mb-4">Explore</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/projects"
              className="p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              aria-label="View Projects"
            >
              <h3 className="font-normal mb-1">Projects</h3>
              <p className="text-sm text-muted-foreground">View my work</p>
            </Link>
            <Link
              href="/blog"
              className="p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              aria-label="Read Blog"
            >
              <h3 className="font-normal mb-1">Blog</h3>
              <p className="text-sm text-muted-foreground">Read my thoughts</p>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
