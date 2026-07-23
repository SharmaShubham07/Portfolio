import React from "react";
import { Play, Smartphone, Sun, Moon, Sparkles, FolderTree, Terminal, Globe, Code2 } from "lucide-react";
import { AndroidBugdroidIcon } from "./icons/TechIcons";
import { LiveClock } from "./LiveClock";
import confetti from "canvas-confetti";

export function TopNavbar({
  activeFileName,
  theme,
  onToggleTheme,
  glassEnabled,
  onToggleGlass,
  isEmulatorOpen,
  onToggleEmulator,
  onRunClick,
  isSidebarOpen,
  onToggleSidebar,
  isConsoleOpen,
  onToggleConsole,
  viewMode,
  onToggleViewMode,
}) {
  const handleRun = () => {
    // Trigger confetti burst
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1, x: 0.8 },
      colors: ["#3DDC84", "#7F52FF", "#3574F0", "#CF8E6D"],
    });

    onRunClick();
  };

  return (
    <header className="h-10 border-b border-[var(--border-color)] bg-[var(--bg-header)] text-[var(--text-main)] flex items-center justify-between px-3 text-xs select-none relative z-50 transition-colors duration-200 shadow-md">
      {/* Left section: Logo + Titlebar Menu Items + Live Clock */}
      <div className="flex items-center space-x-3 overflow-hidden">
        {/* Mobile Sidebar Hamburger Toggle */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-1.5 rounded hover:bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
          title="Toggle Project Tree"
        >
          <FolderTree size={16} />
        </button>

        {/* Android Bugdroid Logo Motif */}
        <div className="flex items-center space-x-2 font-semibold text-[var(--text-main)] shrink-0">
          <div className="relative flex items-center justify-center">
            <AndroidBugdroidIcon size={20} className="drop-shadow-[0_0_8px_rgba(61,220,132,0.6)]" />
          </div>
          <span className="hidden sm:inline font-mono font-bold tracking-tight text-[12px] kotlin-gradient-text">
            Android Studio
          </span>
          <span className="hidden xl:inline text-[9px] px-1.5 py-0.2 rounded bg-[#7F52FF]/20 text-[#7F52FF] border border-[#7F52FF]/40 font-mono font-bold">
            2026.1 AI
          </span>
        </div>

        {/* Live System Time Clock Widget */}
        <div className="hidden lg:flex items-center px-2 py-0.5 rounded bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
          <LiveClock showIcon={true} className="text-[11px]" />
        </div>

        {/* IDE Top Menu Items */}
        <nav className="hidden md:flex items-center space-x-1 text-[11px] text-[var(--text-muted)] font-sans">
          {["File", "Edit", "View", "Navigate", "Code", "Run", "Tools", "Help"].map((item) => (
            <button
              key={item}
              className="px-2 py-0.5 rounded hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-main)] transition-all cursor-pointer font-medium"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Active File Indicator Breadcrumb Title */}
        <div className="hidden sm:flex items-center text-[11px] text-[var(--text-muted)] border-l border-[var(--border-color)] pl-3 ml-1 truncate">
          <span className="truncate text-[#3DDC84] font-mono font-semibold">
            {activeFileName || "Portfolio.kt"}
          </span>
        </div>
      </div>

      {/* Right section: Action Buttons & Controls */}
      <div className="flex items-center space-x-2 shrink-0">
        {/* Full Web Mode vs IDE Mode Toggle Button */}
        <button
          onClick={onToggleViewMode}
          className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-[#7F52FF] to-[#3574F0] hover:from-[#6C42E0] hover:to-[#2B63D9] text-white font-mono text-[11px] font-bold shadow-md transition-all active:scale-95 cursor-pointer border border-white/20"
          title="Toggle Full Web Portfolio Mode vs IDE Mode"
        >
          {viewMode === "ide" ? (
            <>
              <Globe size={13} />
              <span>Full Web Mode 🌐</span>
            </>
          ) : (
            <>
              <Code2 size={13} />
              <span>IDE Mode 🛠️</span>
            </>
          )}
        </button>

        {/* "Run" Button */}
        <button
          onClick={handleRun}
          className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-[#3574F0] to-[#2B63D9] hover:from-[#2B63D9] hover:to-[#1E4EB8] text-white font-medium shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer glass-pill font-mono border border-blue-400/30"
          title="Run App (Build & Open AVD Emulator)"
        >
          <Play size={13} className="fill-[#3DDC84] text-[#3DDC84]" />
          <span className="text-[11px] tracking-wide font-bold">Run</span>
        </button>

        {/* Liquid Glass Toggle */}
        <button
          onClick={onToggleGlass}
          className={`flex items-center space-x-1 px-2.5 py-1 rounded-md transition-all text-[11px] cursor-pointer font-mono ${
            glassEnabled
              ? "bg-[#3DDC84]/20 text-[#3DDC84] border border-[#3DDC84]/40 shadow-[0_0_10px_rgba(61,220,132,0.2)] font-semibold"
              : "hover:bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
          }`}
          title={glassEnabled ? "Disable Liquid Glassmorphism" : "Enable Liquid Glassmorphism"}
        >
          <Sparkles size={13} className={glassEnabled ? "text-[#3DDC84]" : ""} />
          <span className="hidden md:inline">Glass</span>
        </button>

        {/* AVD Phone Emulator Toggle */}
        <button
          onClick={onToggleEmulator}
          className={`flex items-center space-x-1 px-2.5 py-1 rounded-md transition-all text-[11px] cursor-pointer font-mono ${
            isEmulatorOpen
              ? "bg-[#CF8E6D]/20 text-[#CF8E6D] border border-[#CF8E6D]/40 shadow-[0_0_10px_rgba(207,142,109,0.2)] font-semibold"
              : "hover:bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
          }`}
          title="Toggle Pixel AVD Phone Emulator"
        >
          <Smartphone size={13} />
          <span className="hidden md:inline">AVD Phone</span>
        </button>

        {/* Console / Logcat Toggle */}
        <button
          onClick={onToggleConsole}
          className={`p-1.5 rounded-md transition-colors text-[11px] cursor-pointer ${
            isConsoleOpen
              ? "bg-[var(--bg-tertiary)] text-[var(--text-main)] border border-[var(--border-color)]"
              : "text-[var(--text-muted)] hover:bg-[var(--bg-tertiary)]"
          }`}
          title="Toggle Logcat / Terminal Console"
        >
          <Terminal size={14} />
        </button>

        {/* Darcula / IntelliJ Light Theme Switcher */}
        <button
          onClick={onToggleTheme}
          className="p-1.5 rounded-md hover:bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
          title={`Switch to ${theme === "darcula" ? "IntelliJ Light" : "Darcula Dark"} Theme`}
        >
          {theme === "darcula" ? (
            <Sun size={15} className="text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
          ) : (
            <Moon size={15} className="text-[#3574F0] drop-shadow-[0_0_6px_rgba(53,116,240,0.5)]" />
          )}
        </button>
      </div>
    </header>
  );
}
