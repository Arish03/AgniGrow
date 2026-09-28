"use client";

interface AgniLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

/** AGNI wordmark. size controls the rendered height in pixels. */
export default function AgniLogo({ size = 40, className = "", showText = true }: AgniLogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`} role="img" aria-label="AGNI logo">
      <svg
        width={showText ? size * 4.9 : size * 1.4}
        height={size}
        viewBox={showText ? "0 0 490 100" : "0 0 140 100"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Crossbar-free geometric A */}
        <path className="agni-logo-letter" d="M0 100 58 0h28l58 100h-36L72 39 36 100H0Z" fill="white" />
        {showText && (
          <>
            {/* G */}
            <path className="agni-logo-letter" d="M251 0h-66c-30 0-48 20-48 50s18 50 48 50h66V41h-62l12 24h18v9h-34c-14 0-22-9-22-24s8-24 22-24h66V0Z" fill="white" />
            {/* N */}
            <path className="agni-logo-letter" d="M260 100V0h27l66 59V0h33v100h-27l-66-59v59h-33Z" fill="white" />
            {/* I */}
            <path className="agni-logo-letter" d="M397 0h33v100h-33V0Z" fill="white" />
            {/* Orange square */}
            <rect x="443" y="56" width="44" height="44" rx="1" fill="#FF541F" />
          </>
        )}
        {!showText && <rect x="111" y="67" width="33" height="33" fill="#FF541F" />}
      </svg>
    </span>
  );
}
