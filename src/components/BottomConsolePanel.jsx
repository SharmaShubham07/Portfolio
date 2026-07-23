import React, { useState, useEffect, useRef } from "react";
import { Terminal, CheckCircle2, ChevronUp, ChevronDown, Trash2, Search, X, Play, ShieldAlert, Cpu } from "lucide-react";
import { defaultLogcatEntries, achievementsData, developerInfo } from "../data/portfolioData";
import { AndroidBugdroidIcon } from "./icons/TechIcons";

export function BottomConsolePanel({
  activeTab,
  onSelectConsoleTab,
  isOpen,
  onToggleOpen,
  onTriggerContact,
  onRunClick,
}) {
  // Logcat state
  const [logFilter, setLogFilter] = useState("ALL");
  const [logSearch, setLogSearch] = useState("");
  const [logList, setLogList] = useState(defaultLogcatEntries);

  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "system", text: 'Android Studio Embedded Terminal (v2026.1)' },
    { type: "system", text: 'Type "help" or "contact" or "skills" to execute CLI queries.' },
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (activeTab === "terminal" && terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalHistory, activeTab]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { type: "input", text: `shubham@android-studio:~$ ${cmd}` }];
    const lower = cmd.toLowerCase();

    if (lower === "help") {
      newHistory.push({
        type: "output",
        text: `Available Terminal Commands:
  contact          - View Shubham's contact details & open form
  contact --email  - Output email query & focus contact file
  skills           - Print Kotlin, Android, IoT & AI/ML tech stack
  projects         - List all 9 production & AI applications
  run              - Launch build & start Pixel AVD emulator
  clear            - Clear terminal screen
  socials          - Print LinkedIn profile link
  whoami           - Print developer bio overview`,
      });
    } else if (lower === "contact" || lower === "contact --email") {
      newHistory.push({
        type: "output",
        text: `[Contact Controller]
  LinkedIn: ${developerInfo.linkedin}
  Location: ${developerInfo.location}
  Focusing Contact.kt editor tab...`,
      });
      if (onTriggerContact) onTriggerContact();
    } else if (lower === "skills") {
      newHistory.push({
        type: "output",
        text: `[Tech Stack Competencies]
  Languages : Kotlin, Java, Python, React Native
  Android   : Jetpack Compose, ViewModel, Room DB, Coroutines, CameraX
  IoT & Net : MQTT, WebSocket, TCP/IP, USB OTG Communication
  AI / ML   : Google ML Kit (on-device), Generative AI APIs (Gemini, Nvidia)`,
      });
    } else if (lower === "projects") {
      newHistory.push({
        type: "output",
        text: `[Projects Catalog]
  1. Dispenser ERP Application (MQTT + Room DB)
  2. OTA Firmware Update App (USB Serial + MQTT/HTTP Flashing)
  3. Glucometer SDK (Medical OTG Real-time Telemetry)
  4. GPS Map Camera Lite (Geotagging + AdMob)
  5. Survey Cam / SurveyNoteCam (Field Reports + PDF)
  6. Reverse Audio / Singing Challenge (Compose Audio Waveform)
  7. AI Image-to-Image Generator (Generative AI APIs)
  8. AI Calorie Counter (ML Kit On-Device Vision)
  9. AI-Integrated Apps (Modular AI Framework)`,
      });
    } else if (lower === "run") {
      newHistory.push({
        type: "output",
        text: `BUILD SUCCESSFUL in 1.42s. Deploying APK to Pixel AVD...`,
      });
      if (onRunClick) onRunClick();
    } else if (lower === "clear") {
      setTerminalHistory([]);
      setInputVal("");
      return;
    } else if (lower === "socials" || lower === "linkedin") {
      newHistory.push({
        type: "output",
        text: `LinkedIn: ${developerInfo.linkedin}`,
      });
    } else if (lower === "whoami") {
      newHistory.push({
        type: "output",
        text: `${developerInfo.name} - ${developerInfo.title} (${developerInfo.location})`,
      });
    } else {
      newHistory.push({
        type: "output",
        text: `bash: command not found: ${cmd}. Type "help" for a list of commands.`,
      });
    }

    setTerminalHistory(newHistory);
    setInputVal("");
  };

  const filteredLogs = logList.filter((log) => {
    if (logFilter !== "ALL" && log.level !== logFilter) return false;
    if (logSearch && !log.msg.toLowerCase().includes(logSearch.toLowerCase()) && !log.tag.toLowerCase().includes(logSearch.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div
      className={`border-t border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col font-mono text-xs select-none transition-all duration-200 glass-panel ${
        isOpen ? "h-52 md:h-60" : "h-7"
      }`}
    >
      {/* Console Tab Header Bar */}
      <div className="h-7 border-b border-[var(--border-color)] px-3 flex items-center justify-between bg-[var(--bg-header)]/60 text-[var(--text-muted)] shrink-0">
        {/* Console Tabs */}
        <div className="flex items-center space-x-1">
          {[
            { id: "build", label: "Build Output", icon: CheckCircle2 },
            { id: "logcat", label: "Logcat", icon: Cpu },
            { id: "terminal", label: "Terminal", icon: Terminal },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => {
                onSelectConsoleTab(id);
                if (!isOpen) onToggleOpen();
              }}
              className={`px-2.5 py-1 rounded text-[11px] flex items-center space-x-1.5 transition-colors cursor-pointer ${
                activeTab === id && isOpen
                  ? "bg-[var(--bg-tertiary)] text-[var(--text-main)] font-semibold border-b-2 border-b-[#3574F0]"
                  : "hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-main)]"
              }`}
            >
              <Icon size={12} className={id === "build" ? "text-emerald-400" : ""} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Console Actions (Collapse, Clear) */}
        <div className="flex items-center space-x-2">
          {activeTab === "logcat" && (
            <button
              onClick={() => setLogList([])}
              className="p-1 rounded hover:bg-[var(--bg-tertiary)] hover:text-rose-400 transition-colors"
              title="Clear Logcat"
            >
              <Trash2 size={12} />
            </button>
          )}

          <button
            onClick={onToggleOpen}
            className="p-1 rounded hover:bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
            title={isOpen ? "Collapse Panel" : "Expand Panel"}
          >
            {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </button>
        </div>
      </div>

      {/* Console Tab Contents */}
      {isOpen && (
        <div className="flex-1 overflow-hidden flex flex-col p-2 bg-[var(--bg-primary)] text-[var(--text-main)]">
          {/* TAB 1: BUILD OUTPUT */}
          {activeTab === "build" && (
            <div className="flex-1 overflow-y-auto p-2 space-y-1.5 custom-scrollbar text-[11px]">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold border-b border-[var(--border-color)] pb-1">
                <CheckCircle2 size={16} />
                <span>BUILD SUCCESSFUL in 1.42s (0 errors, 0 warnings)</span>
              </div>

              <div className="space-y-0.5 text-[var(--text-muted)] font-mono">
                <p className="text-emerald-400/80">&gt; Task :app:preBuild UP-TO-DATE</p>
                <p className="text-emerald-400/80">&gt; Task :app:compileDebugKotlin (Kotlin 2.0.0 Compiler)</p>
                <p>&gt; Task :app:processDebugResources</p>
                <p>&gt; Task :app:packageDebug</p>
                <p>&gt; Task :app:installDebug SUCCESSFUL</p>
                <p className="text-[var(--accent-green)] mt-2">
                  ✓ Target AVD Pixel_8_Pro_API_34 connected over ADB local host.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: LOGCAT */}
          {activeTab === "logcat" && (
            <div className="flex-1 flex flex-col overflow-hidden text-[11px]">
              {/* Logcat Filter Toolbar */}
              <div className="flex items-center space-x-2 mb-2 shrink-0 pb-1 border-b border-[var(--border-color)]">
                <div className="flex items-center bg-[var(--bg-tertiary)] rounded px-2 py-0.5 border border-[var(--border-color)] flex-1 max-w-xs">
                  <Search size={11} className="text-[var(--text-muted)] mr-1" />
                  <input
                    type="text"
                    placeholder="Filter Logcat tag or msg..."
                    value={logSearch}
                    onChange={(e) => setLogSearch(e.target.value)}
                    className="w-full bg-transparent text-[11px] text-[var(--text-main)] focus:outline-none placeholder-[var(--text-muted)]"
                  />
                </div>

                <div className="flex items-center space-x-1 text-[10px]">
                  {["ALL", "INFO", "DEBUG", "WARN"].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setLogFilter(lvl)}
                      className={`px-2 py-0.5 rounded cursor-pointer ${
                        logFilter === lvl
                          ? "bg-[#3574F0] text-white font-bold"
                          : "bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Logcat Stream Output */}
              <div className="flex-1 overflow-y-auto space-y-1 font-mono custom-scrollbar">
                {filteredLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start space-x-2 hover:bg-[var(--bg-secondary)] px-1 rounded">
                    <span className="text-[var(--text-muted)] opacity-60 text-[10px] shrink-0">
                      2026-07-23 10:08:42
                    </span>
                    <span
                      className={`font-bold px-1 rounded text-[9px] shrink-0 ${
                        log.level === "INFO"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : log.level === "DEBUG"
                          ? "bg-sky-500/20 text-sky-400"
                          : "bg-amber-500/20 text-amber-400"
                      }`}
                    >
                      {log.level}
                    </span>
                    <span className="text-[var(--accent-orange)] font-semibold shrink-0">
                      {log.tag}:
                    </span>
                    <span className="text-[var(--text-main)] truncate">{log.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TERMINAL */}
          {activeTab === "terminal" && (
            <div className="flex-1 flex flex-col overflow-hidden text-[11px] font-mono">
              <div className="flex-1 overflow-y-auto space-y-1 p-1 custom-scrollbar">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="whitespace-pre-wrap">
                    {item.type === "input" ? (
                      <span className="text-[#569CD6] font-semibold">{item.text}</span>
                    ) : item.type === "system" ? (
                      <span className="text-[var(--accent-green)]">{item.text}</span>
                    ) : (
                      <span className="text-[var(--text-main)] opacity-90">{item.text}</span>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Form Input Prompt */}
              <form onSubmit={handleCommandSubmit} className="flex items-center space-x-2 pt-1 border-t border-[var(--border-color)] shrink-0">
                <span className="text-[#569CD6] font-bold shrink-0">shubham@android-studio:~$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type 'help' or 'contact'..."
                  className="flex-1 bg-transparent text-[var(--text-main)] focus:outline-none text-[11px]"
                  autoFocus
                />
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
