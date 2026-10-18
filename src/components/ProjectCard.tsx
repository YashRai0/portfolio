import { Link } from '@tanstack/react-router';
import type { Project } from '../lib/projects';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const hasLive = !!project.liveUrl && project.liveUrl !== '';
  const hasGithub = !!project.githubUrl && project.githubUrl !== '';

  return (
    <article className="project-card-editorial">
      {/* Project Thumbnail / Screenshot */}
      <div className="project-card-thumb">
        <img
          src={project.screenshot || '/screenshots/2ambuddy.svg'}
          alt={`${project.title} application interface screenshot`}
          loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div className="project-card-body">
        <span className="project-card-cat">{project.category}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        {/* Tech tags */}
        <div className="project-card-tech">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="project-card-links">
          <Link to={project.caseStudyUrl} className="case-study-link font-semibold">
            View Case Study <ArrowRight size={15} />
          </Link>

          <div className="flex items-center gap-3">
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="out-link flex items-center gap-1"
                aria-label={`${project.title} GitHub repository`}
              >
                <GithubIcon size={15} /> Code
              </a>
            )}
            {hasLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="out-link flex items-center gap-1 hover:text-[var(--accent)]"
                aria-label={`${project.title} Live Demo`}
              >
                <ExternalLink size={15} /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
