import React from "react";

export function BackgroundGlassGlow({ enabled = true }) {
  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Top Left Kotlin Purple Ambient Mesh */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#7F52FF]/15 rounded-full blur-[130px] animate-pulse" />

      {/* Top Right Android Emerald Ambient Mesh */}
      <div className="absolute top-1/4 -right-32 w-[450px] h-[450px] bg-[#3DDC84]/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '7s' }} />

      {/* Bottom Left Jetpack Blue Mesh */}
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-[#3574F0]/15 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '9s' }} />

      {/* Subtle Starfield Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
    </div>
  );
}
