import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "CalcSprint",
    techStack: ["Go", "PostgreSQL", "Redis"],
    description: "WebSocket quiz game with real-time gameplay and OAuth",
    githubLink: "#"
  },
  {
    title: "Clustory",
    techStack: ["React", "Kubernetes"],
    description: "Kubernetes UI with pod logs and metrics via kubectl proxy",
    githubLink: "#"
  },
  {
    title: "Muzzer",
    techStack: ["Node.js", "MongoDB", "React"],
    description: "Music voting app with live leaderboard",
    githubLink: "#"
  }
];

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 py-16">
        <section className="space-y-4">
          <h1 className="text-3xl font-normal">Projects</h1>
          <p className="text-muted-foreground">
            A selection of projects I&apos;ve built, focusing on backend systems and cloud-native tools.
          </p>
        </section>

        <section className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>
      </div>
    </Layout>
  );
} 