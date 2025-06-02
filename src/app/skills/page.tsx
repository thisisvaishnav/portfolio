import Layout from "@/components/Layout";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Go", "JavaScript", "TypeScript", "Java", "C++"]
  },
  {
    category: "Frameworks & Tools",
    skills: ["Next.js", "Node.js", "Redis", "Redux", "Docker"]
  },
  {
    category: "DevOps",
    skills: ["Git", "WebSockets", "REST APIs"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB"]
  },
  {
    category: "Miscellaneous",
    skills: ["Linux CLI", "OOP"]
  }
];

export default function Skills() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 py-16">
        <section className="space-y-4">
          <h1 className="text-3xl font-normal">Skills</h1>
          <p className="text-muted-foreground">
            Technologies and tools I work with to build robust software solutions.
          </p>
        </section>

        <section className="grid gap-6">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-3">
              <h3 className="text-lg font-normal">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
} 