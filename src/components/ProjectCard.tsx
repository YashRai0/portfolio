import React from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  live_url?: string;
  github_url?: string;
  status: string; // 'completed' | 'in_progress' | 'concept'
  position: number;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isTopProject = project.title === "Resume Optimizer" || project.title === "README Auto-Generator";

  const getStatusLabel = (status: string) => {
    if (status === "in_progress") return "In Progress";
    if (status === "completed") return "Completed";
    if (status === "concept") return "Concept";
    return status;
  };

  const getStatusClass = (status: string) => {
    if (status === "in_progress") return "in_progress";
    if (status === "completed") return "completed";
    if (status === "concept") return "concept";
    return "";
  };

  const getCaseStudy = (title: string) => {
    if (title === "Resume Optimizer") {
      return (
        <div className="mt-4 p-3 rounded bg-white/5 border border-white/5 text-xs text-[var(--muted)] leading-relaxed select-text">
          <p className="mb-2"><strong>Problem:</strong> Classmates kept tailoring resumes by hand for every job post, which was slow and inconsistent.</p>
          <p className="mb-2"><strong>Approach:</strong> I built a tool that takes a resume and a job description and returns an ATS score plus specific edits, using Claude for the analysis and Razorpay for a pay-per-use tier.</p>
          <p className="mb-2"><strong>Decision:</strong> Keeping suggestions specific instead of generic was hard — I ended up structuring the prompt around extracted JD keywords rather than freeform review, which cut vague output substantially.</p>
          <p><strong>Next:</strong> Add PDF rendering and parsing for Docx formats.</p>
        </div>
      );
    }
    if (title === "README Auto-Generator") {
      return (
        <div className="mt-4 p-3 rounded bg-white/5 border border-white/5 text-xs text-[var(--muted)] leading-relaxed select-text">
          <p className="mb-2"><strong>Problem:</strong> Writing detailed READMEs for new projects is tedious, leading to empty repos.</p>
          <p className="mb-2"><strong>Approach:</strong> Built a parser that scans project code or descriptions to structure a setup guide, API docs, and dynamic badges automatically using Claude API.</p>
          <p className="mb-2"><strong>Decision:</strong> I chose a client-side parser to avoid uploading entire code bases to a backend, minimizing infrastructure overhead.</p>
          <p><strong>Next:</strong> Add direct Git commit hooks integration.</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`project-card select-none reveal ${isTopProject ? 'ring-1 ring-[var(--cyan)]/25' : ''}`}>
      <span className={`project-badge ${getStatusClass(project.status)}`}>
        {getStatusLabel(project.status)}
      </span>
      <div className="project-number">
        {String(index + 1).padStart(2, "0")} — {isTopProject ? "Featured Project" : "Project"}
      </div>
      <h3 className="project-title text-white">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      {isTopProject && getCaseStudy(project.title)}

      <div className="project-stack mt-4">
        {(project.stack || []).map((tag) => (
          <span key={tag} className="stack-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-links mt-6">
        {project.github_url && project.github_url !== "" && project.github_url !== "#" && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub
          </a>
        )}
        {project.live_url && project.live_url !== "" && project.live_url !== "#" && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link border-[var(--cyan)] text-[var(--cyan)]"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
