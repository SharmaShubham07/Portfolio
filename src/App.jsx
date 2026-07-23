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
import { InteractiveTourModal } from "./components/InteractiveTourModal";

export default function App() {
  // View mode state: "ide" | "web"
  const [viewMode, setViewMode] = useState("ide");

  // Theme state: "darcula" | "light"
  const [theme, setTheme] = useState("darcula");

  // Liquid Glass state
  const [glassEnabled, setGlassEnabled] = useState(true);

  // Guided Tour state
  const [isTourOpen, setIsTourOpen] = useState(false);

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
    setIsSidebarOpen(false);
  };

  // Close tab handler
  const handleCloseTab = (e, fileId) => {
    e.stopPropagation();
    if (openTabIds.length === 1) return; // keep at least 1 tab open

    const newOpenTabs = openTabIds.filter((id) => id !== fileId);
    setOpenTabIds(newOpenTabs);

    if (activeFileId === fileId) {
      setActiveFileId(newOpenTabs[newOpenTabs.length - 1]);
    }
  };

  // Launch app in AVD Phone Emulator handler
  const handleLaunchInEmulator = (appId) => {
    setViewMode("ide");
    setActiveEmulatorApp(appId);
    setIsEmulatorOpen(true);

    const appObj = fileStructure.find((f) => f.emulatorAppId === appId);
    const appName = appObj ? appObj.name : "App";

    setLaunchToast(`Launching ${appName} in Pixel AVD...`);
    setIsConsoleOpen(true);
    setActiveConsoleTab("build");

    setTimeout(() => {
      setLaunchToast("");
    }, 3500);
  };

  // "Run" button handler
  const handleRunClick = () => {
    setViewMode("ide");
    setIsEmulatorOpen(true);
    setIsConsoleOpen(true);
    setActiveConsoleTab("build");

    const appObj = fileStructure.find((f) => f.id === activeFileId);
    if (appObj && appObj.emulatorAppId) {
      setActiveEmulatorApp(appObj.emulatorAppId);
    }
  };

  // Trigger contact from console or buttons
  const handleTriggerContact = () => {
    handleSelectFile("contact");
  };

  // Generate code lines for current active file
  const currentCodeLines = getKotlinCodeForFile(activeFile.id, developerInfo);

  return (
    <div
      className={`w-screen h-screen flex flex-col overflow-hidden font-sans text-xs bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-200 relative ${
        glassEnabled ? "glass-root" : ""
      }`}
    >
      {/* Background Liquid Glass Ambient Glows */}
      {glassEnabled && <BackgroundGlassGlow />}

      {/* Guided Tour Modal */}
      <InteractiveTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onSwitchViewMode={(mode) => setViewMode(mode)}
        onOpenEmulator={handleLaunchInEmulator}
        onSelectFile={handleSelectFile}
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
        onOpenTour={() => setIsTourOpen(true)}
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
