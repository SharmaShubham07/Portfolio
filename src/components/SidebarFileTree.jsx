import React, { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FolderOpen, Search, X } from "lucide-react";
import { KotlinIcon, AndroidBugdroidIcon, GeminiIcon } from "./icons/TechIcons";

export function SidebarFileTree({
  files,
  activeFileId,
  onSelectFile,
  isOpen,
  onCloseMobile,
}) {
  const [expandedFolders, setExpandedFolders] = useState({
    app: true,
    src: true,
    main: true,
    about: true,
    experience: true,
    projects: true,
    ai_ml: true,
    skills: true,
    achievements: true,
    education: true,
    contact: true,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  // Group files by folder
  const foldersList = [
    { key: "about", label: "about" },
    { key: "experience", label: "experience" },
    { key: "projects", label: "projects" },
    { key: "ai_ml", label: "ai_ml" },
    { key: "skills", label: "skills" },
    { key: "achievements", label: "achievements" },
    { key: "education", label: "education" },
    { key: "contact", label: "contact" },
  ];

  const filteredFiles = files.filter((f) =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.folder.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Mobile Backdrop Overlay when Sidebar Drawer is Open */}
      {isOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-30 lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:relative inset-y-0 left-0 z-40 w-64 border-r border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col font-mono text-xs select-none transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } glass-panel shadow-2xl lg:shadow-none`}
      >
        {/* Header bar of Project Window */}
        <div className="h-8 border-b border-[var(--border-color)] px-3 flex items-center justify-between font-semibold text-[var(--text-main)] shrink-0 bg-[var(--bg-header)]/50">
          <div className="flex items-center space-x-1.5">
            <AndroidBugdroidIcon size={14} />
            <span className="text-[11px] tracking-wide">Project: Portfolio</span>
          </div>
          <div className="flex items-center space-x-1">
            {onCloseMobile && (
              <button
                onClick={onCloseMobile}
                className="lg:hidden p-1 rounded hover:bg-[var(--bg-tertiary)] text-[var(--text-muted)] cursor-pointer"
                title="Close Project Tree"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Filter / Search Bar */}
        <div className="p-2 border-b border-[var(--border-color)]">
          <div className="flex items-center bg-[var(--bg-tertiary)] rounded px-2 py-1 border border-[var(--border-color)]">
            <Search size={12} className="text-[var(--text-muted)] mr-1.5 shrink-0" />
            <input
              type="text"
              placeholder="Search files (e.g. Kotlin...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-[11px] text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-[var(--text-muted)] cursor-pointer">
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* Tree Content Area */}
        <div className="flex-1 overflow-y-auto p-1.5 space-y-0.5 custom-scrollbar">
          {/* Top Root: app */}
          <div>
            <div
              onClick={() => toggleFolder("app")}
              className="flex items-center space-x-1 py-1 px-1.5 rounded hover:bg-[var(--bg-tertiary)] cursor-pointer text-[var(--text-main)] font-semibold"
            >
              {expandedFolders.app ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              <FolderOpen size={14} className="text-amber-400 shrink-0" />
              <span>app</span>
            </div>

            {expandedFolders.app && (
              <div className="pl-3 border-l border-[var(--border-color)]/60 ml-2 space-y-0.5 mt-0.5">
                {/* Level 2: src */}
                <div
                  onClick={() => toggleFolder("src")}
                  className="flex items-center space-x-1 py-1 px-1.5 rounded hover:bg-[var(--bg-tertiary)] cursor-pointer text-[var(--text-main)]"
                >
                  {expandedFolders.src ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  <FolderOpen size={14} className="text-[#3574F0] shrink-0" />
                  <span>src</span>
                </div>

                {expandedFolders.src && (
                  <div className="pl-3 border-l border-[var(--border-color)]/60 ml-2 space-y-0.5 mt-0.5">
                    {/* Level 3: main */}
                    <div
                      onClick={() => toggleFolder("main")}
                      className="flex items-center space-x-1 py-1 px-1.5 rounded hover:bg-[var(--bg-tertiary)] cursor-pointer text-[var(--text-main)]"
                    >
                      {expandedFolders.main ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      <FolderOpen size={14} className="text-[#3DDC84] shrink-0" />
                      <span>main</span>
                    </div>

                    {expandedFolders.main && (
                      <div className="pl-3 border-l border-[var(--border-color)]/60 ml-2 space-y-1 mt-0.5">
                        {/* Landing Root File: Portfolio.kt */}
                        {(() => {
                          const landingFile = files.find((f) => f.id === "landing");
                          if (!landingFile) return null;
                          const isSelected = activeFileId === "landing";
                          return (
                            <div
                              key="landing"
                              onClick={() => onSelectFile("landing")}
                              className={`flex items-center justify-between py-1 px-2 rounded cursor-pointer transition-colors ${
                                isSelected
                                  ? "bg-[var(--bg-active-tab)] text-[#3DDC84] font-bold border-l-2 border-[#3DDC84]"
                                  : "text-[var(--text-muted)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-main)]"
                              }`}
                            >
                              <div className="flex items-center space-x-1.5 truncate">
                                <KotlinIcon size={13} className="shrink-0" />
                                <span className="truncate text-[11px] font-bold text-[var(--text-main)]">
                                  Portfolio.kt
                                </span>
                              </div>
                              <span className="text-[9px] px-1 py-0.2 rounded bg-[#3DDC84]/20 text-[#3DDC84] font-mono font-bold">
                                START
                              </span>
                            </div>
                          );
                        })()}

                        {/* Profile Photo XML Asset Node */}
                        {(() => {
                          const profileXmlFile = files.find((f) => f.id === "profile-image");
                          if (!profileXmlFile) return null;
                          const isSelected = activeFileId === "profile-image";
                          return (
                            <div
                              key="profile-image"
                              onClick={() => onSelectFile("profile-image")}
                              className={`flex items-center justify-between py-1 px-2 rounded cursor-pointer transition-colors ${
                                isSelected
                                  ? "bg-[var(--bg-active-tab)] text-[#3DDC84] font-bold border-l-2 border-[#3DDC84]"
                                  : "text-[var(--text-muted)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-main)]"
                              }`}
                            >
                              <div className="flex items-center space-x-1.5 truncate">
                                <span className="text-[10px] text-amber-400 font-mono">XML</span>
                                <span className="truncate text-[11px] font-semibold text-amber-300">
                                  ic_profile_avatar.xml
                                </span>
                              </div>
                              <span className="text-[9px] px-1 py-0.2 rounded bg-amber-400/20 text-amber-300 font-mono font-bold">
                                PREVIEW
                              </span>
                            </div>
                          );
                        })()}

                        {/* Subfolders List */}
                        {foldersList.map((folderObj) => {
                          const isExp = expandedFolders[folderObj.key];
                          const folderFiles = filteredFiles.filter((f) => f.folder === folderObj.key);

                          if (folderFiles.length === 0 && searchQuery) return null;

                          return (
                            <div key={folderObj.key}>
                              <div
                                onClick={() => toggleFolder(folderObj.key)}
                                className="flex items-center space-x-1 py-1 px-1.5 rounded hover:bg-[var(--bg-tertiary)] cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-main)]"
                              >
                                {isExp ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                                {isExp ? (
                                  <FolderOpen size={13} className="text-[#7F52FF] shrink-0" />
                                ) : (
                                  <Folder size={13} className="text-[#7F52FF] shrink-0" />
                                )}
                                <span className="font-medium">{folderObj.label}</span>
                              </div>

                              {isExp && (
                                <div className="pl-3 border-l border-[var(--border-color)]/60 ml-2 space-y-0.5 mt-0.5">
                                  {folderFiles.map((file) => {
                                    const isSelected = activeFileId === file.id;
                                    return (
                                      <div
                                        key={file.id}
                                        onClick={() => onSelectFile(file.id)}
                                        className={`flex items-center justify-between py-1 px-2 rounded cursor-pointer transition-colors ${
                                          isSelected
                                            ? "bg-[var(--bg-active-tab)] text-[#56A8F5] font-semibold border-l-2 border-[#3574F0]"
                                            : "text-[var(--text-muted)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-main)]"
                                        }`}
                                      >
                                        <div className="flex items-center space-x-1.5 truncate">
                                          {file.icon === "ai" ? (
                                            <GeminiIcon size={13} className="shrink-0" />
                                          ) : (
                                            <KotlinIcon size={13} className="shrink-0" />
                                          )}
                                          <span className="truncate text-[11px]">
                                            {file.name}
                                          </span>
                                        </div>

                                        {/* Optional Badge */}
                                        {file.tag && (
                                          <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                                            {file.tag}
                                          </span>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
