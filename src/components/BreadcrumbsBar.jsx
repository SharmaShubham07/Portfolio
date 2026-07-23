import React from "react";
import { ChevronRight, Folder, FileCode } from "lucide-react";
import { KotlinIcon, AndroidBugdroidIcon, GeminiIcon } from "./icons/TechIcons";

export function BreadcrumbsBar({ activeFile }) {
  if (!activeFile) return null;

  const parts = activeFile.path.split("/");
  const folder = activeFile.folder;
  const fileName = activeFile.name;

  return (
    <div className="h-6 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-muted)] flex items-center px-3 text-[11px] font-mono select-none overflow-x-auto space-x-1 shrink-0">
      <div className="flex items-center space-x-1 shrink-0 text-[var(--accent-green)]">
        <AndroidBugdroidIcon size={13} />
        <span>app</span>
      </div>
      <ChevronRight size={11} className="opacity-40 shrink-0" />
      
      <span className="shrink-0">src</span>
      <ChevronRight size={11} className="opacity-40 shrink-0" />
      
      <span className="shrink-0">main</span>
      <ChevronRight size={11} className="opacity-40 shrink-0" />
      
      <div className="flex items-center space-x-1 shrink-0 text-amber-400">
        <Folder size={11} />
        <span>{folder}</span>
      </div>
      <ChevronRight size={11} className="opacity-40 shrink-0" />

      <div className="flex items-center space-x-1 text-[var(--text-main)] font-medium shrink-0">
        {activeFile.icon === "ai" ? (
          <GeminiIcon size={12} />
        ) : (
          <KotlinIcon size={12} />
        )}
        <span>{fileName}</span>
      </div>
    </div>
  );
}
