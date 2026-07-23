import React, { useState } from "react";
import { X, ChevronRight, ChevronLeft, Sparkles, Play, Code2, Globe, Smartphone, Layers, CheckCircle2, HelpCircle } from "lucide-react";
import { AndroidBugdroidIcon } from "./icons/TechIcons";

export function InteractiveTourModal({ isOpen, onClose, onSwitchViewMode, onOpenEmulator, onSelectFile }) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const tourSteps = [
    {
      title: "Welcome to Shubham Sharma's Portfolio! 👋",
      badge: "Welcome Tour",
      icon: <AndroidBugdroidIcon size={24} className="text-[#3DDC84]" />,
      desc: "Experience a unique hybrid portfolio engineered as a fully functional Android Studio IDE workspace & a luxury standalone website.",
      actionLabel: "Start Guided Tour ✨",
      highlight: "Kotlin • Android • IoT Telemetry • AI/ML",
    },
    {
      title: "1. Dual Portfolio Modes (IDE vs Web) 🌐",
      badge: "Mode Switcher",
      icon: <Globe size={24} className="text-[#7F52FF]" />,
      desc: "Toggle anytime between Android Studio IDE Mode 🛠️ (for developers & technical recruiters) and Full Web Mode 🌐 (for general viewing).",
      actionLabel: "Try Web Mode",
      onAction: () => onSwitchViewMode("web"),
      highlight: "Use the top header toggle button anytime!",
    },
    {
      title: "2. Interactive Project File Tree 📁",
      badge: "Code Editor",
      icon: <Code2 size={24} className="text-[#3574F0]" />,
      desc: "Explore Shubham's background, education, key achievements, skills, and AI/ML projects by clicking Kotlin files in the left project tree.",
      actionLabel: "Open ShubhamSharma.kt",
      onAction: () => {
        onSwitchViewMode("ide");
        onSelectFile("about-me");
      },
      highlight: "Click any .kt file to inspect live syntax-highlighted code!",
    },
    {
      title: "3. Android Studio Split View & Layout Preview 🖼️",
      badge: "Layout Canvas",
      icon: <Layers size={24} className="text-amber-400" />,
      desc: "Click 'ic_profile_avatar.xml' in the project tree to open Android Studio Split View — showing XML source code alongside a live Pixel device layout preview!",
      actionLabel: "Preview ic_profile_avatar.xml",
      onAction: () => {
        onSwitchViewMode("ide");
        onSelectFile("profile-image");
      },
      highlight: "Interactive Pixel 8 Pro device frame with zoom controls!",
    },
    {
      title: "4. Pixel AVD Phone Emulator 📱",
      badge: "Live AVD",
      icon: <Smartphone size={24} className="text-emerald-400" />,
      desc: "Click 'Run ▶' or any project card to launch live app screens inside the Pixel 8 Pro AVD Phone Emulator on the right!",
      actionLabel: "Launch AVD Emulator",
      onAction: () => {
        onSwitchViewMode("ide");
        onOpenEmulator("dispenser");
      },
      highlight: "Test Dispenser ERP, OTA Flasher, AI Calorie Counter & 6 more apps!",
    },
    {
      title: "5. Project Case Study Deep Dives 🚀",
      badge: "Case Studies",
      icon: <Sparkles size={24} className="text-[#3DDC84]" />,
      desc: "Click any project card to open a full-screen case study modal complete with metrics, architecture steps, tech stack breakdown, and live telemetry graphics.",
      actionLabel: "Finish Tour & Explore 🎉",
      highlight: "Direct WhatsApp & LinkedIn contact buttons available throughout!",
    },
  ];

  const step = tourSteps[currentStep];

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none">
      <div className="w-full max-w-md p-6 rounded-3xl bg-[#141620] border border-white/15 text-white font-sans shadow-2xl relative space-y-5 overflow-hidden">
        {/* Top Glowing Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 kotlin-gradient-bg rounded-t-3xl" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2 font-mono text-xs font-bold">
            <span className="px-2.5 py-0.5 rounded-full bg-[#3DDC84]/20 text-[#3DDC84] border border-[#3DDC84]/40">
              {step.badge}
            </span>
            <span className="text-slate-400">
              Step {currentStep + 1} of {tourSteps.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
            title="Close Tour"
          >
            <X size={18} />
          </button>
        </div>

        {/* Step Body */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-[#0A0B0E] border border-white/10 shrink-0">
              {step.icon}
            </div>
            <h3 className="text-lg font-extrabold text-white leading-snug">
              {step.title}
            </h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans bg-[#0A0B0E] p-3.5 rounded-2xl border border-white/10">
            {step.desc}
          </p>

          <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold flex items-center space-x-1.5">
            <Sparkles size={13} className="shrink-0" />
            <span className="truncate">{step.highlight}</span>
          </div>
        </div>

        {/* Step Action Button */}
        {step.onAction && (
          <button
            onClick={step.onAction}
            className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold border border-white/20 transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>{step.actionLabel}</span>
            <ChevronRight size={14} />
          </button>
        )}

        {/* Tour Navigation Controls */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold flex items-center space-x-1 transition-all ${
              currentStep === 0
                ? "opacity-40 cursor-not-allowed text-slate-500"
                : "hover:bg-white/10 text-white cursor-pointer"
            }`}
          >
            <ChevronLeft size={14} />
            <span>Previous</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-1.5">
            {tourSteps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStep(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  currentStep === i ? "w-5 bg-[#3DDC84]" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7F52FF] to-[#3574F0] hover:from-[#6C42E0] hover:to-[#2B63D9] text-white font-mono text-xs font-bold shadow-lg transition-all active:scale-95 cursor-pointer flex items-center space-x-1"
          >
            <span>{currentStep === tourSteps.length - 1 ? "Finish Tour" : "Next"}</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
