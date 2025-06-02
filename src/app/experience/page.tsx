import Layout from "@/components/Layout";

export default function Experience() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 py-16">
        <section className="space-y-4">
          <h1 className="text-3xl font-normal">Experience</h1>
          <p className="text-muted-foreground">
            My professional journey in software engineering.
          </p>
        </section>

        <section className="space-y-6">
          <div className="border-l-2 border-border pl-6 space-y-4">
            <div>
              <h3 className="text-lg font-normal">DefendAir Technologies Pvt. Ltd.</h3>
              <p className="text-sm text-muted-foreground">
                Software Engineer Intern • Feb 2025 – Present
              </p>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="relative before:content-['•'] before:absolute before:-left-4">
                Built object detection AI pipelines
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-4">
                Integrated backend inference modules
              </li>
              <li className="relative before:content-['•'] before:absolute before:-left-4">
                Deployed models in drone-based analytics systems
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
} 