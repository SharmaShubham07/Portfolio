import React, { useState } from "react";
import { Play, ExternalLink, UserCheck, Sparkles, Code2, Layers, CheckCircle2, Shield, Eye, Columns, Image as ImageIcon, ZoomIn, ZoomOut, Maximize2, RefreshCw } from "lucide-react";
import { developerInfo, projectsData } from "../data/portfolioData";
import { ContactFormInCode } from "./ContactFormInCode";
import { LandingHeroView } from "./LandingHeroView";
import { KotlinIcon, GeminiIcon, MLKitIcon, ComposeIcon, AndroidBugdroidIcon, PythonIcon } from "./icons/TechIcons";

export function CodeEditorView({
  activeFile,
  codeLines,
  onSelectFile,
  onLaunchInEmulator,
  onRunClick,
}) {
  // Zoom state for profile XML preview
  const [zoomLevel, setZoomLevel] = useState(100);

  if (!activeFile) {
    return (
      <div className="flex-1 bg-[var(--bg-primary)] flex flex-col items-center justify-center text-[var(--text-muted)] font-mono text-xs p-6 select-none">
        <AndroidBugdroidIcon size={54} className="opacity-40 mb-4 animate-bounce" />
        <p className="text-sm font-semibold text-[var(--text-main)]">No active file opened in editor</p>
        <p className="text-xs opacity-70 mt-1">Select any Kotlin file from the Project Tree on the left.</p>
      </div>
    );
  }

  // Render Landing View if viewing Portfolio.kt (id === "landing")
  if (activeFile.id === "landing") {
    return (
      <LandingHeroView
        onSelectFile={onSelectFile}
        onLaunchInEmulator={onLaunchInEmulator}
        onRunClick={onRunClick}
      />
    );
  }

  // Find matching project if active file is a project
  const projectItem = projectsData.find((p) => p.fileId === activeFile.id);
  const isProfileAvatarXml = activeFile.id === "profile-image";

  return (
    <div className="flex-1 bg-[var(--bg-primary)] flex flex-col overflow-hidden font-mono text-xs relative selection:bg-[#3574F0]/40 selection:text-white select-none">
      {/* ---------------- ONLY SHOW TOP TOOLBAR FOR ic_profile_avatar.xml ---------------- */}
      {isProfileAvatarXml && (
        <div className="h-8 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 flex items-center justify-between text-[11px] shrink-0">
          <div className="flex items-center space-x-2 text-[var(--text-muted)]">
            <span className="font-bold text-[var(--text-main)]">{activeFile.name}</span>
            <span className="text-[10px] px-2 py-0.2 rounded bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[#3DDC84]">
              XML Vector & Photo Asset
            </span>
          </div>

          <div className="flex items-center space-x-1 bg-[var(--bg-primary)] p-0.5 rounded-lg border border-[var(--border-color)]">
            <div className="px-2.5 py-0.5 rounded bg-[#3574F0] text-white font-bold flex items-center space-x-1">
              <Columns size={12} />
              <span>Split Mode</span>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- MAIN WORKSPACE AREA ---------------- */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Code Editor Lines */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {/* Profile Avatar Banner Widget inside KDoc comment block for AboutMe.kt */}
          {activeFile.id === "about-me" && (
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-[var(--bg-secondary)] via-[var(--bg-tertiary)]/50 to-[var(--bg-secondary)] border border-[var(--border-color)] flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 max-w-2xl glass-panel glass-card-hover shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 kotlin-gradient-bg" />

              <div
                onClick={() => onSelectFile("profile-image")}
                className="relative shrink-0 mt-1 cursor-pointer group"
                title="Click to open ic_profile_avatar.xml in Split View!"
              >
                <img
                  src={developerInfo.avatarUrl}
                  alt={developerInfo.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-[#3DDC84] shadow-xl group-hover:scale-105 transition-transform"
                />
                <div className="absolute -bottom-1 -right-1 bg-[#3DDC84] p-1 rounded-full text-slate-950 shadow-md">
                  <UserCheck size={13} />
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h2 className="text-base font-extrabold text-[var(--text-main)] tracking-tight">
                    {developerInfo.name}
                  </h2>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#7F52FF]/20 text-[#7F52FF] font-bold border border-[#7F52FF]/40">
                    @author (2+ Yrs Exp)
                  </span>
                </div>

                <p className="text-xs text-[#3DDC84] font-semibold mt-1 flex items-center justify-center sm:justify-start space-x-1">
                  <span>{developerInfo.title}</span>
                </p>

                <p className="text-[11px] text-[var(--text-muted)] mt-1.5 leading-relaxed font-sans">
                  Specialized in native Android (Kotlin), real-time IoT hardware telemetry (MQTT/USB), and hybrid Google ML Kit + Generative AI APIs (Gemini, Nvidia).
                </p>

                <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2 text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-main)] border border-[var(--border-color)]">
                    📍 {developerInfo.location}
                  </span>
                  <button
                    onClick={() => onSelectFile("profile-image")}
                    className="px-2 py-0.5 rounded bg-[#3574F0]/20 hover:bg-[#3574F0]/30 text-[#56A8F5] border border-[#3574F0]/40 font-semibold cursor-pointer"
                  >
                    🖼️ Open XML Preview
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Project Specific Interactive Hero Banner */}
          {projectItem && (
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-[var(--bg-secondary)] via-[var(--bg-tertiary)]/40 to-[var(--bg-secondary)] border border-[var(--border-color)] flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-3xl glass-panel glass-card-hover shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3574F0] via-[#7F52FF] to-[#3DDC84]" />

              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold text-[var(--text-main)] font-sans">
                    {projectItem.name}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                    {projectItem.status}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3574F0]/20 text-[#56A8F5] font-mono">
                    {projectItem.period}
                  </span>
                </div>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-sans">
                  {projectItem.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {projectItem.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2.5 py-0.5 rounded-md bg-[var(--bg-primary)] text-[var(--text-main)] border border-[var(--border-color)] flex items-center space-x-1.5 font-medium shadow-xs"
                    >
                      {t.includes("Compose") ? (
                        <ComposeIcon size={12} />
                      ) : t.includes("ML Kit") ? (
                        <MLKitIcon size={12} />
                      ) : t.includes("Gemini") || t.includes("AI") ? (
                        <GeminiIcon size={12} />
                      ) : (
                        <KotlinIcon size={12} />
                      )}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Launch in Emulator Button */}
              {projectItem.emulatorAppId && (
                <button
                  onClick={() => onLaunchInEmulator(projectItem.emulatorAppId)}
                  className="shrink-0 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95 cursor-pointer glass-pill font-mono border border-emerald-400/40"
                >
                  <Play size={14} className="fill-current text-white" />
                  <span>Try in AVD Emulator ▶</span>
                </button>
              )}
            </div>
          )}

          {/* Lines of Code Render */}
          <div className="space-y-1 font-mono text-[12px] leading-6">
            {codeLines.map((lineObj) => (
              <div key={lineObj.line} className="flex hover:bg-[var(--bg-secondary)]/80 rounded px-1 group transition-colors">
                <span className="w-10 text-right pr-4 text-[var(--text-muted)] opacity-50 select-none shrink-0 group-hover:opacity-100 group-hover:text-[#56A8F5] transition-opacity">
                  {lineObj.line}
                </span>

                <div className="flex-1 whitespace-pre wrap-break-words">
                  {lineObj.tokens && lineObj.tokens.length > 0 ? (
                    lineObj.tokens.map((token, idx) => (
                      <span key={idx} className={`token-${token.t}`}>
                        {token.v}
                      </span>
                    ))
                  ) : (
                    <span>{lineObj.text}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Embedded Contact Form if viewing Contact.kt */}
          {activeFile.id === "contact" && <ContactFormInCode />}
        </div>

        {/* Right Side: Android Studio Layout Preview Window (ONLY FOR ic_profile_avatar.xml!) */}
        {isProfileAvatarXml && (
          <div className="w-full md:w-1/2 border-l border-[var(--border-color)] bg-[#0C0D12] flex flex-col overflow-hidden relative">
            {/* Preview Toolbar Header */}
            <div className="h-8 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/60 px-3 flex items-center justify-between text-[10px] text-[var(--text-muted)] shrink-0">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse" />
                <span className="font-bold text-[var(--text-main)]">Android Studio Layout Preview</span>
                <span className="text-[9px] text-[#3574F0] font-mono">Pixel 8 Pro (API 34)</span>
              </div>

              {/* Zoom Controls */}
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))}
                  className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
                  title="Zoom Out"
                >
                  <ZoomOut size={12} />
                </button>
                <span className="w-8 text-center text-white font-mono">{zoomLevel}%</span>
                <button
                  onClick={() => setZoomLevel(Math.min(150, zoomLevel + 10))}
                  className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
                  title="Zoom In"
                >
                  <ZoomIn size={12} />
                </button>
                <button
                  onClick={() => setZoomLevel(100)}
                  className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
                  title="Reset Zoom"
                >
                  <Maximize2 size={12} />
                </button>
              </div>
            </div>

            {/* Android Device Layout Canvas */}
            <div className="flex-1 p-6 flex flex-col items-center justify-center overflow-y-auto custom-scrollbar relative bg-[radial-gradient(#1A1D28_1px,transparent_1px)] [background-size:16px_16px]">
              {/* Device Frame */}
              <div
                style={{ transform: `scale(${zoomLevel / 100})` }}
                className="w-72 p-6 rounded-3xl bg-[#141620] border-2 border-[#3574F0]/40 shadow-2xl space-y-4 transition-transform relative overflow-hidden"
              >
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-white/10 pb-2">
                  <span>9:41 AM</span>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[#3DDC84] font-bold">5G</span>
                    <div className="w-4 h-2 rounded-xs border border-slate-400 p-0.5">
                      <div className="w-full h-full bg-[#3DDC84]" />
                    </div>
                  </div>
                </div>

                {/* ImageView Component Frame */}
                <div className="text-center space-y-3">
                  <div className="text-[10px] font-mono text-[#3DDC84] bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/30">
                    ShapeableImageView Component (@id/imgProfileAvatar)
                  </div>

                  <div className="relative inline-block">
                    <div className="w-40 h-40 rounded-3xl p-1 kotlin-gradient-bg shadow-2xl mx-auto">
                      <img
                        src={developerInfo.avatarUrl}
                        alt={developerInfo.name}
                        className="w-full h-full rounded-[20px] object-cover border-2 border-[#0A0B0E]"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-emerald-400 text-slate-950 px-2 py-0.5 rounded-full text-[9px] font-bold shadow-lg flex items-center space-x-1">
                      <UserCheck size={11} />
                      <span>Verified</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-white">{developerInfo.name}</h3>
                    <p className="text-[11px] text-[#3DDC84] font-mono font-semibold">
                      {developerInfo.title}
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                      Surat, Gujarat • 2+ Years Exp
                    </p>
                  </div>
                </div>

                {/* XML Attributes Property Inspector Footer */}
                <div className="pt-3 border-t border-white/10 font-mono text-[9px] text-slate-300 space-y-1 bg-[#0A0B0E] p-2.5 rounded-xl border border-white/10">
                  <div className="flex justify-between">
                    <span className="text-slate-500">layout_width:</span>
                    <span className="text-emerald-400 font-bold">200dp</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">layout_height:</span>
                    <span className="text-emerald-400 font-bold">200dp</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">strokeColor:</span>
                    <span className="text-amber-400 font-bold">#3DDC84</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">shapeOverlay:</span>
                    <span className="text-sky-400 font-bold">@style/Rounded24dp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
