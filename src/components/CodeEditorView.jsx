import React from "react";
import { Play, ExternalLink, UserCheck, Sparkles, Code2, Layers, CheckCircle2, Shield } from "lucide-react";
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

  return (
    <div className="flex-1 bg-[var(--bg-primary)] flex overflow-hidden font-mono text-xs relative selection:bg-[#3574F0]/40 selection:text-white">
      {/* Code Editor Container */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        
        {/* Profile Avatar Banner Widget inside KDoc comment block for AboutMe.kt */}
        {activeFile.id === "about-me" && (
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-[var(--bg-secondary)] via-[var(--bg-tertiary)]/50 to-[var(--bg-secondary)] border border-[var(--border-color)] flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 max-w-2xl glass-panel glass-card-hover shadow-xl relative overflow-hidden">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 kotlin-gradient-bg" />

            <div className="relative shrink-0 mt-1">
              <img
                src={developerInfo.avatarUrl}
                alt={developerInfo.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[#3DDC84] shadow-xl"
              />
              <div className="absolute -bottom-1 -right-1 bg-[#3DDC84] p-1 rounded-full text-slate-950 shadow-md" title="Verified Android & AI Developer">
                <UserCheck size={13} />
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h2 className="text-base font-extrabold text-[var(--text-main)] tracking-tight">
                  {developerInfo.name}
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#7F52FF]/20 text-[#7F52FF] font-bold border border-[#7F52FF]/40">
                  @author (1+ Yrs Exp)
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
                <span className="px-2 py-0.5 rounded bg-[#3574F0]/20 text-[#56A8F5] border border-[#3574F0]/40 font-semibold">
                  Kotlin 2.0.0
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold">
                  Compose 1.7
                </span>
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
              {/* Line Number Column */}
              <span className="w-10 text-right pr-4 text-[var(--text-muted)] opacity-50 select-none shrink-0 group-hover:opacity-100 group-hover:text-[#56A8F5] transition-opacity">
                {lineObj.line}
              </span>

              {/* Line Text Tokens */}
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

      {/* Right Side Minimap Bar Simulation */}
      <div className="w-14 border-l border-[var(--border-color)] bg-[var(--bg-secondary)]/30 hidden md:flex flex-col p-1.5 opacity-50 select-none overflow-hidden">
        {codeLines.map((lineObj) => (
          <div
            key={lineObj.line}
            className="h-1 bg-[var(--text-muted)]/40 my-0.5 rounded-xs transition-all"
            style={{ width: `${Math.min(100, Math.max(20, lineObj.text.length * 1.6))}%` }}
          />
        ))}
      </div>
    </div>
  );
}
