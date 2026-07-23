import React, { useState } from "react";
import { Play, Send, Award, Cpu, ShieldCheck, Sparkles, MapPin, ExternalLink, ChevronRight, Code2, Layers, CheckCircle2, Zap, Smartphone, ArrowUpRight, Briefcase, Calendar, FileCode2, Terminal, Database, Wrench, Globe, Radio } from "lucide-react";
import { developerInfo, projectsData, achievementsData, skillsData, experienceData } from "../data/portfolioData";
import { KotlinIcon, GeminiIcon, MLKitIcon, ComposeIcon, AndroidBugdroidIcon, LinkedInIcon, GithubIcon } from "./icons/TechIcons";
import { ProjectDetailModal } from "./ProjectDetailModal";

export function LandingHeroView({
  onSelectFile,
  onLaunchInEmulator,
  onRunClick,
}) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [skillCategory, setSkillCategory] = useState("all");

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

  const filteredSkillCats = detailedSkills.filter((cat) => {
    if (skillCategory === "all") return true;
    return cat.category === skillCategory;
  });

  return (
    <div className="flex-1 bg-[var(--bg-primary)] overflow-y-auto custom-scrollbar p-4 md:p-8 font-sans selection:bg-[#3574F0]/40 selection:text-white">
      {/* Project Case Study Deep Dive Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onLaunchInEmulator={onLaunchInEmulator}
          onSelectFile={onSelectFile}
        />
      )}

      {/* ---------------- HERO HEADER SECTION ---------------- */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[var(--bg-secondary)] via-[var(--bg-tertiary)]/50 to-[var(--bg-secondary)] border border-[var(--border-color)] glass-panel shadow-2xl relative overflow-hidden">
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 kotlin-gradient-bg" />

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Avatar Frame */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl p-1 kotlin-gradient-bg shadow-2xl">
                <img
                  src={developerInfo.avatarUrl}
                  alt={developerInfo.name}
                  className="w-full h-full rounded-[22px] object-cover border-2 border-[var(--bg-secondary)]"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#3DDC84] text-slate-950 px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-lg flex items-center space-x-1 border border-white/40">
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                <span>Available</span>
              </div>
            </div>

            {/* Bio & Details */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="px-3 py-1 rounded-full bg-[#3DDC84]/15 text-[#3DDC84] text-xs font-mono font-bold border border-[#3DDC84]/30 flex items-center space-x-1">
                  <AndroidBugdroidIcon size={14} />
                  <span>Android • AI/ML • IoT</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#7F52FF]/15 text-[#7F52FF] text-xs font-mono font-bold border border-[#7F52FF]/30">
                  2+ Years Exp 🔥
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
                {developerInfo.name}
              </h1>

              <p className="text-sm md:text-base text-[#3DDC84] font-mono font-bold">
                {developerInfo.title}
              </p>

              <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">
                Application Software Developer with <strong className="text-[var(--text-main)]">2+ years of experience</strong> in native Android (Kotlin), IoT-based hardware systems, and AI/ML model integrations. Specialized in MQTT communication, OTA firmware updates, USB device drivers, and real-time hardware interaction. Also builds on-device <strong className="text-[var(--text-main)]">Google ML Kit</strong> & cloud <strong className="text-[var(--text-main)]">Generative AI API</strong> pipelines.
              </p>

              <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs font-mono">
                <span className="text-[var(--text-muted)] flex items-center space-x-1 font-semibold">
                  <MapPin size={14} className="text-rose-400" />
                  <span>Surat, Gujarat, India</span>
                </span>
                <span className="text-[var(--text-muted)]">•</span>
                <a
                  href={developerInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#56A8F5] hover:underline flex items-center space-x-1"
                >
                  <LinkedInIcon size={14} />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>

              {/* Action Buttons CTA */}
              <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <button
                  onClick={onRunClick}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3574F0] to-[#2B63D9] hover:from-[#2B63D9] hover:to-[#1E4EB8] text-white font-bold text-xs shadow-lg hover:shadow-blue-500/25 transition-all active:scale-95 cursor-pointer font-mono flex items-center space-x-2 border border-blue-400/30"
                >
                  <Play size={14} className="fill-current text-white" />
                  <span>Run Projects in AVD ▶</span>
                </button>

                <button
                  onClick={() => onSelectFile("contact")}
                  className="px-5 py-2.5 rounded-xl bg-[var(--bg-tertiary)] hover:bg-[var(--border-color)] text-[var(--text-main)] font-bold text-xs shadow transition-all active:scale-95 cursor-pointer font-mono flex items-center space-x-2 border border-[var(--border-color)]"
                >
                  <Send size={14} className="text-[#3DDC84]" />
                  <span>Contact Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- STATS COUNTER GRID ---------------- */}
      <div className="max-w-4xl mx-auto mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Experience", val: "2+ Years", sub: "Android, IoT & AI/ML" },
          { label: "Production Apps", val: "9+ Apps", sub: "Play Store & Enterprise" },
          { label: "Optimization", val: "-30%", sub: "Processing Time Reduced" },
          { label: "Satisfaction", val: "+20%", sub: "IoT Client Rating" },
        ].map((st, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-center glass-panel glass-card-hover"
          >
            <span className="text-xl md:text-2xl font-extrabold text-[var(--text-main)] font-mono kotlin-gradient-text block">
              {st.val}
            </span>
            <span className="text-xs font-bold text-[var(--text-main)] block mt-1">{st.label}</span>
            <span className="text-[10px] text-[var(--text-muted)] font-mono block mt-0.5">{st.sub}</span>
          </div>
        ))}
      </div>

      {/* ---------------- ULTRA-PREMIUM ZIG-ZAG VERTICAL TIMELINE ---------------- */}
      <div className="max-w-5xl mx-auto mb-14">
        <div className="flex items-center space-x-2 mb-8 justify-center">
          <Briefcase size={22} className="text-[#3DDC84]" />
          <h2 className="text-xl font-extrabold text-[var(--text-main)] tracking-tight">
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
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--bg-primary)] border-2 border-[#3DDC84] shadow-[0_0_15px_rgba(61,220,132,0.8)] z-20 flex items-center justify-center">
                    <div className={`w-2.5 h-2.5 rounded-full ${exp.isCurrent ? "bg-[#3DDC84] animate-pulse" : "bg-[#7F52FF]"}`} />
                  </div>

                  {/* Card Half Wrapper */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div
                      onClick={() => onSelectFile(exp.fileId)}
                      className="p-5 md:p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] glass-panel glass-card-hover cursor-pointer relative overflow-hidden group shadow-xl transition-all"
                    >
                      {/* Top Glowing Header Accent */}
                      <div className={`absolute top-0 left-0 right-0 h-1 ${exp.isCurrent ? "bg-[#3DDC84]" : "bg-[#7F52FF]"}`} />

                      {/* Company & Role Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-extrabold text-[#56A8F5] tracking-tight">
                              {exp.company}
                            </h3>
                            {exp.isCurrent && (
                              <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#3DDC84]/20 text-[#3DDC84] font-mono font-bold border border-[#3DDC84]/40">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-amber-400 font-mono font-bold mt-1">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      {/* Metadata Badges (Period & Location) */}
                      <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-[var(--text-muted)] mb-3 pt-1 border-t border-[var(--border-color)]/60">
                        <span className="flex items-center space-x-1 text-[var(--text-main)] font-semibold">
                          <Calendar size={12} className="text-[#3574F0]" />
                          <span>{exp.period}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1 text-rose-400 font-semibold">
                          <MapPin size={12} />
                          <span>{exp.location}</span>
                        </span>
                      </div>

                      {/* Deliverables List */}
                      <ul className="space-y-2 text-xs text-[var(--text-muted)] mb-4">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle2 size={14} className="text-[#3DDC84] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tag Pills */}
                      <div className="pt-3 border-t border-[var(--border-color)]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          {companyTechTags[exp.id]?.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2.5 py-0.5 rounded-md bg-[var(--bg-primary)] text-[#56A8F5] font-mono border border-[#3574F0]/30 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#3574F0]/15 group-hover:bg-[#3574F0]/25 text-[#56A8F5] text-[11px] font-mono font-bold transition-all shrink-0">
                          <FileCode2 size={12} />
                          <span>Inspect Class ({exp.fileId}.kt)</span>
                          <ChevronRight size={12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------------- FEATURED PROJECTS SHOWCASE ---------------- */}
      <div className="max-w-4xl mx-auto mb-14">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Cpu size={20} className="text-[#3574F0]" />
            <h2 className="text-lg font-bold text-[var(--text-main)]">Featured Android & AI/ML Projects</h2>
          </div>
          <span className="text-xs text-[var(--text-muted)] font-mono">9 Apps • Click for Case Study</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] glass-panel glass-card-hover cursor-pointer flex flex-col justify-between space-y-3 group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#3DDC84] font-mono">{proj.category}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                    {proj.status}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[var(--text-main)] mb-1 flex items-center justify-between group-hover:text-[#56A8F5] transition-colors">
                  <span>{proj.name}</span>
                  <ArrowUpRight size={14} className="text-[var(--text-muted)] group-hover:text-[#56A8F5] transition-colors shrink-0" />
                </h3>

                <p className="text-xs text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[var(--border-color)]/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {proj.stack.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)] font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] font-mono font-bold text-[#3DDC84] group-hover:underline flex items-center space-x-1">
                  <span>Case Study</span>
                  <ChevronRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- RICH INTERACTIVE TECHNICAL STACK DASHBOARD ---------------- */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center space-x-2">
            <Layers size={22} className="text-[#7F52FF]" />
            <h2 className="text-xl font-extrabold text-[var(--text-main)]">Technical Stack & Competencies</h2>
          </div>

          {/* Skill Filter Tabs */}
          <div className="flex flex-wrap gap-1 bg-[var(--bg-secondary)] p-1 rounded-xl border border-[var(--border-color)] font-mono text-[11px]">
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
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold ${
                  skillCategory === tab.key
                    ? "bg-[#7F52FF] text-white shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredSkillCats.map((cat) => (
            <div
              key={cat.category}
              className={`p-5 rounded-2xl bg-[var(--bg-secondary)] border ${cat.borderColor} glass-panel space-y-4 shadow-lg`}
            >
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2.5">
                <span className={`text-xs font-bold font-mono ${cat.color} uppercase tracking-wider`}>
                  {cat.catName}
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  {cat.skills.length} Competencies
                </span>
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]/70 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono font-bold">
                      <div className="flex items-center space-x-2">
                        {skill.icon}
                        <span className="text-[var(--text-main)]">{skill.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)] font-mono">
                          {skill.exp}
                        </span>
                        <span className="text-[#3DDC84] font-mono">{skill.level}%</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-[var(--text-muted)] font-sans">
                      {skill.desc}
                    </p>

                    <div className="h-1.5 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
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
      </div>
    </div>
  );
}
