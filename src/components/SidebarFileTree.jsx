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
    <aside
      className={`fixed lg:relative inset-y-0 left-0 z-40 w-64 border-r border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col font-mono text-xs select-none transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } glass-panel`}
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
              className="lg:hidden p-1 rounded hover:bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
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
            <button onClick={() => setSearchQuery("")} className="text-[var(--text-muted)]">
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
            className="flex items-center py-1 px-1.5 rounded hover:bg-[var(--bg-tertiary)] cursor-pointer text-[var(--text-main)] font-medium"
          >
            {expandedFolders.app ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
            <AndroidBugdroidIcon size={14} className="ml-1 mr-1.5" />
            <span className="text-[11px]">app</span>
          </div>

          {expandedFolders.app && (
            <div className="pl-3 border-l border-[var(--border-color)] ml-2">
              {/* src folder */}
              <div
                onClick={() => toggleFolder("src")}
                className="flex items-center py-1 px-1 rounded hover:bg-[var(--bg-tertiary)] cursor-pointer text-[var(--text-main)]"
              >
                {expandedFolders.src ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                <Folder size={13} className="ml-1 mr-1.5 text-amber-500" />
                <span className="text-[11px]">src</span>
              </div>

              {expandedFolders.src && (
                <div className="pl-3 border-l border-[var(--border-color)] ml-2">
                  {/* main folder */}
                  <div
                    onClick={() => toggleFolder("main")}
                    className="flex items-center py-1 px-1 rounded hover:bg-[var(--bg-tertiary)] cursor-pointer text-[var(--text-main)]"
                  >
                    {expandedFolders.main ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                    <FolderOpen size={13} className="ml-1 mr-1.5 text-emerald-500" />
                    <span className="text-[11px]">main</span>
                  </div>

                  {expandedFolders.main && (
                    <div className="pl-3 border-l border-[var(--border-color)] ml-2 space-y-0.5">
                      {foldersList.map(({ key, label }) => {
                        const folderFiles = filteredFiles.filter((f) => f.folder === key);
                        if (folderFiles.length === 0 && searchQuery) return null;

                        const isFolderExpanded = expandedFolders[key] !== false;

                        return (
                          <div key={key}>
                            {/* Folder Row */}
                            <div
                              onClick={() => toggleFolder(key)}
                              className="flex items-center py-0.5 px-1 rounded hover:bg-[var(--bg-tertiary)] cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-main)]"
                            >
                              {isFolderExpanded ? (
                                <ChevronDown size={12} />
                              ) : (
                                <ChevronRight size={12} />
                              )}
                              <Folder
                                size={12}
                                className={`ml-1 mr-1.5 ${
                                  key === "ai_ml"
                                    ? "text-sky-400"
                                    : key === "projects"
                                    ? "text-amber-400"
                                    : "text-blue-400"
                                }`}
                              />
                              <span className="text-[11px] font-medium">{label}</span>
                            </div>

                            {/* Files in Folder */}
                            {isFolderExpanded && (
                              <div className="pl-4 ml-1.5 space-y-0.5">
                                {folderFiles.map((file) => {
                                  const isActive = activeFileId === file.id;
                                  return (
                                    <div
                                      key={file.id}
                                      onClick={() => {
                                        onSelectFile(file.id);
                                        if (onCloseMobile) onCloseMobile();
                                      }}
                                      className={`flex items-center justify-between py-1 px-1.5 rounded cursor-pointer transition-colors group ${
                                        isActive
                                          ? "bg-[#3574F0]/20 text-[var(--text-main)] border border-[#3574F0]/40 font-semibold"
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
  );
}
