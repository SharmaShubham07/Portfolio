import React, { useState } from "react";
import { X, Wifi, Battery, Signal, Camera, Play, RefreshCw, CheckCircle2, Sliders, MapPin, Cpu, ShieldCheck, Sparkles, FileText, Activity, Zap, ChevronDown } from "lucide-react";
import { AndroidBugdroidIcon } from "./icons/TechIcons";

export function PhoneEmulatorPanel({
  activeAppId = "dispenser",
  onSelectApp,
  onClose,
  launchToast,
}) {
  const apps = [
    { id: "dispenser", name: "Dispenser ERP", category: "IoT + ERP" },
    { id: "ota", name: "OTA Firmware Flasher", category: "Hardware" },
    { id: "glucometer", name: "Glucometer SDK", category: "Healthcare" },
    { id: "ai_img2img", name: "AI Image Gen", category: "Generative AI" },
    { id: "ai_calorie", name: "AI Calorie Counter", category: "ML Kit Vision" },
    { id: "gpsmap", name: "GPS Map Cam Lite", category: "CameraX" },
    { id: "surveycam", name: "Survey Note Cam", category: "PDF Enterprise" },
    { id: "reverseaudio", name: "Reverse Audio", category: "Compose" },
  ];

  return (
    <aside className="w-full sm:w-[350px] border-l border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col p-3.5 select-none shrink-0 relative glass-panel shadow-2xl">
      {/* Emulator Header */}
      <div className="flex items-center justify-between mb-2.5 text-xs font-mono text-[var(--text-main)] border-b border-[var(--border-color)] pb-2">
        <div className="flex items-center space-x-2 font-bold">
          <AndroidBugdroidIcon size={18} className="text-[#3DDC84] drop-shadow-[0_0_6px_rgba(61,220,132,0.6)]" />
          <span>Pixel_8_Pro_API_34 (AVD)</span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-md hover:bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer"
          title="Close Emulator"
        >
          <X size={15} />
        </button>
      </div>

      {/* Clean Dropdown App Selector (No clipping, no scrollbar artifact) */}
      <div className="mb-2 relative">
        <div className="flex items-center justify-between bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg px-2.5 py-1.5 text-xs font-mono">
          <span className="text-[var(--text-muted)] text-[10px] uppercase font-bold">Target Activity:</span>
          <select
            value={activeAppId}
            onChange={(e) => onSelectApp(e.target.value)}
            className="bg-transparent text-[var(--text-main)] font-semibold text-[11px] focus:outline-none cursor-pointer pr-1"
          >
            {apps.map((app) => (
              <option key={app.id} value={app.id} className="bg-[var(--bg-secondary)] text-[var(--text-main)]">
                {app.name} ({app.category})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Compact Clean 2-Row Pill Selector Grid */}
      <div className="grid grid-cols-2 gap-1 mb-2 font-mono text-[10px]">
        {apps.map((app) => {
          const isActive = activeAppId === app.id;
          return (
            <button
              key={app.id}
              onClick={() => onSelectApp(app.id)}
              className={`px-2 py-1 rounded-md text-left truncate transition-all cursor-pointer font-medium ${
                isActive
                  ? "bg-gradient-to-r from-[#3574F0] to-[#2B63D9] text-white font-bold shadow-sm"
                  : "bg-[var(--bg-primary)]/80 text-[var(--text-muted)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-main)] border border-[var(--border-color)]/60"
              }`}
            >
              <span className="truncate">{app.name}</span>
            </button>
          );
        })}
      </div>

      {/* Launch Toast Notification overlay */}
      {launchToast && (
        <div className="absolute top-28 left-5 right-5 z-50 p-2 rounded-lg bg-slate-950/95 text-emerald-400 font-mono text-[10px] border border-emerald-500/60 shadow-2xl animate-bounce flex items-center space-x-2 backdrop-blur-md">
          <CheckCircle2 size={13} className="shrink-0 text-emerald-400" />
          <span className="truncate font-semibold">{launchToast}</span>
        </div>
      )}

      {/* Phone Hardware Outer Bezel Frame */}
      <div className="flex-1 flex justify-center items-center py-1">
        <div className="w-[275px] h-[500px] bg-slate-950 rounded-[40px] p-3 border-4 border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative flex flex-col justify-between overflow-hidden ring-1 ring-white/20">
          {/* Gloss Reflection Overlay */}
          <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-40 rounded-t-[36px]" />

          {/* Punch Hole Camera Cutout */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full border border-slate-800 z-50 flex items-center justify-center shadow-inner">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
          </div>

          {/* Status Bar */}
          <div className="h-6 px-4 pt-1 flex items-center justify-between text-[10px] text-slate-300 font-sans font-semibold z-40 select-none">
            <span>10:08</span>
            <div className="flex items-center space-x-1.5">
              <Signal size={11} />
              <Wifi size={11} />
              <Battery size={12} />
            </div>
          </div>

          {/* Phone Screen Display Content */}
          <div className="flex-1 my-1 bg-slate-900 rounded-[26px] overflow-hidden flex flex-col text-slate-100 font-sans relative border border-slate-800/80 shadow-inner">
            {activeAppId === "gpsmap" && <GPSMapScreen />}
            {activeAppId === "surveycam" && <SurveyCamScreen />}
            {activeAppId === "reverseaudio" && <ReverseAudioScreen />}
            {activeAppId === "dispenser" && <DispenserERPScreen />}
            {activeAppId === "ota" && <OTAFirmwareScreen />}
            {activeAppId === "glucometer" && <GlucometerScreen />}
            {activeAppId === "ai_img2img" && <AIImageGenScreen />}
            {activeAppId === "ai_calorie" && <AICalorieScreen />}
          </div>

          {/* Bottom Gesture Bar */}
          <div className="h-4 flex items-center justify-center z-40">
            <div className="w-20 h-1 bg-slate-400/70 rounded-full shadow-xs" />
          </div>
        </div>
      </div>
    </aside>
  );
}

// ---------------- APP SCREENS INSIDE EMULATOR ---------------- //

function GPSMapScreen() {
  const [isFlashing, setIsFlashing] = useState(false);
  const [photoCount, setPhotoCount] = useState(14);

  const handleCapture = () => {
    setIsFlashing(true);
    setTimeout(() => {
      setIsFlashing(false);
      setPhotoCount((prev) => prev + 1);
    }, 200);
  };

  return (
    <div className={`flex-1 flex flex-col justify-between p-2.5 transition-colors ${isFlashing ? "bg-white" : "bg-gradient-to-b from-slate-950 to-slate-900"}`}>
      {/* Live Camera Viewport */}
      <div className="flex-1 bg-slate-950 rounded-2xl overflow-hidden relative border border-slate-800 flex flex-col justify-between p-2 shadow-md">
        <div className="flex justify-between items-start text-[9px]">
          <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-md font-mono border border-emerald-500/40 font-semibold">
            CameraX 60FPS
          </span>
          <span className="bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded-md font-mono font-semibold">
            GPS Locked 🎯
          </span>
        </div>

        {/* Geotag Watermark Overlay */}
        <div className="bg-slate-950/85 backdrop-blur-md p-2 rounded-xl text-[9px] border border-white/10 space-y-0.5 shadow-xl">
          <p className="font-bold text-amber-400 text-[10px]">GPS Map Camera Lite</p>
          <p className="text-slate-200">Lat: 21.1702° N | Long: 72.8311° E</p>
          <p className="text-slate-400">Surat, Gujarat, India</p>
          <p className="text-emerald-400 font-mono text-[8px] pt-0.5">
            EXIF_STAMP_SURAT_2026
          </p>
        </div>
      </div>

      {/* Camera Capture Controls */}
      <div className="pt-2 flex items-center justify-between px-3">
        <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-slate-300 font-mono font-bold">
          {photoCount}
        </div>
        <button
          onClick={handleCapture}
          className="w-10 h-10 rounded-full bg-gradient-to-tr from-white to-slate-200 border-2 border-slate-300 flex items-center justify-center shadow-lg active:scale-95 transition-transform cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-400" />
        </button>
        <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-slate-300">
          ⚙
        </div>
      </div>

      {/* AdMob Banner Mockup */}
      <div className="mt-1.5 bg-slate-800/80 p-1 text-center rounded-lg text-[8px] text-slate-400 border border-slate-700/60 font-mono">
        [Google Mobile Ads SDK Banner]
      </div>
    </div>
  );
}

function SurveyCamScreen() {
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    setExported(true);
    setTimeout(() => setExported(false), 2500);
  };

  return (
    <div className="flex-1 p-2.5 bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col justify-between text-[11px]">
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-bold text-sky-400 text-xs">SurveyNoteCam</span>
          <span className="bg-sky-500/20 text-sky-300 text-[9px] px-2 py-0.5 rounded-full font-semibold">Field Survey</span>
        </div>

        <div className="mt-3 space-y-2">
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 shadow-md">
            <span className="text-[9px] text-slate-400 block font-mono">Project Location:</span>
            <span className="font-bold text-slate-100">Industrial Facility #4</span>
          </div>

          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 shadow-md">
            <span className="text-[9px] text-slate-400 block font-mono">Worksite Timesheet:</span>
            <span className="text-emerald-400 font-mono text-[10px] font-semibold">08:30 AM - Active Log</span>
          </div>
        </div>
      </div>

      {exported ? (
        <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] text-center font-bold font-mono">
          ✓ PDF Survey Report Exported!
        </div>
      ) : (
        <button
          onClick={handleExport}
          className="w-full py-2.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white rounded-xl font-bold text-xs shadow-lg flex items-center justify-center space-x-1.5 cursor-pointer"
        >
          <FileText size={14} />
          <span>Export Survey PDF Report</span>
        </button>
      )}
    </div>
  );
}

function ReverseAudioScreen() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex-1 p-2.5 bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col justify-between text-[11px]">
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-bold text-purple-400 text-xs">Reverse Audio Compose</span>
          <span className="bg-purple-500/20 text-purple-300 text-[9px] px-2 py-0.5 rounded-full font-semibold">Compose UI</span>
        </div>

        {/* Audio Waveform visualization */}
        <div className="mt-3 bg-slate-950 p-3 rounded-2xl border border-slate-800 flex items-center justify-center space-x-1.5 h-18 shadow-md">
          {[40, 75, 30, 95, 60, 100, 50, 85, 55, 35, 90, 45].map((h, i) => (
            <div
              key={i}
              className={`w-1.5 bg-gradient-to-t from-purple-600 to-pink-500 rounded-full ${isPlaying ? "animate-pulse" : ""}`}
              style={{ height: isPlaying ? `${Math.max(20, (h * Math.random()).toFixed(0))}%` : `${h}%` }}
            />
          ))}
        </div>

        <div className="mt-3 space-y-1.5">
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>Pitch Shift</span>
            <span className="text-purple-300 font-semibold">1.0x (Original)</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-gradient-to-r from-purple-500 to-pink-500" />
          </div>
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={togglePlay}
          className="flex-1 py-2 bg-slate-800 text-slate-200 rounded-xl text-[10px] font-bold border border-slate-700 cursor-pointer"
        >
          {isPlaying ? "Pause Stream" : "Record Voice"}
        </button>
        <button
          onClick={togglePlay}
          className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-[10px] font-bold shadow-md flex items-center justify-center space-x-1 cursor-pointer"
        >
          <RefreshCw size={12} />
          <span>{isPlaying ? "Reversing..." : "Play Reversed"}</span>
        </button>
      </div>
    </div>
  );
}

function DispenserERPScreen() {
  const [vol, setVol] = useState(420.5);
  const [isDispensing, setIsDispensing] = useState(false);

  const handleDispense = () => {
    setIsDispensing(true);
    setVol((prev) => +(prev + 5.2).toFixed(1));
    setTimeout(() => setIsDispensing(false), 1500);
  };

  return (
    <div className="flex-1 p-2.5 bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col justify-between text-[11px]">
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-bold text-emerald-400 text-xs">Dispenser ERP IoT</span>
          <span className="bg-emerald-500/20 text-emerald-300 text-[9px] px-2 py-0.5 rounded-full font-mono font-semibold">
            MQTT Connected
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 shadow-md">
            <span className="text-[9px] text-slate-400 block font-mono">Flow Rate</span>
            <span className="text-sm font-extrabold text-emerald-400 font-mono mt-0.5 block">
              {isDispensing ? "18.4 L/m" : "0.0 L/m"}
            </span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 shadow-md">
            <span className="text-[9px] text-slate-400 block font-mono">Dispensed Vol</span>
            <span className="text-sm font-extrabold text-sky-400 font-mono mt-0.5 block">{vol} L</span>
          </div>
        </div>

        <div className="mt-3 bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-1 shadow-md">
          <div className="flex justify-between text-[10px]">
            <span className="text-slate-400">Room DB Sync:</span>
            <span className="text-emerald-400 font-mono font-bold">Synced (0 pending)</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-slate-400">MQTT Ping:</span>
            <span className="text-slate-200 font-mono font-bold">18ms</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleDispense}
        className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-bold text-xs shadow-lg cursor-pointer"
      >
        {isDispensing ? "Dispensing Fuel..." : "Dispense Fuel Payload ▶"}
      </button>
    </div>
  );
}

function OTAFirmwareScreen() {
  const [progress, setProgress] = useState(78);
  const [isFlashing, setIsFlashing] = useState(false);

  const handleFlash = () => {
    setIsFlashing(true);
    setProgress(10);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFlashing(false);
          return 100;
        }
        return prev + 15;
      });
    }, 300);
  };

  return (
    <div className="flex-1 p-2.5 bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col justify-between text-[11px]">
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-bold text-amber-400 text-xs">OTA Firmware Flasher</span>
          <span className="bg-amber-500/20 text-amber-300 text-[9px] px-2 py-0.5 rounded-full font-mono font-semibold">USB/MQTT</span>
        </div>

        <div className="mt-3 bg-slate-950 p-3 rounded-2xl border border-slate-800 space-y-2 shadow-md">
          <div className="flex justify-between text-[10px]">
            <span className="text-slate-400">Firmware Binary:</span>
            <span className="text-slate-200 font-mono font-bold">v2.4.1_stable.bin</span>
          </div>

          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-slate-400">{isFlashing ? "Flashing Binary..." : "Flashing Status"}</span>
              <span className="text-amber-400 font-mono font-bold">{progress}%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-center space-x-1.5 text-[9px] text-emerald-400 font-semibold pt-1">
            <ShieldCheck size={12} />
            <span>SHA-256 Checksum Validated</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleFlash}
        disabled={isFlashing}
        className="w-full py-2.5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-xl text-[10px] font-mono font-bold shadow-lg cursor-pointer disabled:opacity-50"
      >
        {isFlashing ? "Flashing MCU..." : "Flash Firmware Binary ▶"}
      </button>
    </div>
  );
}

function GlucometerScreen() {
  const [reading, setReading] = useState(115);

  const handleRead = () => {
    setReading(Math.floor(95 + Math.random() * 30));
  };

  return (
    <div className="flex-1 p-2.5 bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col justify-between text-[11px]">
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-bold text-rose-400 text-xs">Glucometer Health SDK</span>
          <span className="bg-rose-500/20 text-rose-300 text-[9px] px-2 py-0.5 rounded-full font-mono font-semibold">USB OTG</span>
        </div>

        <div className="mt-3 bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-center shadow-md">
          <span className="text-[10px] text-slate-400 block font-mono">Glucose Telemetry</span>
          <span className="text-2xl font-extrabold text-rose-400 font-mono my-1 block">{reading}</span>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full inline-block font-semibold">
            Normal Range (mg/dL)
          </span>
        </div>

        <div className="mt-3 bg-slate-950 p-2 rounded-xl border border-slate-800 text-[10px] flex justify-between">
          <span className="text-slate-400">Room DB Latency:</span>
          <span className="text-slate-200 font-mono font-bold">0.4ms</span>
        </div>
      </div>

      <button
        onClick={handleRead}
        className="w-full py-2.5 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl text-[10px] font-mono font-bold shadow-lg cursor-pointer"
      >
        Sync USB Device Telemetry ▶
      </button>
    </div>
  );
}

function AIImageGenScreen() {
  const [preset, setPreset] = useState("Cyberpunk");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleTransform = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 1200);
  };

  return (
    <div className="flex-1 p-2.5 bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col justify-between text-[11px]">
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center space-x-1.5 text-sky-400 font-bold text-xs">
            <Sparkles size={13} />
            <span>AI Image-to-Image</span>
          </div>
          <span className="bg-sky-500/20 text-sky-300 text-[9px] px-2 py-0.5 rounded-full font-semibold">Gemini API</span>
        </div>

        {/* Side by side original vs AI generated mockup */}
        <div className="mt-3 grid grid-cols-2 gap-2 h-24">
          <div className="bg-slate-950 rounded-xl p-1.5 border border-slate-800 flex flex-col items-center justify-center text-center shadow-md">
            <span className="text-[9px] text-slate-400 mb-1 font-mono">Camera Input</span>
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 text-xs">
              📸
            </div>
          </div>
          <div className="bg-slate-950 rounded-xl p-1.5 border border-sky-500/50 flex flex-col items-center justify-center text-center shadow-md relative overflow-hidden">
            <span className="text-[9px] text-sky-400 mb-1 font-mono font-bold">AI ({preset})</span>
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg ${isGenerating ? "animate-spin" : ""}`}>
              🎨
            </div>
          </div>
        </div>

        <div className="mt-2.5 flex flex-wrap gap-1">
          {["Cyberpunk", "Anime", "Studio"].map((p) => (
            <button
              key={p}
              onClick={() => setPreset(p)}
              className={`text-[9px] px-2 py-0.5 rounded-md font-mono cursor-pointer ${preset === p ? "bg-sky-500 text-white font-bold" : "bg-slate-950 text-slate-400 border border-slate-800"}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleTransform}
        disabled={isGenerating}
        className="w-full py-2.5 bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-white rounded-xl font-bold text-xs shadow-lg cursor-pointer disabled:opacity-50"
      >
        {isGenerating ? "Inferring..." : "Generate AI Image ✨"}
      </button>
    </div>
  );
}

function AICalorieScreen() {
  const [scanned, setScanned] = useState(false);

  const handleScan = () => {
    setScanned(true);
    setTimeout(() => setScanned(false), 2500);
  };

  return (
    <div className="flex-1 p-2.5 bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col justify-between text-[11px]">
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center space-x-1.5 text-emerald-400 font-bold text-xs">
            <Camera size={13} />
            <span>AI Calorie Counter</span>
          </div>
          <span className="bg-emerald-500/20 text-emerald-300 text-[9px] px-2 py-0.5 rounded-full font-semibold">ML Kit</span>
        </div>

        {/* Food Scanner overlay mockup */}
        <div className="mt-3 bg-slate-950 rounded-2xl p-2 border border-slate-800 relative flex flex-col justify-between h-28 shadow-md">
          <div className="absolute inset-2 border-2 border-emerald-400 border-dashed rounded-xl flex items-center justify-center">
            <span className="bg-emerald-500 text-slate-950 text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-lg">
              {scanned ? "Food Classified: Avocado Toast" : "Avocado Toast (96%)"}
            </span>
          </div>
        </div>

        <div className="mt-2.5 bg-slate-950 p-2 rounded-xl border border-slate-800 grid grid-cols-3 gap-1 text-center text-[9px] shadow-md">
          <div>
            <span className="text-slate-400 block font-mono">Calories</span>
            <span className="font-extrabold text-amber-400 text-[11px]">320 kcal</span>
          </div>
          <div>
            <span className="text-slate-400 block font-mono">Protein</span>
            <span className="font-extrabold text-emerald-400 text-[11px]">12g</span>
          </div>
          <div>
            <span className="text-slate-400 block font-mono">Carbs</span>
            <span className="font-extrabold text-sky-400 text-[11px]">30g</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleScan}
        className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-xs shadow-lg cursor-pointer"
      >
        Scan Food Photo 📸
      </button>
    </div>
  );
}
