import React, { useState, useEffect } from "react";
import { Play, Send, Award, Cpu, ShieldCheck, Sparkles, MapPin, ExternalLink, ChevronRight, Code2, Layers, CheckCircle2, Zap, Smartphone, ArrowUpRight, Briefcase, Calendar, Phone, MessageSquare, Download, Star, Terminal, FileCode2, Gauge, Activity, Database, Wrench, Globe, Radio } from "lucide-react";
import { developerInfo, projectsData, achievementsData, skillsData, experienceData } from "../data/portfolioData";
import { KotlinIcon, GeminiIcon, MLKitIcon, ComposeIcon, AndroidBugdroidIcon, LinkedInIcon, GithubIcon } from "./icons/TechIcons";
import { ProjectDetailModal } from "./ProjectDetailModal";

export function FullWebsiteView({
  onSwitchToIDE,
  onLaunchInEmulator,
  onSelectFile,
}) {
  const [projectCategory, setProjectCategory] = useState("all");
  const [skillCategory, setSkillCategory] = useState("all");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [selectedProject, setSelectedProject] = useState(null);

  // Live Terminal Code Simulation Snippet
  const [terminalText, setTerminalText] = useState("");
  const codeSnippet = `class ShubhamSharma : AndroidDeveloper() {\n    val location = "Surat, Gujarat, India"\n    val exp = "2+ Years Native Kotlin & IoT"\n    val tech = listOf("Compose", "MQTT", "ML Kit", "Gemini")\n}`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTerminalText(codeSnippet.slice(0, index));
      index++;
      if (index > codeSnippet.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const companyTechTags = {
    susamp: ["Kotlin", "Jetpack Compose", "Coroutines", "Clean Architecture", "Play Store Optimization"],
    leons: ["Kotlin", "MQTT", "IoT", "REST APIs", "OTA Updates", "USB Communication", "Room DB"],
  };

  const detailedSkills = [
    {
      category: "languages",
      catName: "Languages & Core",
      color: "text-[#3574F0]",
      borderColor: "border-[#3574F0]/40",
      bgGlow: "bg-[#3574F0]/10",
      skills: [
        { name: "Kotlin", level: 95, exp: "2+ Yrs", desc: "Coroutines, Flow, DSL, Native Android", icon: <KotlinIcon size={16} /> },
        { name: "Java", level: 90, exp: "2+ Yrs", desc: "Android SDKs, OOP, Multithreading", icon: <Code2 size={16} className="text-amber-400" /> },
        { name: "Python", level: 85, exp: "1+ Yr", desc: "AI/ML Scripting, Data Pipelines", icon: <Terminal size={16} className="text-sky-400" /> },
        { name: "React Native / JS", level: 80, exp: "1+ Yr", desc: "Cross-Platform & Web Interfaces", icon: <Globe size={16} className="text-cyan-400" /> },
      ],
    },
    {
      category: "android",
      catName: "Android Frameworks & Architecture",
      color: "text-[#3DDC84]",
      borderColor: "border-[#3DDC84]/40",
      bgGlow: "bg-[#3DDC84]/10",
      skills: [
        { name: "Jetpack Compose", level: 92, exp: "2+ Yrs", desc: "Declarative Reactive UI, State Management", icon: <ComposeIcon size={16} /> },
        { name: "Clean Architecture + MVVM", level: 95, exp: "2+ Yrs", desc: "Repository Pattern, Dependency Injection", icon: <Layers size={16} className="text-emerald-400" /> },
        { name: "Room DB & SQLite", level: 94, exp: "2+ Yrs", desc: "Offline-First Sync, Indexing, DAO", icon: <Database size={16} className="text-[#3574F0]" /> },
        { name: "CameraX & Audio APIs", level: 90, exp: "2+ Yrs", desc: "60FPS Viewfinder, Audio Buffer Reversal", icon: <Cpu size={16} className="text-purple-400" /> },
        { name: "Android Jetpack Suite", level: 92, exp: "2+ Yrs", desc: "ViewModel, LiveData, Navigation, WorkManager", icon: <AndroidBugdroidIcon size={16} /> },
      ],
    },
    {
      category: "iot",
      catName: "IoT Telemetry & Hardware Drivers",
      color: "text-amber-400",
      borderColor: "border-amber-400/40",
      bgGlow: "bg-amber-400/10",
      skills: [
        { name: "MQTT Communication", level: 92, exp: "2+ Yrs", desc: "Real-time Telemetry, QoS 1 Streaming", icon: <Radio size={16} className="text-amber-400" /> },
        { name: "USB OTG & Serial Drivers", level: 90, exp: "2+ Yrs", desc: "Custom FTDI/UART Packet Parsers", icon: <Zap size={16} className="text-yellow-400" /> },
        { name: "OTA Firmware Updates", level: 88, exp: "2+ Yrs", desc: "USB/Wireless Flashing & Bootloader Rollback", icon: <ShieldCheck size={16} className="text-emerald-400" /> },
        { name: "RESTful APIs & WebSockets", level: 95, exp: "2+ Yrs", desc: "JSON Serialization, HTTP/FTP Uploads", icon: <Globe size={16} className="text-sky-400" /> },
      ],
    },
    {
      category: "ai_ml",
      catName: "AI / ML & Computer Vision",
      color: "text-[#7F52FF]",
      borderColor: "border-[#7F52FF]/40",
      bgGlow: "bg-[#7F52FF]/10",
      skills: [
        { name: "Google ML Kit Vision", level: 90, exp: "1+ Yr", desc: "On-Device Object Detection & Bounding Boxes", icon: <MLKitIcon size={16} /> },
        { name: "Generative AI APIs", level: 88, exp: "1+ Yr", desc: "Gemini API, Nvidia AI API Integration", icon: <GeminiIcon size={16} /> },
        { name: "Image-to-Image AI", level: 85, exp: "1+ Yr", desc: "Neural Style Transfer & Photo Inference", icon: <Sparkles size={16} className="text-pink-400" /> },
        { name: "Food & Nutrition Vision", level: 88, exp: "1+ Yr", desc: "Macro Breakdown Scanner & Camera Viewfinder", icon: <Sparkles size={16} className="text-purple-400" /> },
      ],
    },
    {
      category: "tools",
      catName: "Developer Tools & Monetization",
      color: "text-sky-400",
      borderColor: "border-sky-400/40",
      bgGlow: "bg-sky-400/10",
      skills: [
        { name: "Android Studio & ADB", level: 98, exp: "2+ Yrs", desc: "Profiler, Logcat, Memory Leak Inspection", icon: <Wrench size={16} className="text-sky-400" /> },
        { name: "Gradle & Optimization", level: 90, exp: "2+ Yrs", desc: "Build Variants, ProGuard, Memory Benchmarking", icon: <Zap size={16} className="text-emerald-400" /> },
        { name: "Google Mobile Ads (AdMob)", level: 88, exp: "2+ Yrs", desc: "Banner, Interstitial & Rewarded Ads SDK", icon: <Award size={16} className="text-amber-400" /> },
        { name: "Git & Release Pipelines", level: 92, exp: "2+ Yrs", desc: "Version Control, Play Console Deployments", icon: <GithubIcon size={16} /> },
      ],
    },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (projectCategory === "all") return true;
    return p.catKey === projectCategory;
  });

  const filteredSkillCats = detailedSkills.filter((cat) => {
    if (skillCategory === "all") return true;
    return cat.category === skillCategory;
  });

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const name = formState.name || "Recruiter/Client";
    const email = formState.email || "Not specified";
    const userMsg = formState.message || "Hi Shubham, I would like to connect with you regarding an opportunity.";

    const fullMessage = `Hi Shubham,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${userMsg}`;
    const encodedText = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/917889843353?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#E2E8F0] font-sans select-none overflow-y-auto custom-scrollbar selection:bg-[#7F52FF]/40 selection:text-white relative">
      {/* Dynamic Ambient Color Mesh Floaters */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#7F52FF]/12 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse" />
      <div className="fixed bottom-10 right-1/4 w-[600px] h-[600px] bg-[#3DDC84]/12 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none z-0" />

      {/* Project Case Study Deep Dive Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onLaunchInEmulator={onLaunchInEmulator}
          onSelectFile={onSelectFile}
        />
      )}

      {/* ---------------- STICKY TOP NAVIGATION BAR ---------------- */}
      <header className="sticky top-0 z-40 bg-[#0A0B0E]/85 backdrop-blur-2xl border-b border-white/10 px-4 md:px-8 py-3.5 flex items-center justify-between shadow-2xl">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl kotlin-gradient-bg p-0.5 shadow-lg flex items-center justify-center">
            <div className="w-full h-full bg-[#0A0B0E] rounded-[14px] flex items-center justify-center">
              <AndroidBugdroidIcon size={22} className="text-[#3DDC84]" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-base text-white tracking-tight">
                {developerInfo.name}
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold border border-emerald-500/30">
                2+ Yrs Exp
              </span>
            </div>
            <span className="text-[11px] text-[#3DDC84] font-mono font-semibold block">
              Android Developer, AI/ML Developer & IoT Specialist
            </span>
          </div>
        </div>

        {/* Quick Contact & View Switcher */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <a
            href={developerInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold border border-white/20 transition-all cursor-pointer shadow-sm"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          <a
            href={developerInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/40 transition-all cursor-pointer shadow-sm"
          >
            <MessageSquare size={14} />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onSwitchToIDE}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7F52FF] via-[#3574F0] to-[#2B63D9] hover:opacity-90 text-white font-mono text-xs font-bold shadow-lg transition-all active:scale-95 cursor-pointer border border-white/20"
          >
            <Code2 size={15} />
            <span>IDE Workspace Mode 🛠️</span>
          </button>
        </div>
      </header>

      {/* ---------------- ULTRA-PREMIUM HERO SECTION ---------------- */}
      <section className="relative px-4 md:px-8 pt-12 pb-16 max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Surat, Gujarat • Available for Hiring & Projects</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Engineering Next-Gen <br className="hidden sm:inline" />
              <span className="kotlin-gradient-text">Native Android, IoT & AI/ML Systems</span>
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
              Hi, I'm <strong className="text-white font-semibold">Shubham Sharma</strong> — an Application Software Developer with <strong className="text-emerald-400 font-bold">2+ years of experience</strong> based in <strong className="text-white">Surat, Gujarat</strong>. I specialize in building production Kotlin apps, real-time IoT hardware telemetry (MQTT/USB OTG), and hybrid on-device AI/ML models (Google ML Kit + Gemini APIs).
            </p>

            {/* Quick Contact & Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs font-mono shadow-md transition-all active:scale-95 cursor-pointer flex items-center space-x-2 border border-white/20"
              >
                <GithubIcon size={16} />
                <span>GitHub Profile</span>
              </a>

              <a
                href={developerInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono shadow-xl hover:shadow-emerald-500/25 transition-all active:scale-95 cursor-pointer flex items-center space-x-2 border border-emerald-400/40"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Message</span>
              </a>

              <a
                href="tel:+917889843353"
                className="px-5 py-3 rounded-2xl bg-[#1F2430] hover:bg-[#282E3D] text-white font-bold text-xs font-mono shadow-md transition-all active:scale-95 cursor-pointer flex items-center space-x-2 border border-white/10"
              >
                <Phone size={15} className="text-[#3574F0]" />
                <span>Direct Call</span>
              </a>

              <button
                onClick={onSwitchToIDE}
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#7F52FF] to-[#3574F0] text-white font-bold text-xs font-mono shadow-md transition-all active:scale-95 cursor-pointer flex items-center space-x-2 border border-purple-400/30"
              >
                <Code2 size={15} />
                <span>Open IDE Workspace ▶</span>
              </button>
            </div>
          </div>

          {/* Hero Right Column: Luxury Avatar + Live Kotlin Code Widget */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-4">
            <div className="w-full max-w-sm p-6 rounded-3xl bg-gradient-to-b from-[#181A22] to-[#12141A] border border-white/10 glass-panel shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-1.5 kotlin-gradient-bg rounded-t-3xl" />

              <div className="text-center space-y-4">
                <div
                  onClick={() => {
                    onSwitchToIDE();
                    onSelectFile("profile-image");
                  }}
                  className="relative inline-block cursor-pointer group"
                  title="Click to inspect profile avatar XML layout!"
                >
                  <div className="w-32 h-32 rounded-3xl p-1 kotlin-gradient-bg shadow-2xl mx-auto group-hover:scale-105 transition-transform">
                    <img
                      src={developerInfo.avatarUrl}
                      alt={developerInfo.name}
                      className="w-full h-full rounded-[20px] object-cover border-2 border-[#0A0B0E]"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-400 text-slate-950 px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-lg flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                    <span>Verified</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-white">{developerInfo.name}</h3>
                  <p className="text-xs text-[#3DDC84] font-mono font-semibold mt-0.5">
                    Surat, Gujarat, India
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    2+ Years Exp • Android, IoT & AI/ML
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-center font-mono">
                  <div className="p-2.5 rounded-xl bg-[#0A0B0E] border border-white/10">
                    <span className="text-lg font-extrabold text-white block kotlin-gradient-text">9+ Apps</span>
                    <span className="text-[10px] text-slate-400 block">Play Store & Enterprise</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0A0B0E] border border-white/10">
                    <span className="text-lg font-extrabold text-white block kotlin-gradient-text">-30%</span>
                    <span className="text-[10px] text-slate-400 block">Processing Opt.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Typing Code Playground Preview */}
            <div className="w-full max-w-sm bg-[#0E1017] p-3 rounded-2xl border border-white/10 font-mono text-[11px] text-emerald-400 shadow-xl">
              <div className="flex items-center justify-between text-[9px] text-slate-400 border-b border-white/10 pb-1.5 mb-2">
                <span className="flex items-center space-x-1">
                  <Terminal size={12} className="text-[#3574F0]" />
                  <span>Kotlin Architecture Console</span>
                </span>
                <span className="text-emerald-400">● LIVE</span>
              </div>
              <pre className="whitespace-pre-wrap text-[10px] text-slate-200 leading-relaxed font-mono">
                {terminalText}
                <span className="inline-block w-1.5 h-3 bg-emerald-400 animate-pulse ml-0.5" />
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATS COUNTER BAR ---------------- */}
      <section className="px-4 md:px-8 pb-12 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Experience", val: "2+ Years", sub: "Android, IoT & AI/ML" },
            { label: "Production Apps", val: "9+ Apps", sub: "Play Store & Custom SDKs" },
            { label: "Optimization", val: "-30%", sub: "Processing Time Reduced" },
            { label: "Satisfaction", val: "+20%", sub: "IoT Client Rating" },
          ].map((st, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#141620] border border-white/10 text-center glass-panel glass-card-hover"
            >
              <span className="text-2xl font-extrabold text-white font-mono kotlin-gradient-text block">
                {st.val}
              </span>
              <span className="text-xs font-bold text-white block mt-1">{st.label}</span>
              <span className="text-[10px] text-slate-400 font-mono block mt-0.5">{st.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- RICH INTERACTIVE TECHNICAL STACK DASHBOARD ---------------- */}
      <section className="px-4 md:px-8 py-14 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-[#7F52FF] uppercase tracking-wider">Engineering Competencies</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Technical Stack & Mastery</h2>
          </div>

          {/* Skill Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-[#0A0B0E] p-1.5 rounded-xl border border-white/10 font-mono text-xs">
            {[
              { key: "all", label: "All Skills" },
              { key: "languages", label: "Languages" },
              { key: "android", label: "Android" },
              { key: "iot", label: "IoT & Hardware" },
              { key: "ai_ml", label: "AI / ML" },
              { key: "tools", label: "Tools" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSkillCategory(tab.key)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-bold ${
                  skillCategory === tab.key
                    ? "bg-gradient-to-r from-[#7F52FF] to-[#3574F0] text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkillCats.map((cat) => (
            <div
              key={cat.category}
              className={`p-6 rounded-3xl bg-[#141620] border ${cat.borderColor} glass-panel space-y-4 shadow-xl`}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className={`text-xs font-bold font-mono ${cat.color} uppercase tracking-wider`}>
                  {cat.catName}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {cat.skills.length} Competencies
                </span>
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="p-3 rounded-2xl bg-[#0A0B0E] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono font-bold">
                      <div className="flex items-center space-x-2">
                        {skill.icon}
                        <span className="text-white">{skill.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#141620] text-slate-400 font-mono">
                          {skill.exp}
                        </span>
                        <span className="text-[#3DDC84] font-mono">{skill.level}%</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 font-sans">
                      {skill.desc}
                    </p>

                    <div className="h-1.5 bg-[#141620] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#7F52FF] via-[#3574F0] to-[#3DDC84] rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FILTERABLE PROJECTS GALLERY ---------------- */}
      <section className="px-4 md:px-8 py-14 bg-[#0F1118]/70 border-y border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#7F52FF] uppercase tracking-wider">Portfolio Gallery</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Production Apps & AI Projects</h2>
              <p className="text-xs text-slate-400 font-mono mt-1">Click any card to inspect full case study, photos & architecture breakdown</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-[#0A0B0E] p-1.5 rounded-xl border border-white/10 font-mono text-xs">
              {[
                { key: "all", label: "All (9)" },
                { key: "android", label: "Android & IoT" },
                { key: "ai_ml", label: "AI & ML" },
                { key: "utility", label: "Utilities" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setProjectCategory(tab.key)}
                  className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-bold ${
                    projectCategory === tab.key
                      ? "bg-gradient-to-r from-[#7F52FF] to-[#3574F0] text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="p-6 rounded-2xl bg-[#141620] border border-white/10 glass-panel glass-card-hover flex flex-col justify-between space-y-4 cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#3DDC84]">{proj.category}</span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#56A8F5] transition-colors flex items-center justify-between">
                    <span>{proj.name}</span>
                    <ArrowUpRight size={16} className="text-slate-400 group-hover:text-[#56A8F5] transition-colors shrink-0" />
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {proj.stack.slice(0, 2).map((t) => (
                      <span key={t} className="text-[9px] px-2 py-0.5 rounded bg-[#0A0B0E] text-slate-300 font-mono border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="text-[11px] font-mono font-bold text-[#3DDC84] group-hover:underline flex items-center space-x-1">
                    <span>Case Study</span>
                    <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ULTRA-PREMIUM ZIG-ZAG VERTICAL TIMELINE ---------------- */}
      <section className="px-4 md:px-8 py-16 max-w-6xl mx-auto relative z-10">
        <div className="flex items-center space-x-2 mb-10 justify-center">
          <Briefcase size={26} className="text-[#3DDC84]" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Career Journey & Experience (2+ Years)
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Spine Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#3DDC84] via-[#3574F0] to-[#7F52FF] opacity-60 pointer-events-none" />

          <div className="space-y-12 relative">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Node Dot on Central Line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0A0B0E] border-2 border-[#3DDC84] shadow-[0_0_20px_rgba(61,220,132,0.9)] z-20 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full ${exp.isCurrent ? "bg-[#3DDC84] animate-pulse" : "bg-[#7F52FF]"}`} />
                  </div>

                  {/* Card Half Wrapper */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div
                      onClick={() => {
                        onSwitchToIDE();
                        onSelectFile(exp.fileId);
                      }}
                      className="p-6 rounded-3xl bg-[#141620] border border-white/10 glass-panel glass-card-hover cursor-pointer relative overflow-hidden group shadow-2xl transition-all"
                    >
                      {/* Top Glowing Header Accent */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 ${exp.isCurrent ? "bg-[#3DDC84]" : "bg-[#7F52FF]"}`} />

                      {/* Company & Role Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-xl font-extrabold text-[#56A8F5] tracking-tight">
                              {exp.company}
                            </h3>
                            {exp.isCurrent && (
                              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#3DDC84]/20 text-[#3DDC84] font-mono font-bold border border-[#3DDC84]/40">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-amber-400 font-mono font-bold mt-1">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      {/* Metadata Badges (Period & Location) */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-4 pt-2 border-t border-white/10">
                        <span className="flex items-center space-x-1 text-white font-semibold">
                          <Calendar size={13} className="text-[#3574F0]" />
                          <span>{exp.period}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1 text-rose-400 font-semibold">
                          <MapPin size={13} />
                          <span>{exp.location}</span>
                        </span>
                      </div>

                      {/* Deliverables List */}
                      <ul className="space-y-2 text-xs text-slate-300 mb-4">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start space-x-2.5">
                            <CheckCircle2 size={15} className="text-[#3DDC84] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tag Pills */}
                      <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          {companyTechTags[exp.id]?.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#0A0B0E] text-[#56A8F5] font-mono border border-[#3574F0]/30 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#3574F0]/20 group-hover:bg-[#3574F0]/30 text-[#56A8F5] text-[11px] font-mono font-bold transition-all shrink-0">
                          <FileCode2 size={13} />
                          <span>Inspect Class ({exp.fileId}.kt)</span>
                          <ChevronRight size={13} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- DIRECT CONTACT SECTION ---------------- */}
      <section className="px-4 md:px-8 py-16 bg-[#0F1118]/80 border-t border-white/10 relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-mono font-bold text-[#3DDC84] uppercase tracking-wider">Direct Connect</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Get In Touch</h2>
            <p className="text-xs md:text-sm text-slate-400 font-mono">
              Send a direct message via WhatsApp or call
            </p>
          </div>

          {/* Quick Direct Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <a
              href={developerInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href="tel:+917889843353"
              className="p-4 rounded-2xl bg-[#1F2430] hover:bg-[#282E3D] border border-white/10 text-white font-mono text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg"
            >
              <Phone size={18} className="text-[#3574F0]" />
              <span>Phone Call</span>
            </a>
          </div>

          {/* Direct WhatsApp Form */}
          <div className="p-6 md:p-8 rounded-3xl bg-[#141620] border border-white/10 glass-panel shadow-2xl">
            <form onSubmit={handleWhatsAppSend} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Verma / HR Team"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-[#0A0B0E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-[#0A0B0E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Shubham, I would like to discuss an opportunity..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#0A0B0E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold font-mono text-xs shadow-xl transition-all active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
              >
                <MessageSquare size={16} />
                <span>Send via WhatsApp 🚀</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-8 border-t border-white/10 bg-[#0A0B0E] text-center text-xs text-slate-400 font-mono">
        <p>© 2026 Shubham Sharma. Android Developer, AI/ML Developer & IoT Specialist — Surat, Gujarat, India.</p>
      </footer>
    </div>
  );
}
