import React from "react";
import { X } from "lucide-react";
import { KotlinIcon, GeminiIcon } from "./icons/TechIcons";

export function TabBar({
  openTabFiles,
  activeFileId,
  onSelectTab,
  onCloseTab,
}) {
  if (openTabFiles.length === 0) return null;

  return (
    <div className="h-8 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] flex items-center px-1 overflow-x-auto select-none shrink-0 custom-scrollbar">
      {openTabFiles.map((file) => {
        const isActive = activeFileId === file.id;
        return (
          <div
            key={file.id}
            onClick={() => onSelectTab(file.id)}
            className={`group h-full flex items-center px-3 space-x-2 border-r border-[var(--border-color)] text-xs font-mono cursor-pointer transition-colors relative shrink-0 ${
              isActive
                ? "bg-[var(--bg-active-tab)] text-[var(--text-main)] font-medium border-t-2 border-t-[#3574F0]"
                : "bg-[var(--bg-inactive-tab)] text-[var(--text-muted)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-main)]"
            }`}
          >
            {/* File Icon */}
            {file.icon === "ai" ? (
              <GeminiIcon size={13} className="shrink-0" />
            ) : (
              <KotlinIcon size={13} className="shrink-0" />
            )}

            {/* Tab Name */}
            <span className="truncate max-w-[130px]">{file.name}</span>

            {/* Close 'x' button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCloseTab(file.id);
              }}
              className="p-0.5 rounded-full hover:bg-[var(--border-color)] opacity-60 group-hover:opacity-100 transition-opacity"
              title="Close Tab"
            >
              <X size={12} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
