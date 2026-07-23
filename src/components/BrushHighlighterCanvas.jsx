import React, { useState, useRef, useEffect } from "react";
import { Paintbrush, Edit3, Eraser, Trash2, Sparkles, X, Check, Copy, Share2, StickyNote } from "lucide-react";

export function BrushHighlighterCanvas({ isActive, onToggleActive }) {
  const canvasRef = useRef(null);
  const [tool, setTool] = useState("highlighter"); // "highlighter" | "pen" | "eraser"
  const [color, setColor] = useState("#FFE600"); // default neon yellow
  const [brushSize, setBrushSize] = useState(18);
  const [isDrawing, setIsDrawing] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const colors = [
    { name: "Yellow Highlight", hex: "#FFE600" },
    { name: "Emerald Green", hex: "#3DDC84" },
    { name: "Neon Cyan", hex: "#00F0FF" },
    { name: "Kotlin Purple", hex: "#7F52FF" },
    { name: "Rose Pink", hex: "#FF4081" },
  ];

  // Adjust canvas size to window screen size
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isActive]);

  // Drawing logic
  const startDrawing = (e) => {
    if (!isActive || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing || !isActive || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = brushSize * 2;
      ctx.lineCap = "round";
      ctx.lineTo(x, y);
      ctx.stroke();
    } else if (tool === "highlighter") {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = color + "66"; // 40% translucent for book highlighter effect
      ctx.lineWidth = brushSize * 1.5;
      ctx.lineCap = "square";
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      // Pen Tool
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize / 3;
      ctx.lineCap = "round";
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Clear Canvas
  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setNotes([]);
  };

  // Handle Add Sticky Note Annotation
  const handleAddNote = (e) => {
    if (tool !== "note" || !isActive) return;
    const noteText = prompt("Enter a note or summary point for this highlighted section:");
    if (noteText) {
      setNotes((prev) => [
        ...prev,
        { id: Date.now(), text: noteText, x: e.clientX, y: e.clientY, color },
      ]);
    }
  };

  const copySummaryText = () => {
    const summaryContent = `Shubham Sharma Portfolio - Highlighted Reader Summary:\n\n` +
      `• Candidate: Shubham Sharma (Surat, Gujarat)\n` +
      `• Title: Android Developer, AI/ML Developer & IoT Specialist (2+ Yrs Exp)\n` +
      `• Key Highlights Marked:\n` +
      (notes.length > 0
        ? notes.map((n, i) => `  ${i + 1}. "${n.text}"`).join("\n")
        : "  - User marked key sections (Susamp Infotech, LeonsIntegrations, Dispenser ERP, OTA Flashing, Google ML Kit, Gemini AI APIs).");

    navigator.clipboard.writeText(summaryContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* OVERLAY DRAWING CANVAS */}
      <div
        className={`fixed inset-0 z-40 ${
          isActive ? "pointer-events-auto cursor-crosshair" : "pointer-events-none"
        }`}
        onClick={handleAddNote}
      >
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          className="w-full h-full"
        />

        {/* Render Sticky Notes Annotations on Top */}
        {notes.map((n) => (
          <div
            key={n.id}
            style={{ top: n.y, left: n.x }}
            className="absolute z-50 p-2.5 rounded-xl bg-slate-900/95 text-white font-mono text-[11px] border border-amber-400/80 shadow-2xl max-w-xs -translate-x-1/2 -translate-y-1/2 backdrop-blur-md flex items-start space-x-2"
          >
            <StickyNote size={14} className="text-amber-400 shrink-0 mt-0.5" />
            <span>{n.text}</span>
          </div>
        ))}
      </div>

      {/* FLOATING HIGHLIGHTER TOOLBAR */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#12141C]/90 backdrop-blur-2xl border border-white/15 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center space-x-3 text-xs font-mono select-none">
        {/* Toggle Highlighter Tool */}
        <button
          onClick={onToggleActive}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
            isActive
              ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
        >
          <Paintbrush size={15} />
          <span>{isActive ? "Highlighting ON 🖌️" : "Book Brush Tool 🖌️"}</span>
        </button>

        {isActive && (
          <>
            <div className="h-5 w-[1px] bg-white/20" />

            {/* Brush Subtools */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setTool("highlighter")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  tool === "highlighter" ? "bg-white/20 text-amber-300 font-bold" : "text-slate-400 hover:text-white"
                }`}
                title="Book Highlighter Marker"
              >
                <Paintbrush size={14} />
              </button>

              <button
                onClick={() => setTool("pen")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  tool === "pen" ? "bg-white/20 text-[#3DDC84] font-bold" : "text-slate-400 hover:text-white"
                }`}
                title="Freehand Pen Tool"
              >
                <Edit3 size={14} />
              </button>

              <button
                onClick={() => setTool("note")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  tool === "note" ? "bg-white/20 text-sky-400 font-bold" : "text-slate-400 hover:text-white"
                }`}
                title="Add Sticky Note Annotation"
              >
                <StickyNote size={14} />
              </button>

              <button
                onClick={() => setTool("eraser")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  tool === "eraser" ? "bg-white/20 text-rose-400 font-bold" : "text-slate-400 hover:text-white"
                }`}
                title="Eraser"
              >
                <Eraser size={14} />
              </button>
            </div>

            {/* Color Palette Picker */}
            <div className="flex items-center space-x-1 pl-1">
              {colors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => {
                    setColor(c.hex);
                    if (tool === "eraser") setTool("highlighter");
                  }}
                  style={{ backgroundColor: c.hex }}
                  className={`w-5 h-5 rounded-full transition-transform cursor-pointer border border-white/40 ${
                    color === c.hex && tool !== "eraser" ? "scale-125 ring-2 ring-white" : "opacity-80 hover:opacity-100"
                  }`}
                  title={c.name}
                />
              ))}
            </div>

            <div className="h-5 w-[1px] bg-white/20" />

            {/* Clear All */}
            <button
              onClick={clearCanvas}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
              title="Clear All Highlights"
            >
              <Trash2 size={14} />
            </button>

            {/* Generate AI Summary Button */}
            <button
              onClick={() => setIsSummaryOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#7F52FF] to-[#3574F0] hover:from-[#6C42E0] hover:to-[#2B63D9] text-white font-bold shadow-md cursor-pointer border border-white/20"
            >
              <Sparkles size={14} />
              <span>Create Summary ✨</span>
            </button>
          </>
        )}
      </div>

      {/* SUMMARY MODAL */}
      {isSummaryOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg p-6 rounded-3xl bg-[#141620] border border-white/15 text-white font-sans shadow-2xl relative space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2 font-mono font-bold text-emerald-400 text-sm">
                <Sparkles size={18} />
                <span>Reader Highlighted Executive Summary</span>
              </div>
              <button
                onClick={() => setIsSummaryOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-200 leading-relaxed font-sans bg-[#0A0B0E] p-4 rounded-2xl border border-white/10 max-h-72 overflow-y-auto custom-scrollbar">
              <p className="font-bold text-white text-sm">
                📌 Candidate Profile Executive Overview
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-[#3DDC84] font-bold">•</span>
                  <span><strong>Developer Identity:</strong> Shubham Sharma — Android Developer, AI/ML Developer & IoT Specialist (Surat, Gujarat).</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#3DDC84] font-bold">•</span>
                  <span><strong>Experience & Track Record:</strong> 2+ Years Exp across Susamp Infotech & LeonsIntegrations Pvt. Ltd.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#3DDC84] font-bold">•</span>
                  <span><strong>Core Tech Stack:</strong> Native Kotlin, Jetpack Compose, MQTT IoT, USB Serial SDKs, OTA Flashing, Room DB, Google ML Kit, Gemini AI APIs.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#3DDC84] font-bold">•</span>
                  <span><strong>Key Deliverables Marked:</strong> Built Dispenser ERP IoT, OTA Flasher, Glucometer SDK, GPS Map Camera Lite, Survey Note Cam, Reverse Audio, AI Image Gen, AI Calorie Scanner.</span>
                </li>

                {notes.length > 0 && (
                  <div className="pt-2 border-t border-white/10 space-y-1">
                    <p className="font-bold text-amber-400">📝 Custom Marked Notes ({notes.length}):</p>
                    {notes.map((n, i) => (
                      <p key={n.id} className="text-amber-200 font-mono text-[11px] pl-2">
                        {i + 1}. "{n.text}"
                      </p>
                    ))}
                  </div>
                )}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] font-mono text-slate-400">Ready to copy for notes or sharing</span>
              <button
                onClick={copySummaryText}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer shadow-lg"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Summary Text"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
