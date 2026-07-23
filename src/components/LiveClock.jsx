import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function LiveClock({ showIcon = true, className = "" }) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format as 12-hour format with AM/PM e.g. "10:41:04 PM"
      const formatted = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTimeStr(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex items-center space-x-1.5 font-mono text-xs ${className}`}>
      {showIcon && <Clock size={13} className="text-[#3DDC84] animate-pulse" />}
      <span className="text-[var(--text-main)] font-bold tracking-wider">{timeStr}</span>
    </div>
  );
}
