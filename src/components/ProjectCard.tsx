interface ProjectCardProps {
  title: string;
  techStack: string[];
  description: string;
  githubLink?: string;
}

const ProjectCard = ({ title, techStack, description, githubLink }: ProjectCardProps) => {
  return (
    <div className="border border-border rounded-lg p-6 hover:bg-accent/50 transition-colors">
      <div className="space-y-3">
        <h3 className="text-lg font-normal">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`View ${title} on GitHub`}
          >
            View on GitHub
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
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 