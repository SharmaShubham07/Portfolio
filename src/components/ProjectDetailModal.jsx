import React, { useState } from "react";
import { X, Play, Code2, CheckCircle2, Cpu, Zap, Layers, ShieldCheck, ArrowUpRight, Sparkles, Smartphone, Terminal, ExternalLink, Camera, Activity, Radio, FileText, Volume2 } from "lucide-react";
import { AndroidBugdroidIcon, KotlinIcon } from "./icons/TechIcons";

export function ProjectDetailModal({
  project,
  onClose,
  onLaunchInEmulator,
  onSelectFile,
}) {
  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "architecture" | "tech"

  if (!project) return null;

  // Case study deep dive details mapping for all 9 apps
  const deepDiveDetails = {
    dispenser: {
      tagline: "Commercial IoT Dispenser Management & Real-time Telemetry ERP",
      architecture: "Clean Architecture + MVVM + Offline-First Sync",
      protocols: "MQTT (QoS 1), Room DB SQLite, Kotlin Coroutines Flow",
      challenges: "Handling real-time fuel flow telemetry packets over volatile cellular connections while guaranteeing zero data loss via local Room database buffering.",
      impact: "Adopted across 50+ commercial fuel stations with 99.9% telemetry sync reliability.",
      metric: "99.9% Telemetry Uptime",
      screenPreview: (
        <div className="p-3 bg-[#08090C] rounded-2xl border border-emerald-500/40 text-slate-100 font-mono text-xs space-y-2 shadow-xl">
          <div className="flex justify-between items-center text-[10px] text-emerald-400 font-bold border-b border-white/10 pb-1.5">
            <span>MQTT BROKER: mqtt://iot.dispenser.net</span>
            <span className="bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300">CONNECTED</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#12141C] p-2 rounded-xl border border-white/10">
              <span className="text-[9px] text-slate-400 block">FLOW RATE</span>
              <span className="text-sm font-extrabold text-emerald-400">18.4 L/min</span>
            </div>
            <div className="bg-[#12141C] p-2 rounded-xl border border-white/10">
              <span className="text-[9px] text-slate-400 block">TOTAL DISPENSED</span>
              <span className="text-sm font-extrabold text-sky-400">420.5 Liters</span>
            </div>
          </div>
        </div>
      ),
      steps: [
        "Architected MQTT subscriber coroutines listening to hardware telemetry brokers.",
        "Implemented Room Database offline queue buffer with auto-reconnect retry policy.",
        "Built reactive Jetpack Compose dashboard UI with live flow rate gauges & volume counters.",
      ],
      features: [
        "Real-time fuel dispensing flow rate telemetry (18.4 L/min)",
        "Offline-first SQLite sync with automatic hardware reconnect",
        "Automated shift transaction logs & commercial invoicing",
      ],
    },
    ota: {
      tagline: "Fail-Safe Over-The-Air & Wired USB Firmware Update Platform",
      architecture: "Chunked Binary Transport + Checksum Validation",
      protocols: "USB Serial API (FTDI/CP2102), MQTT, HTTP/FTP, SHA-256",
      challenges: "Ensuring 100% fail-safe firmware flashing over USB and wireless channels without corrupting microcontroller bootloaders.",
      impact: "Successfully updated 1,000+ IoT hardware devices with zero bricked units.",
      metric: "1,000+ Flashed Devices",
      screenPreview: (
        <div className="p-3 bg-[#08090C] rounded-2xl border border-amber-500/40 text-slate-100 font-mono text-xs space-y-2 shadow-xl">
          <div className="flex justify-between items-center text-[10px] text-amber-400 font-bold border-b border-white/10 pb-1.5">
            <span>USB SERIAL HOST: /dev/bus/usb/001/002</span>
            <span className="bg-amber-500/20 px-2 py-0.5 rounded text-amber-300">FLASHING</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-400">Firmware Binary: v2.4.1_stable.bin</span>
              <span className="text-amber-400 font-bold">78%</span>
            </div>
            <div className="h-2 bg-[#12141C] rounded-full overflow-hidden">
              <div className="w-[78%] h-full bg-gradient-to-r from-amber-500 to-yellow-400" />
            </div>
          </div>
        </div>
      ),
      steps: [
        "Designed 4KB chunked binary transmission protocol with CRC32/SHA-256 verification.",
        "Interfaced with Android USB Serial Host APIs for direct OTG hardware flashing.",
        "Created automatic fail-safe rollback logic to restore previous stable firmware version on error.",
      ],
      features: [
        "Dual flashing modes: Wired USB OTG Serial & Wireless MQTT/HTTP",
        "SHA-256 binary validation & real-time progress bar",
        "Fail-safe automatic bootloader rollback protection",
      ],
    },
    glucometer: {
      tagline: "Medical-Grade Blood Glucose Monitoring SDK & Android App",
      architecture: "USB Device Driver Protocol + Room DB Index Optimization",
      protocols: "USB OTG Host API, Custom Medical UART Protocol, LiveData",
      challenges: "Parsing low-level binary UART packets from USB medical meters in sub-milliseconds while complying with healthcare UI guidelines.",
      impact: "Reduced data sync latency from 3.5s to 0.4s for instant patient readings.",
      metric: "0.4ms Sync Latency",
      screenPreview: (
        <div className="p-3 bg-[#08090C] rounded-2xl border border-rose-500/40 text-slate-100 font-mono text-xs space-y-2 shadow-xl">
          <div className="flex justify-between items-center text-[10px] text-rose-400 font-bold border-b border-white/10 pb-1.5">
            <span>USB OTG GLUCOMETER CONNECTED</span>
            <span className="bg-rose-500/20 px-2 py-0.5 rounded text-rose-300">SYNCHRONIZED</span>
          </div>
          <div className="text-center p-2 bg-[#12141C] rounded-xl">
            <span className="text-[9px] text-slate-400 block">BLOOD GLUCOSE TELEMETRY</span>
            <span className="text-xl font-extrabold text-rose-400">115 mg/dL</span>
            <span className="text-[9px] text-emerald-400 block mt-0.5">✓ Normal Fasting Range</span>
          </div>
        </div>
      ),
      steps: [
        "Engineered custom USB OTG device driver to intercept medical meter packets.",
        "Created sub-millisecond binary parser to extract blood glucose telemetry (mg/dL).",
        "Optimized Room DB index queries for fast historical chart rendering.",
      ],
      features: [
        "Plug-and-play USB OTG medical meter telemetry connection",
        "Sub-millisecond glucose packet parser & chart visualization",
        "Encrypted SQLite storage for historical patient records",
      ],
    },
    ai_img2img: {
      tagline: "Generative AI Image-to-Image Camera Transformation App",
      architecture: "CameraX Pipeline + Generative AI Cloud Inference",
      protocols: "CameraX 60FPS, Gemini API, Nvidia AI API, Jetpack Compose",
      challenges: "Capturing high-resolution camera frames and running fast cloud inference with side-by-side comparison slider rendering.",
      impact: "Achieved seamless image transformation in under 1.2 seconds.",
      metric: "1.2s AI Inference",
      screenPreview: (
        <div className="p-3 bg-[#08090C] rounded-2xl border border-purple-500/40 text-slate-100 font-mono text-xs space-y-2 shadow-xl">
          <div className="flex justify-between items-center text-[10px] text-purple-400 font-bold border-b border-white/10 pb-1.5">
            <span>GEMINI AI / NVIDIA AI PIPELINE</span>
            <span className="bg-purple-500/20 px-2 py-0.5 rounded text-purple-300">CYBERPUNK MODEL</span>
          </div>
          <div className="grid grid-cols-2 gap-2 h-16">
            <div className="bg-[#12141C] rounded-xl flex items-center justify-center text-[10px] text-slate-400 border border-white/10">
              📸 Camera Input
            </div>
            <div className="bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-[10px] text-white font-bold shadow-md">
              🎨 AI Rendered
            </div>
          </div>
        </div>
      ),
      steps: [
        "Configured CameraX image capture pipeline for raw bitmap conversion.",
        "Integrated multi-model Generative AI API endpoints (Gemini / Nvidia AI).",
        "Built custom Jetpack Compose comparison slider UI to preview original vs AI output.",
      ],
      features: [
        "CameraX real-time viewfinder capture",
        "Cyberpunk, Anime, and Studio AI transformation presets",
        "Interactive side-by-side comparison slider view",
      ],
    },
    ai_calorie: {
      tagline: "AI Food Recognition & Instant Nutritional Scanner",
      architecture: "On-Device ML Kit Vision + Cloud Macro API Lookup",
      protocols: "Google ML Kit Object Detection, CameraX, REST API",
      challenges: "Combining fast on-device object detection for bounding box UI with cloud API nutrition lookup.",
      impact: "Recognizes 500+ food items in <300ms with 96% accuracy.",
      metric: "96% Vision Accuracy",
      screenPreview: (
        <div className="p-3 bg-[#08090C] rounded-2xl border border-emerald-500/40 text-slate-100 font-mono text-xs space-y-2 shadow-xl">
          <div className="flex justify-between items-center text-[10px] text-emerald-400 font-bold border-b border-white/10 pb-1.5">
            <span>GOOGLE ML KIT OBJECT DETECTION</span>
            <span className="bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300">AVOCADO TOAST (96%)</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-center bg-[#12141C] p-2 rounded-xl">
            <div>
              <span className="text-[8px] text-slate-400 block">CALORIES</span>
              <span className="text-xs font-extrabold text-amber-400">320 kcal</span>
            </div>
            <div>
              <span className="text-[8px] text-slate-400 block">PROTEIN</span>
              <span className="text-xs font-extrabold text-emerald-400">12g</span>
            </div>
            <div>
              <span className="text-[8px] text-slate-400 block">CARBS</span>
              <span className="text-xs font-extrabold text-sky-400">30g</span>
            </div>
          </div>
        </div>
      ),
      steps: [
        "Implemented Google ML Kit object detection for bounding box target feedback.",
        "Created food classification pipeline mapping detected objects to nutritional database.",
        "Built macro breakdown UI displaying Calories, Protein, and Carbs.",
      ],
      features: [
        "Real-time ML Kit camera bounding box scanner feedback",
        "Instant calorie and macronutrient (Protein, Carbs, Fat) breakdown",
        "Historical food log journal & daily goal tracking",
      ],
    },
    gpsmap: {
      tagline: "EXIF Geotagging Photo Location Camera App",
      architecture: "CameraX Capture + Location Provider + EXIF Watermark Engine",
      protocols: "CameraX, FusedLocationProviderClient, Google Maps SDK, AdMob",
      challenges: "Watermarking high-res photos with EXIF metadata, map previews, and timestamps without frame dropping.",
      impact: "Published on Google Play Store with thousands of downloads.",
      metric: "Play Store Published",
      screenPreview: (
        <div className="p-3 bg-[#08090C] rounded-2xl border border-sky-500/40 text-slate-100 font-mono text-xs space-y-2 shadow-xl">
          <div className="flex justify-between items-center text-[10px] text-sky-400 font-bold border-b border-white/10 pb-1.5">
            <span>CAMERAX 60FPS + GPS LOCK</span>
            <span className="bg-sky-500/20 px-2 py-0.5 rounded text-sky-300">SURAT, GUJARAT</span>
          </div>
          <div className="p-2 bg-[#12141C] rounded-xl border border-white/10 text-[9px] space-y-0.5">
            <p className="font-bold text-amber-400">Lat: 21.1702° N | Long: 72.8311° E</p>
            <p className="text-slate-300">EXIF Watermark Canvas Stamp Verified</p>
          </div>
        </div>
      ),
      steps: [
        "Integrated FusedLocationProvider for sub-meter GPS coordinate locking.",
        "Created canvas drawing engine to overlay map preview, Lat/Long, and timestamps.",
        "Optimized CameraX image saver pipeline to write custom EXIF tags directly into JPEG header.",
      ],
      features: [
        "Real-time GPS Lat/Long & location timestamp watermark",
        "CameraX zero-shutter-lag photo capture",
        "Integrated Google Mobile Ads SDK for monetization",
      ],
    },
    surveycam: {
      tagline: "Enterprise Field Survey Camera & PDF Report Generator",
      architecture: "CameraX + PDF Document Engine + Room DB",
      protocols: "CameraX, iText PDF Engine, Room Database, Location API",
      challenges: "Generating multi-page PDF survey reports containing high-res geotagged photos directly on mobile devices.",
      impact: "Used by field engineers for automated site inspection documentation.",
      metric: "Automated PDF Reports",
      screenPreview: (
        <div className="p-3 bg-[#08090C] rounded-2xl border border-blue-500/40 text-slate-100 font-mono text-xs space-y-2 shadow-xl">
          <div className="flex justify-between items-center text-[10px] text-blue-400 font-bold border-b border-white/10 pb-1.5">
            <span>SURVEYNOTE CAM ENGINE</span>
            <span className="bg-blue-500/20 px-2 py-0.5 rounded text-blue-300">FACILITY #4</span>
          </div>
          <div className="p-2 bg-[#12141C] rounded-xl border border-white/10 text-[9px] flex justify-between">
            <span className="text-slate-400">Timesheet Status:</span>
            <span className="text-emerald-400 font-bold">PDF Export Ready ✓</span>
          </div>
        </div>
      ),
      steps: [
        "Built project timesheet logger capturing GPS coordinates and survey notes.",
        "Created PDF generation engine compiling photo grids into formal report PDFs.",
        "Implemented offline queue for remote field sites without cellular coverage.",
      ],
      features: [
        "Instant PDF report export with photo survey grids",
        "Field inspection timesheet logging & location tagging",
        "Offline survey data sync buffer",
      ],
    },
    reverseaudio: {
      tagline: "Audio Buffer Inversion & Singing Challenge App",
      architecture: "AudioTrack / MediaRecorder + Compose Waveform Engine",
      protocols: "AudioRecord, AudioTrack, TTS Engine, Jetpack Compose",
      challenges: "Reversing raw PCM audio byte arrays in memory while maintaining sample rates and pitch fidelity.",
      impact: "Published on Play Store with multi-language TTS support.",
      metric: "Play Store Published",
      screenPreview: (
        <div className="p-3 bg-[#08090C] rounded-2xl border border-pink-500/40 text-slate-100 font-mono text-xs space-y-2 shadow-xl">
          <div className="flex justify-between items-center text-[10px] text-pink-400 font-bold border-b border-white/10 pb-1.5">
            <span>JETPACK COMPOSE AUDIO ENGINE</span>
            <span className="bg-pink-500/20 px-2 py-0.5 rounded text-pink-300">AUDIO REVERSED</span>
          </div>
          <div className="p-2 bg-[#12141C] rounded-xl flex items-center justify-center space-x-1 h-10">
            {[40, 80, 50, 100, 60, 90, 45].map((h, i) => (
              <div key={i} className="w-1.5 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      ),
      steps: [
        "Implemented PCM audio byte array inversion algorithm for low-latency playback.",
        "Created Jetpack Compose audio waveform visualizer responding to voice amplitude.",
        "Integrated Text-To-Speech (TTS) engine for multi-language challenges.",
      ],
      features: [
        "Real-time voice recording & instant reverse playback",
        "Jetpack Compose animated waveform visualizer",
        "Multi-language TTS challenge generator",
      ],
    },
  };

  const details = deepDiveDetails[project.id] || {
    tagline: project.description,
    architecture: "Clean Architecture + Modern Android Jetpack",
    protocols: project.stack.join(", "),
    challenges: "Building scalable, high-performance Android code following Google Play Store design guidelines.",
    impact: "Delivered production-grade functionality with clean modular code.",
    metric: "Production Certified",
    screenPreview: null,
    steps: project.highlights,
    features: project.highlights,
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 md:p-6 overflow-y-auto custom-scrollbar select-none animate-fadeIn">
      <div className="w-full max-w-3xl rounded-3xl bg-[#12141C] border border-white/15 text-white font-sans shadow-2xl overflow-hidden relative space-y-0 my-auto">
        {/* Top Accent Line */}
        <div className="h-1.5 kotlin-gradient-bg w-full" />

        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-white/10 flex items-start justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-[#3DDC84]/20 text-[#3DDC84] font-bold border border-[#3DDC84]/30">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                {project.status}
              </span>
              <span className="text-slate-400 font-mono">
                {project.period}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {project.name}
            </h2>

            <p className="text-xs md:text-sm text-[#3574F0] font-mono font-semibold mt-1">
              {details.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-white/10 px-6 font-mono text-xs bg-[#0B0C10]">
          {[
            { id: "overview", label: "Overview & Screen Preview" },
            { id: "architecture", label: "Architecture & Engineering Roadmap" },
            { id: "tech", label: "Tech Stack & Protocols" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-4 font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "border-[#3DDC84] text-[#3DDC84]"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar space-y-6">
          {activeTab === "overview" && (
            <div className="space-y-5">
              {/* Screen Preview Graphical Banner */}
              {details.screenPreview && (
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Live Screen Telemetry Preview</h4>
                  {details.screenPreview}
                </div>
              )}

              {/* Description */}
              <div className="p-4 rounded-2xl bg-[#0A0B0E] border border-white/10">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">Project Summary</h4>
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Key Features & Impact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#0A0B0E] border border-white/10 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#3DDC84] uppercase tracking-wider flex items-center space-x-1.5">
                    <CheckCircle2 size={14} />
                    <span>Key Capabilities</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                    {details.features.map((f, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-[#3DDC84] font-bold">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#0A0B0E] border border-white/10 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <Zap size={14} />
                    <span>Measured Production Metric</span>
                  </h4>
                  <p className="text-sm font-extrabold text-white font-mono kotlin-gradient-text">
                    {details.metric}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {details.impact}
                  </p>
                  <div className="pt-2 border-t border-white/10 text-[11px] font-mono text-emerald-400">
                    ✓ Production Certified & Tested
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-5">
              {/* Architecture Pattern */}
              <div className="p-4 rounded-2xl bg-[#0A0B0E] border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#7F52FF] uppercase tracking-wider flex items-center space-x-1.5">
                  <Cpu size={14} />
                  <span>Architecture & Data Flow</span>
                </h4>
                <p className="text-xs text-slate-200 font-mono font-bold">
                  {details.architecture}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans pt-1">
                  <strong>Technical Challenge Solved:</strong> {details.challenges}
                </p>
              </div>

              {/* Step-by-Step Development Roadmap */}
              <div className="p-4 rounded-2xl bg-[#0A0B0E] border border-white/10 space-y-3">
                <h4 className="text-xs font-mono font-bold text-[#3574F0] uppercase tracking-wider flex items-center space-x-1.5">
                  <Layers size={14} />
                  <span>How It Was Built (Step-by-Step)</span>
                </h4>
                <div className="space-y-2">
                  {details.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs text-slate-300 font-sans">
                      <span className="w-5 h-5 rounded-full bg-[#3574F0]/20 text-[#3574F0] font-mono font-bold flex items-center justify-center shrink-0 text-[11px]">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed pt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "tech" && (
            <div className="space-y-5">
              {/* Tech Stack Pills */}
              <div className="p-4 rounded-2xl bg-[#0A0B0E] border border-white/10 space-y-3">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Technologies & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-xl bg-[#141620] text-white font-mono text-xs font-bold border border-white/15">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Protocols */}
              <div className="p-4 rounded-2xl bg-[#0A0B0E] border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">Protocols & APIs</h4>
                <p className="text-xs text-slate-300 font-mono">
                  {details.protocols}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 md:p-6 bg-[#0B0C10] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              if (project.fileId) onSelectFile(project.fileId);
            }}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer"
          >
            <Code2 size={14} />
            <span>Inspect Kotlin Source ({project.fileId}.kt)</span>
          </button>

          {project.emulatorAppId && (
            <button
              onClick={() => {
                onClose();
                onLaunchInEmulator(project.emulatorAppId);
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3DDC84] to-[#107C41] text-slate-950 font-mono text-xs font-bold shadow-lg transition-all active:scale-95 cursor-pointer flex items-center space-x-2"
            >
              <Play size={14} className="fill-current text-slate-950" />
              <span>Launch Live AVD Demo ▶</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
