import * as React from "react";

export function Logo({
  className = "text-[#2E2E2E]",
  accent = "fffff",
  title = "E‑Commerce",
}: {
  className?: string;
  accent?: string;
  title?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        aria-label="Logo icon"
        role="img"
        width="40"
        height="32"
        viewBox="0 0 24 24"
        className="shrink-0"
      >
        <rect
          x="1.5"
          y="1.5"
          width="40"
          height="32"
          rx="5"
          ry="5"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M6 7h2l1.2 7h7.3c.5 0 .94-.35 1.04-.84l.8-4a1 1 0 0 0-.98-1.16H8.7"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 9L7.5 6.5"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="11" cy="18" r="1" fill={accent} />
        <circle cx="16.5" cy="18" r="1" fill={accent} />
      </svg>
      <span className="text-xl font-semibold leading-none tracking-tight">
        {title}
      </span>
    </div>
  );
}
