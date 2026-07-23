-- ══ 1. ADMIN ALLOWLIST ══
CREATE TABLE IF NOT EXISTS public.admin_emails (
  email TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.admin_emails ENABLE ROW LEVEL SECURITY;

-- Insert Yash's admin email
INSERT INTO public.admin_emails (email) VALUES ('yashrai6635@gmail.com') ON CONFLICT DO NOTHING;

-- Helper function to check if the current user is an admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_emails
    WHERE lower(email) = lower(coalesce((auth.jwt() ->> 'email'), ''))
  );
$$;

-- ══ 2. SITE CONTENT TABLE ══
CREATE TABLE IF NOT EXISTS public.site_content (
  id TEXT PRIMARY KEY,
  hero_name TEXT,
  hero_tagline TEXT,
  about_text TEXT,
  stats JSONB,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read site content" ON public.site_content FOR SELECT USING (true);
CREATE POLICY "admin write site content" ON public.site_content FOR ALL TO authenticated
  USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Insert default site content
INSERT INTO public.site_content (id, hero_name, hero_tagline, about_text, stats)
VALUES (
  'main',
  'Yash Rai',
  'BCA student at United Institute of Management, FUGS. Building AI-powered web products with React, Node.js, and Claude API.',
  'I''m Yash Rai, a BCA student at United Institute of Management, FUGS, currently in my 5th semester. I build full-stack web apps with a focus on AI-powered products that are actually useful. I''m drawn to the intersection of design and engineering — creating interfaces that feel alive. Currently exploring AI APIs, rapid prototyping, and building products that scale. When I''m not coding, I''m learning OS internals, debugging algorithms, or crafting LinkedIn posts about what I''ve built.',
  '{"projects_built": "10+", "tech_stacks": "3+", "semester": "5th"}'::jsonb
) ON CONFLICT (id) DO UPDATE 
SET hero_name = EXCLUDED.hero_name,
    hero_tagline = EXCLUDED.hero_tagline,
    about_text = EXCLUDED.about_text,
    stats = EXCLUDED.stats;

-- ══ 3. PROJECTS TABLE ══
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  stack TEXT[],
  github_url TEXT,
  live_url TEXT,
  status TEXT DEFAULT 'in_progress', -- 'completed' | 'in_progress' | 'concept'
  position INT DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "admin write projects" ON public.projects FOR ALL TO authenticated
  USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Insert projects seed data
INSERT INTO public.projects (title, description, stack, live_url, github_url, status, position)
VALUES
('Resume Optimizer', 'AI-powered resume analyzer built with Claude API. Upload a resume, paste a JD, and get instant optimization suggestions, ATS score, and tailored improvements.', ARRAY['React', 'Node.js', 'Claude API', 'Stripe', 'Clerk'], 'https://resumeai4u.vercel.app/', 'https://github.com/YashRai0/resume-optimizer', 'completed', 1),
('README Auto-Generator', 'Paste your project code or describe it — the app generates a production-ready README with badges, setup instructions, and API docs using Claude AI.', ARRAY['React', 'Tailwind', 'Claude API', 'Lovable'], '#', '#', 'completed', 2),
('AI MCQ Generator', 'Built for BCA exam prep — paste any topic and instantly generate MCQ questions with explanations. Used by classmates before OS & SE exams.', ARRAY['React', 'Anthropic API', 'Vite'], '#', '#', 'concept', 3),
('Sales Flow Automation', 'Power Automate flow that reads Excel data, filters based on criteria, formats an HTML table, and emails a daily sales report — zero manual effort.', ARRAY['Power Automate', 'SharePoint', 'Excel'], '#', '', 'completed', 4),
('Python Study Guide', 'Interactive React app covering NumPy, Pandas, Matplotlib, Scikit-learn for BCA Sem V exam — with live code examples and a built-in quiz.', ARRAY['React', 'Tailwind'], '#', '', 'completed', 5);

-- ══ 4. SKILLS TABLE ══
CREATE TABLE IF NOT EXISTS public.skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  icon TEXT,
  skills TEXT[],
  position INT DEFAULT 0,
  accent BOOLEAN DEFAULT false,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read skills" ON public.skills FOR SELECT USING (true);
CREATE POLICY "admin write skills" ON public.skills FOR ALL TO authenticated
  USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Insert skills seed data
INSERT INTO public.skills (category, icon, skills, position, accent)
VALUES
('Frontend', '⚛️', ARRAY['React', 'HTML5', 'CSS3', 'Tailwind', 'JavaScript'], 1, true),
('Languages', '🐍', ARRAY['Python', 'JavaScript', 'C', 'SQL'], 2, false),
('AI / ML', '🤖', ARRAY['Claude API', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'], 3, true),
('Tools & Platforms', '🛠️', ARRAY['Lovable', 'Cursor', 'Bolt', 'Git', 'VS Code', 'Stripe', 'Clerk'], 4, false),
('Backend', '⚙️', ARRAY['Node.js', 'Express', 'REST APIs'], 5, false),
('CS Fundamentals', '🎓', ARRAY['OS', 'DBMS', 'Software Engg.', 'DSA'], 6, false);

-- ══ 5. JOURNEY TABLE ══
CREATE TABLE IF NOT EXISTS public.journey (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date_range TEXT NOT NULL,
  title TEXT NOT NULL,
  sub TEXT,
  position INT DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.journey ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read journey" ON public.journey FOR SELECT USING (true);
CREATE POLICY "admin write journey" ON public.journey FOR ALL TO authenticated
  USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Insert journey seed data
INSERT INTO public.journey (date_range, title, sub, position)
VALUES
('2026 — Present', 'Building AI-Powered Products', 'Resume Optimizer, README Generator · Claude API · Stripe · Clerk', 1),
('2025', 'BCA · 5th Semester', 'Python, ML Libraries, Power Automate · IBM SkillsBuild GenAI Badge', 2),
('2024', 'Deep-Dived into Web Dev', 'React, Node.js, APIs · Started rapid prototyping with Lovable & Cursor', 3),
('2023', 'BCA · 1st Year · United Institute of Management, FUGS', 'C, HTML, CSS, Python fundamentals · First programs, first bugs 🐛', 4);

-- ══ 6. AUTOMATED DYNAMIC STATS TRIGGERS ══

-- Force calculation function for site_content stats JSON
CREATE OR REPLACE FUNCTION public.force_site_content_stats()
RETURNS TRIGGER AS $$
DECLARE
  total_count INT;
  completed_count INT;
  in_progress_count INT;
BEGIN
  -- Compute correct dynamic counts
  SELECT count(*) INTO total_count FROM public.projects;
  SELECT count(*) FILTER (WHERE status = 'completed') INTO completed_count FROM public.projects;
  SELECT count(*) FILTER (WHERE status = 'in_progress') INTO in_progress_count FROM public.projects;

  IF NEW.stats IS NULL THEN
    NEW.stats := '{}'::jsonb;
  END IF;

  -- Overwrite values with correct live calculations
  NEW.stats := jsonb_set(NEW.stats, '{projects_built}', to_jsonb(total_count::text));
  NEW.stats := jsonb_set(NEW.stats, '{projects_completed}', to_jsonb(completed_count::text));
  NEW.stats := jsonb_set(NEW.stats, '{projects_in_progress}', to_jsonb(in_progress_count::text));

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Site content BEFORE trigger
CREATE OR REPLACE TRIGGER trigger_force_site_content_stats
BEFORE INSERT OR UPDATE ON public.site_content
FOR EACH ROW
EXECUTE FUNCTION public.force_site_content_stats();

-- Trigger update helper function when projects change
CREATE OR REPLACE FUNCTION public.update_site_stats()
RETURNS TRIGGER AS $$
BEGIN
  -- Touch site_content to trigger its BEFORE update handler
  UPDATE public.site_content
  SET updated_at = now()
  WHERE id = 'main';
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Projects AFTER trigger
CREATE OR REPLACE TRIGGER trigger_update_site_stats
AFTER INSERT OR UPDATE OR DELETE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_site_stats();

-- Seed initial site_content stats trigger computation
UPDATE public.site_content SET updated_at = now() WHERE id = 'main';
