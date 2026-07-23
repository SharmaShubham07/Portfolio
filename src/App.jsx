import React, { useState, useEffect } from "react";
import { fileStructure, developerInfo } from "./data/portfolioData";
import { getKotlinCodeForFile } from "./utils/codeGenerators";
import { TopNavbar } from "./components/TopNavbar";
import { BreadcrumbsBar } from "./components/BreadcrumbsBar";
import { SidebarFileTree } from "./components/SidebarFileTree";
import { TabBar } from "./components/TabBar";
import { CodeEditorView } from "./components/CodeEditorView";
import { PhoneEmulatorPanel } from "./components/PhoneEmulatorPanel";
import { BottomConsolePanel } from "./components/BottomConsolePanel";
import { BackgroundGlassGlow } from "./components/BackgroundGlassGlow";
import { FullWebsiteView } from "./components/FullWebsiteView";
import { BrushHighlighterCanvas } from "./components/BrushHighlighterCanvas";

export default function App() {
  // View mode state: "ide" | "web"
  const [viewMode, setViewMode] = useState("ide");

  // Theme state: "darcula" | "light"
  const [theme, setTheme] = useState("darcula");

  // Liquid Glass state
  const [glassEnabled, setGlassEnabled] = useState(true);

  // Book Brush Highlighter state
  const [isHighlighterActive, setIsHighlighterActive] = useState(false);

  // File Tabs state (landing Portfolio.kt is default tab #1!)
  const [openTabIds, setOpenTabIds] = useState(["landing", "about-me", "proj-dispenser", "contact"]);
  const [activeFileId, setActiveFileId] = useState("landing");

  // Sidebar Mobile Drawer state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Emulator state
  const [isEmulatorOpen, setIsEmulatorOpen] = useState(true);
  const [activeEmulatorApp, setActiveEmulatorApp] = useState("dispenser");
  const [launchToast, setLaunchToast] = useState("");

  // Bottom Console state
  const [activeConsoleTab, setActiveConsoleTab] = useState("build");
  const [isConsoleOpen, setIsConsoleOpen] = useState(true);

  // Get active file object
  const activeFile = fileStructure.find((f) => f.id === activeFileId) || fileStructure[0];
  const openTabFiles = openTabIds
    .map((id) => fileStructure.find((f) => f.id === id))
    .filter(Boolean);

  // Synchronize Theme attribute to HTML document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Open file handler
  const handleSelectFile = (fileId) => {
    setViewMode("ide");
    if (!openTabIds.includes(fileId)) {
      setOpenTabIds((prev) => [...prev, fileId]);
    }
    setActiveFileId(fileId);

    // If file has a mapped emulator app, switch emulator app!
    const targetFile = fileStructure.find((f) => f.id === fileId);
    if (targetFile && targetFile.emulatorId) {
      setActiveEmulatorApp(targetFile.emulatorId);
    }
  };

  // Close tab handler
  const handleCloseTab = (fileId) => {
    const nextTabs = openTabIds.filter((id) => id !== fileId);
    setOpenTabIds(nextTabs);

    if (activeFileId === fileId) {
      if (nextTabs.length > 0) {
        setActiveFileId(nextTabs[nextTabs.length - 1]);
      } else {
        setActiveFileId(null);
      }
    }
  };

  // "Run ▶" action handler
  const handleRunClick = () => {
    setViewMode("ide");
    // 1. Open Console to Build tab
    setIsConsoleOpen(true);
    setActiveConsoleTab("build");

    // 2. Open AVD Phone Emulator
    setIsEmulatorOpen(true);

    // 3. Trigger Toast notification
    setLaunchToast(`Launching activity: com.shubham.${activeFileId}...`);
    setTimeout(() => {
      setLaunchToast("");
    }, 3000);
  };

  // Launch specific app in emulator
  const handleLaunchInEmulator = (appId) => {
    setViewMode("ide");
    setIsEmulatorOpen(true);
    setActiveEmulatorApp(appId);
    setLaunchToast(`Launching activity in AVD: ${appId}...`);
    setTimeout(() => {
      setLaunchToast("");
    }, 3000);
  };

  // Terminal trigger for contact
  const handleTriggerContact = () => {
    handleSelectFile("contact");
  };

  const currentCodeLines = activeFileId ? getKotlinCodeForFile(activeFileId) : null;

  return (
    <div className={`h-screen w-screen flex flex-col overflow-hidden relative select-none ${glassEnabled ? "glass-enabled" : ""}`}>
      {/* Background Liquid Glass Glow */}
      <BackgroundGlassGlow enabled={glassEnabled} />

      {/* Book Highlighter & Reader Summary Tool Overlay */}
      <BrushHighlighterCanvas
        isActive={isHighlighterActive}
        onToggleActive={() => setIsHighlighterActive(!isHighlighterActive)}
      />

      {/* Top Android Studio Titlebar / Navbar */}
      <TopNavbar
        activeFileName={activeFile ? activeFile.name : ""}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "darcula" ? "light" : "darcula")}
        glassEnabled={glassEnabled}
        onToggleGlass={() => setGlassEnabled(!glassEnabled)}
        isEmulatorOpen={isEmulatorOpen}
        onToggleEmulator={() => setIsEmulatorOpen(!isEmulatorOpen)}
        onRunClick={handleRunClick}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isConsoleOpen={isConsoleOpen}
        onToggleConsole={() => setIsConsoleOpen(!isConsoleOpen)}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode(viewMode === "ide" ? "web" : "ide")}
        isHighlighterActive={isHighlighterActive}
        onToggleHighlighter={() => setIsHighlighterActive(!isHighlighterActive)}
      />

      {/* RENDER MODE SWITCH: Full Standalone Website Mode vs Android Studio IDE Mode */}
      {viewMode === "web" ? (
        <FullWebsiteView
          onSwitchToIDE={() => setViewMode("ide")}
          onLaunchInEmulator={handleLaunchInEmulator}
          onSelectFile={handleSelectFile}
        />
      ) : (
        /* IDE Main Middle Workspace */
        <div className="flex-1 flex overflow-hidden relative z-10">
          {/* Left Sidebar: Project File Tree */}
          <SidebarFileTree
            files={fileStructure}
            activeFileId={activeFileId}
            onSelectFile={handleSelectFile}
            isOpen={isSidebarOpen}
            onCloseMobile={() => setIsSidebarOpen(false)}
          />

          {/* Center Area: Tabs + Breadcrumbs + Code Editor */}
          <main className="flex-1 flex flex-col overflow-hidden bg-[var(--bg-primary)]">
            {/* Tab Bar */}
            <TabBar
              openTabFiles={openTabFiles}
              activeFileId={activeFileId}
              onSelectTab={setActiveFileId}
              onCloseTab={handleCloseTab}
            />

            {/* Breadcrumbs Bar */}
            <BreadcrumbsBar activeFile={activeFile} />

            {/* Code Editor Content View */}
            <CodeEditorView
              activeFile={activeFile}
              codeLines={currentCodeLines}
              onSelectFile={handleSelectFile}
              onLaunchInEmulator={handleLaunchInEmulator}
              onRunClick={handleRunClick}
            />

            {/* Bottom Console Panel (Build / Logcat / Terminal) */}
            <BottomConsolePanel
              activeTab={activeConsoleTab}
              onSelectConsoleTab={setActiveConsoleTab}
              isOpen={isConsoleOpen}
              onToggleOpen={() => setIsConsoleOpen(!isConsoleOpen)}
              onTriggerContact={handleTriggerContact}
              onRunClick={handleRunClick}
            />
          </main>

          {/* Right Docked Panel: Pixel AVD Phone Emulator */}
          {isEmulatorOpen && (
            <PhoneEmulatorPanel
              activeAppId={activeEmulatorApp}
              onSelectApp={setActiveEmulatorApp}
              onClose={() => setIsEmulatorOpen(false)}
              launchToast={launchToast}
            />
          )}
        </div>
      )}
    </div>
  );
}
