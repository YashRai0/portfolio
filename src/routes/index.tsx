import React, { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "../integrations/supabase/client";
import BootScreen from "../components/BootScreen";
import Cursor from "../components/Cursor";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ChatWidget from "../components/ChatWidget";

import { 
  mockSiteContent, 
  mockProjects, 
  mockSkills, 
  mockJourney 
} from "../lib/mockData";

export const Route = createFileRoute("/")({
  component: PortfolioHome
});

function PortfolioHome() {
  const [siteContent, setSiteContent] = useState(mockSiteContent);
  const [projects, setProjects] = useState<any[]>(mockProjects);
  const [skills, setSkills] = useState<any[]>(mockSkills);
  const [journey, setJourney] = useState<any[]>(mockJourney);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contentRes, projRes, skillsRes, journeyRes] = await Promise.all([
          supabase.from("site_content").select("*").eq("id", "main").maybeSingle(),
          supabase.from("projects").select("*").order("position"),
          supabase.from("skills").select("*").order("position"),
          supabase.from("journey").select("*").order("position")
        ]);

        if (contentRes.data) {
          setSiteContent(contentRes.data);
        }
        if (projRes.data && projRes.data.length > 0) {
          setProjects(projRes.data);
        }
        if (skillsRes.data && skillsRes.data.length > 0) {
          setSkills(skillsRes.data);
        }
        if (journeyRes.data && journeyRes.data.length > 0) {
          setJourney(journeyRes.data);
        }
      } catch (err) {
        console.warn("Could not query Supabase database. Falling back to local offline mock data.");
      }
    };

    fetchData();
  }, []);

  // Set up reveal animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [projects, skills, journey]);

  // Derive checkable project count statistics dynamically
  const completedCount = projects.filter((p) => p.status === "completed").length;
  const inProgressCount = projects.filter((p) => p.status === "in_progress").length;
  const buildingBadgeProject = projects.find((p) => p.status === "in_progress")?.title || "Resume Optimizer";

  return (
    <>
      <a href="#about" className="skip-link font-mono text-xs no-underline">
        Skip to main content
      </a>

      <BootScreen />
      <Cursor />

      <main>
        {/* Hero Section */}
        <Hero 
          heroName={siteContent.hero_name} 
          heroTagline={siteContent.hero_tagline} 
          buildingProjectName={buildingBadgeProject}
        />

        {/* About Section */}
        <section id="about" className="py-20 px-6 md:px-16">
          <p className="section-label reveal">// 01 — About</p>
          <h2 className="section-title reveal text-white">
            Turning <span className="accent">ideas</span> into <br />real products
          </h2>
          <div className="about-grid">
            <div className="about-text reveal select-text">
              <p className="text-white/60 leading-relaxed mb-4">
                I'm <strong>Yash Rai</strong>, a <strong>BCA student at United Institute of Management, FUGS</strong>, currently in my 5th semester. I build full-stack web apps with a focus on AI-powered products that are actually useful.
              </p>
              <p className="text-white/60 leading-relaxed mb-4">
                I'm drawn to the intersection of <strong>design and engineering</strong> — creating interfaces that feel alive. Currently exploring AI APIs, rapid prototyping, and building products that scale.
              </p>
              <p className="text-white/60 leading-relaxed">
                When I'm not coding, I'm learning OS internals, debugging algorithms, or crafting LinkedIn posts about what I've built.
              </p>
            </div>
            {/* 
              ACCESSIBILITY TIP: To add a profile photo or visual avatar in the future, 
              you can insert an image element here. Always provide a descriptive alt 
              attribute for screen readers, for example:
              
              <div className="about-avatar reveal flex justify-center items-center">
                <img 
                  src="/assets/yash-avatar.jpg" 
                  alt="Yash Rai - React Developer and BCA student at UIM" 
                  className="w-48 h-48 rounded-full border-2 border-[var(--cyan)]/40 object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            */}
            <div className="about-stats reveal">
              <div className="stat-card">
                <div className="stat-number">{projects.length}</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-card">
                <div className="stat-number text-sm md:text-base">
                  <span className="text-[var(--cyan)]">{completedCount}</span> Shipped, <span className="text-[var(--purple)]">{inProgressCount}</span> Building
                </div>
                <div className="stat-label">Project Status</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{siteContent.stats?.tech_stacks || "3+"}</div>
                <div className="stat-label">Tech Stacks</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{siteContent.stats?.semester || "5th"}</div>
                <div className="stat-label">BCA Semester</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 md:px-16">
          <p className="section-label reveal">// 02 — Skills</p>
          <h2 className="section-title reveal text-white">
            My <span className="accent">tech</span> stack
          </h2>
          <div className="skills-grid">
            {skills.map((category) => (
              <div key={category.id} className="skill-category reveal">
                <div className="skill-category-icon select-none">{category.icon}</div>
                <h3 className="text-white select-none">{category.category}</h3>
                <div className="skill-pills">
                  {(category.skills || []).map((skill: string) => (
                    <span 
                      key={skill} 
                      className={`skill-pill select-all ${category.accent ? "cyan" : ""}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Section */}
        <section id="github" className="py-20 px-6 md:px-16">
          <p className="section-label reveal">// 03 — Code</p>
          <h2 className="section-title reveal text-white">
            Find me on <span className="accent">GitHub</span>
          </h2>
          <div className="gh-cta-card reveal">
            <div className="gh-cta-left">
              <div className="gh-cta-avatar select-none">YR</div>
              <div>
                <h3 className="text-white">@YashRai0</h3>
                <p className="text-[var(--muted)] text-sm">
                  Every repo, commit, and project — check it out directly. No filters, no fluff.
                </p>
              </div>
            </div>
            <a 
              href="https://github.com/YashRai0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary no-underline text-center"
            >
              View Profile ↗
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="projects-header">
            <p className="section-label reveal">// 04 — Projects</p>
            <h2 className="section-title reveal text-white">
              Things I've <span className="accent">built</span>
            </h2>
          </div>
          <div className="projects-scroll">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Timeline / Journey Section */}
        <section id="timeline" className="py-20 px-6 md:px-16">
          <p className="section-label reveal">// 05 — Journey</p>
          <h2 className="section-title reveal text-white">
            My <span className="accent">path</span> so far
          </h2>
          <div className="timeline">
            {journey.map((item) => (
              <div key={item.id} className="timeline-item reveal visible">
                <div className="timeline-dot" />
                <div className="timeline-date">{item.date_range}</div>
                <h3 className="timeline-title text-white">{item.title}</h3>
                <p className="timeline-sub select-text">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 md:px-16 relative">
          <div className="contact-glow" />
          <p className="section-label reveal">// 06 — Contact</p>
          <h2 className="section-title reveal text-white">
            Let's <span className="accent">build</span> something <br />together
          </h2>
          <div className="contact-card reveal">
            <p className="text-[var(--muted)] text-sm mb-6 leading-relaxed">
              Open to internships, collaborations, freelance work, or just geeking out over AI and tech.
            </p>
            <a href="mailto:yashrai6635@gmail.com" className="contact-email select-all">
              yashrai6635@gmail.com
            </a>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/yash-rai-1a218433b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                title="LinkedIn"
                aria-label="Yash Rai's LinkedIn profile"
              >
                in
              </a>
              <a 
                href="https://github.com/YashRai0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                title="GitHub"
                aria-label="Yash Rai's GitHub profile"
              >
                gh
              </a>
              <a 
                href="#" 
                className="social-link" 
                title="Twitter/X"
                aria-label="Yash Rai's Twitter profile"
              >
                𝕏
              </a>
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />
    </>
  );
}
