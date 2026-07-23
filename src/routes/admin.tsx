import React, { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "../integrations/supabase/client";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Toaster, toast } from "sonner";
import Cursor from "../components/Cursor";

export const Route = createFileRoute("/admin")({
  component: AdminApp,
  head: () => ({
    meta: [
      { name: "robots", content: "noindex,nofollow" }
    ],
    title: "Admin Dashboard"
  })
});

function AdminApp() {
  const [session, setSession] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // Dashboard content editing states
  const [siteContent, setSiteContent] = useState<any>({
    hero_name: "",
    hero_tagline: "",
    about_text: "",
    stats: { tech_stacks: "", semester: "" }
  });
  const [projects, setProjects] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"content" | "projects">("content");

  // Project form states (for Add/Edit modal)
  const [editingProject, setEditingProject] = useState<any>(null);
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);
  const [projTitle, setProjTitle] = useState("");
  const [projDesc, setProjDesc] = useState("");
  const [projStack, setProjStack] = useState("");
  const [projGithub, setProjGithub] = useState("");
  const [projLive, setProjLive] = useState("");
  const [projStatus, setProjStatus] = useState("in_progress");
  const [projPosition, setProjPosition] = useState(0);

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) checkAdminStatus();
      else setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) checkAdminStatus();
      else {
        setIsAdmin(false);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminStatus = async () => {
    try {
      // Call the is_admin SECURITY DEFINER RPC function
      const { data, error } = await supabase.rpc("is_admin");

      if (data === true) {
        setIsAdmin(true);
        loadDashboardData();
      } else {
        setIsAdmin(false);
        // Only trigger access error toast if user is signed in but is not admin
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          toast.error("Access Denied: You are not authorized as an administrator.");
        }
      }
    } catch (err) {
      console.error("Admin verification error:", err);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  const loadDashboardData = async () => {
    try {
      const [contentRes, projRes] = await Promise.all([
        supabase.from("site_content").select("*").eq("id", "main").maybeSingle(),
        supabase.from("projects").select("*").order("position")
      ]);

      if (contentRes.data) {
        setSiteContent(contentRes.data);
      }
      if (projRes.data) {
        setProjects(projRes.data);
      }
    } catch (err) {
      toast.error("Failed to load portfolio CMS content.");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    try {
      // Clean sign-in call. DO NOT log the response or token variables!
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Authentication successful!");
      }
    } catch (err) {
      toast.error("An unexpected error occurred during login.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully.");
  };

  // ── SAVE SITE CONTENT ──
  const handleSaveSiteContent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from("site_content")
        .update({
          hero_name: siteContent.hero_name,
          hero_tagline: siteContent.hero_tagline,
          about_text: siteContent.about_text,
          stats: siteContent.stats
        })
        .eq("id", "main");

      if (error) throw error;
      toast.success("Site content updated successfully!");
      loadDashboardData();
    } catch (err: any) {
      toast.error(`Update failed: ${err.message}`);
    }
  };

  // ── SAVE PROJECT CRUD ──
  const openProjectModal = (proj: any = null) => {
    if (proj) {
      setEditingProject(proj);
      setProjTitle(proj.title);
      setProjDesc(proj.description || "");
      setProjStack(proj.stack ? proj.stack.join(", ") : "");
      setProjGithub(proj.github_url || "");
      setProjLive(proj.live_url || "");
      setProjStatus(proj.status || "in_progress");
      setProjPosition(proj.position || 0);
    } else {
      setEditingProject(null);
      setProjTitle("");
      setProjDesc("");
      setProjStack("");
      setProjGithub("");
      setProjLive("");
      setProjStatus("in_progress");
      setProjPosition(0);
    }
    setIsProjectFormOpen(true);
  };

  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: projTitle,
      description: projDesc,
      stack: projStack.split(",").map((s) => s.trim()).filter(Boolean),
      github_url: projGithub,
      live_url: projLive,
      status: projStatus,
      position: projPosition
    };

    try {
      if (editingProject) {
        // Edit Mode
        const { error } = await supabase
          .from("projects")
          .update(payload)
          .eq("id", editingProject.id);
        if (error) throw error;
        toast.success("Project updated successfully!");
      } else {
        // Add Mode
        const { error } = await supabase
          .from("projects")
          .insert([payload]);
        if (error) throw error;
        toast.success("New project created successfully!");
      }
      setIsProjectFormOpen(false);
      loadDashboardData();
    } catch (err: any) {
      toast.error(`Operation failed: ${err.message}`);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", id);

      if (error) throw error;
      toast.success("Project deleted successfully!");
      loadDashboardData();
    } catch (err: any) {
      toast.error(`Delete failed: ${err.message}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050A18] text-[var(--cyan)] font-mono">
        LOADING SYS CORE...
      </div>
    );
  }

  // Render Login Panel if unauthenticated or not verified admin
  if (!session || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050A18] px-4">
        <Cursor />
        <Toaster theme="dark" position="bottom-left" />
        <div className="w-full max-w-md bg-white/5 border border-[var(--cyan)]/20 rounded-2xl p-8 backdrop-blur-md">
          <h2 className="text-2xl font-mono text-center text-white mb-8">
            &lt;<span className="text-[var(--cyan)]">Yash</span>.Admin /&gt;
          </h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono text-[var(--muted)] block">EMAIL</label>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="bg-white/5 border-white/10 text-white rounded focus:border-[var(--cyan)] focus:ring-0"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-[var(--muted)] block">PASSWORD</label>
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-white/5 border-white/10 text-white rounded focus:border-[var(--cyan)] focus:ring-0"
              />
            </div>
            <Button 
              type="submit" 
              disabled={authLoading}
              className="w-full bg-gradient-to-r from-[var(--cyan)] to-[var(--purple)] text-slate-950 font-bold tracking-wider py-3 rounded"
            >
              {authLoading ? "AUTHENTICATING..." : "LOG IN"}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // Render Admin Dashboard
  return (
    <div className="min-h-screen bg-[#050A18] text-white pt-24 pb-16 px-6 md:px-16">
      <Cursor />
      <Toaster theme="dark" position="bottom-left" />

      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-8">
          <div>
            <h1 className="text-2xl font-mono tracking-wide text-[var(--cyan)]">Admin Panel</h1>
            <p className="text-xs text-[var(--muted)] mt-1">Gated portfolio CMS content administration</p>
          </div>
          <Button onClick={handleLogout} variant="destructive" className="font-mono text-xs px-4 py-2">
            LOGOUT
          </Button>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-4 border-b border-white/5 pb-2 mb-8">
          <button
            onClick={() => setActiveTab("content")}
            className={`font-mono text-sm pb-2 border-b-2 transition-colors ${
              activeTab === "content" ? "border-[var(--cyan)] text-[var(--cyan)]" : "border-transparent text-[var(--muted)]"
            }`}
          >
            SITE CONTENT
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`font-mono text-sm pb-2 border-b-2 transition-colors ${
              activeTab === "projects" ? "border-[var(--cyan)] text-[var(--cyan)]" : "border-transparent text-[var(--muted)]"
            }`}
          >
            PROJECTS ({projects.length})
          </button>
        </div>

        {/* Tab 1: Site Content Edit Form */}
        {activeTab === "content" && (
          <form onSubmit={handleSaveSiteContent} className="space-y-6 bg-white/5 border border-white/5 rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-[var(--muted)] block">HERO NAME</label>
                <Input
                  type="text"
                  value={siteContent.hero_name || ""}
                  onChange={(e) => setSiteContent({ ...siteContent, hero_name: e.target.value })}
                  className="bg-white/5 border-white/10 text-white rounded"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-[var(--muted)] block">TECH STACKS COUNT</label>
                <Input
                  type="text"
                  value={siteContent.stats?.tech_stacks || ""}
                  onChange={(e) => setSiteContent({
                    ...siteContent,
                    stats: { ...siteContent.stats, tech_stacks: e.target.value }
                  })}
                  className="bg-white/5 border-white/10 text-white rounded"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-[var(--muted)] block">HERO TAGLINE / META BIO</label>
              <Input
                type="text"
                value={siteContent.hero_tagline || ""}
                onChange={(e) => setSiteContent({ ...siteContent, hero_tagline: e.target.value })}
                className="bg-white/5 border-white/10 text-white rounded"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-[var(--muted)] block">ABOUT SUMMARY TEXT</label>
              <Textarea
                rows={5}
                value={siteContent.about_text || ""}
                onChange={(e) => setSiteContent({ ...siteContent, about_text: e.target.value })}
                className="bg-white/5 border-white/10 text-white rounded leading-relaxed"
              />
            </div>

            <Button type="submit" className="bg-[var(--cyan)] hover:bg-[var(--cyan)]/80 text-slate-950 font-bold px-6">
              SAVE CHANGES
            </Button>
          </form>
        )}

        {/* Tab 2: Projects List Grid with Actions */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-white">Manage Projects</h2>
              <Button onClick={() => openProjectModal()} className="bg-[var(--cyan)] text-slate-950 font-bold text-xs py-2 px-4 rounded">
                + Add Project
              </Button>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 font-mono text-xs text-[var(--cyan)]">
                    <th className="p-4 w-16">POS</th>
                    <th className="p-4">TITLE</th>
                    <th className="p-4">STATUS</th>
                    <th className="p-4">STACK</th>
                    <th className="p-4 text-right">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {projects.map((proj) => (
                    <tr key={proj.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-mono">{proj.position}</td>
                      <td className="p-4 font-semibold text-white">{proj.title}</td>
                      <td className="p-4">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-mono uppercase ${
                          proj.status === "completed" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25" :
                          proj.status === "in_progress" ? "bg-amber-500/10 text-amber-400 border border-amber-500/25" :
                          "bg-purple-500/10 text-purple-400 border border-purple-500/25"
                        }`}>
                          {proj.status}
                        </span>
                      </td>
                      <td className="p-4 text-xs text-[var(--muted)]">{proj.stack?.join(", ")}</td>
                      <td className="p-4 text-right space-x-2">
                        <button 
                          onClick={() => openProjectModal(proj)}
                          className="text-xs border border-[var(--cyan)]/30 text-[var(--cyan)] hover:bg-[var(--cyan)] hover:text-slate-950 px-3 py-1.5 rounded transition-all font-mono"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteProject(proj.id)}
                          className="text-xs border border-pink-500/30 text-pink-500 hover:bg-pink-500 hover:text-white px-3 py-1.5 rounded transition-all font-mono"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {projects.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-[var(--muted)] font-mono">
                        No projects loaded in dashboard database.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* PROJECT CRUD DIALOG FORM */}
      {isProjectFormOpen && (
        <div className="fixed inset-0 z-[2000] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#080F24] border border-white/10 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-mono text-white border-b border-white/5 pb-3 mb-4">
              {editingProject ? "Edit Project Details" : "Add New Project"}
            </h3>
            <form onSubmit={handleSaveProject} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-[var(--muted)] block">POSITION ORDER</label>
                  <Input
                    type="number"
                    required
                    value={projPosition}
                    onChange={(e) => setProjPosition(parseInt(e.target.value))}
                    className="bg-white/5 border-white/10 text-white rounded text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-[var(--muted)] block">STATUS</label>
                  <select
                    value={projStatus}
                    onChange={(e) => setProjStatus(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white rounded text-xs p-2 focus:border-[var(--cyan)] outline-none"
                  >
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="concept">Concept</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-[var(--muted)] block">PROJECT TITLE</label>
                <Input
                  type="text"
                  required
                  value={projTitle}
                  onChange={(e) => setProjTitle(e.target.value)}
                  placeholder="e.g., Resume Optimizer"
                  className="bg-white/5 border-white/10 text-white rounded text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-[var(--muted)] block">DESCRIPTION</label>
                <Textarea
                  rows={3}
                  required
                  value={projDesc}
                  onChange={(e) => setProjDesc(e.target.value)}
                  placeholder="Explain project context..."
                  className="bg-white/5 border-white/10 text-white rounded text-xs leading-relaxed"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-[var(--muted)] block">TECH STACK (comma separated)</label>
                <Input
                  type="text"
                  required
                  value={projStack}
                  onChange={(e) => setProjStack(e.target.value)}
                  placeholder="e.g., React, Tailwind, Claude API"
                  className="bg-white/5 border-white/10 text-white rounded text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-[var(--muted)] block">GITHUB URL</label>
                  <Input
                    type="text"
                    value={projGithub}
                    onChange={(e) => setProjGithub(e.target.value)}
                    placeholder="https://github.com/..."
                    className="bg-white/5 border-white/10 text-white rounded text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-[var(--muted)] block">LIVE URL</label>
                  <Input
                    type="text"
                    value={projLive}
                    onChange={(e) => setProjLive(e.target.value)}
                    placeholder="https://..."
                    className="bg-white/5 border-white/10 text-white rounded text-xs"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 border-t border-white/5 pt-4 mt-6">
                <Button 
                  type="button" 
                  onClick={() => setIsProjectFormOpen(false)}
                  className="bg-white/5 hover:bg-white/10 text-white text-xs px-4"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-[var(--cyan)] hover:bg-[var(--cyan)]/80 text-slate-950 font-bold text-xs px-5"
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
