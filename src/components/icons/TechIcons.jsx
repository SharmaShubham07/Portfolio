import React from "react";

// Official Android Bugdroid Logo
export const AndroidBugdroidIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`inline-block text-[#3DDC84] ${className}`}
  >
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997 0-.551.4482-.9993.9993-.9993.5519 0 .9997.4483.9997.9993 0 .5511-.4478.9997-.9997.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997 0-.551.4482-.9993.9993-.9993.5519 0 .9997.4483.9997.9993 0 .5511-.4478.9997-.9997.9997zm11.3945-6.6041l1.5833-2.7423c.1259-.218.051-.4973-.1671-.6232-.218-.1259-.4972-.051-.6231.1671l-1.6117 2.7915C15.5413 7.6468 13.8291 7.234 12 7.234c-1.8291 0-3.5413.4128-5.053 1.0994L5.3353 5.5419c-.1259-.2181-.4051-.293-.6231-.1671-.2181.1259-.293.4052-.1671.6232l1.5833 2.7423C3.6558 10.3707 2 12.9772 2 16h20c0-3.0228-1.6558-5.6293-4.1285-7.2627z" />
  </svg>
);

// Kotlin "K" Icon
export const KotlinIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block ${className}`}
  >
    <path
      d="M24 24H0V0h24L12 12Z"
      fill="url(#kotlin-grad)"
    />
    <defs>
      <linearGradient
        id="kotlin-grad"
        x1="0"
        y1="0"
        x2="24"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#E44857" />
        <stop offset="50%" stopColor="#C711E1" />
        <stop offset="100%" stopColor="#7F52FF" />
      </linearGradient>
    </defs>
  </svg>
);

// Jetpack Compose Logo
export const ComposeIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Google ML Kit Icon
export const MLKitIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={`text-[#34A853] ${className}`}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
);

// Gemini AI Sparkle Icon
export const GeminiIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C12 7.52 16.48 12 22 12C16.48 12 12 16.48 12 22C12 16.48 7.52 12 2 12C7.52 12 12 7.52 12 2Z" fill="url(#gemini-grad)"/>
    <defs>
      <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1A73E8" />
        <stop offset="50%" stopColor="#8AB4F8" />
        <stop offset="100%" stopColor="#D93025" />
      </linearGradient>
    </defs>
  </svg>
);

// Python Icon
export const PythonIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={`text-[#3776AB] ${className}`}>
    <path d="M12 2c-3.87 0-4.5 1.68-4.5 3.38v2.37h9v.84H7.5C5.03 8.59 3 10.3 3 13.5c0 3.32 2.37 4.7 4.5 4.7h1.41v-2.22c0-1.78 1.54-3.38 3.38-3.38h4.5c1.47 0 2.72-1.02 2.72-2.48V5.38C19.51 3.4 17.58 2 12 2zm-1.69 2.53a.84.84 0 110 1.69.84.84 0 010-1.69zM12 22c3.87 0 4.5-1.68 4.5-3.38v-2.37h-9v-.84h9c2.47 0 4.5-1.71 4.5-4.91 0-3.32-2.37-4.7-4.5-4.7h-1.41v2.22c0 1.78-1.54 3.38-3.38 3.38h-4.5c-1.47 0-2.72 1.02-2.72 2.48v5.24C4.49 20.6 6.42 22 12 22zm1.69-2.53a.84.84 0 110-1.69.84.84 0 010 1.69z" />
  </svg>
);

// LinkedIn Icon
export const LinkedInIcon = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={`inline-block ${className}`}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

// GitHub Icon
export const GithubIcon = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={`inline-block ${className}`}>
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);
