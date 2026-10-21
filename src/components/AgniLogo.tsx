"use client";

interface AgniLogoProps {
  /** Explicit rendered width in pixels (e.g. 160, 200, 240) */
  width?: number;
  /** Explicit rendered height in pixels (backwards-compatible with previous size prop) */
  size?: number;
  className?: string;
  /** Optional theme override. By default, adapts automatically to site light/dark mode via CSS. */
  theme?: "dark" | "light";
  /** Optional backwards compatibility prop */
  showText?: boolean;
}

/**
 * AgniGrow SVG Wordmark.
 * Automatically adapts text color between Dark Mode (white) and Light Mode (dark charcoal #141110)
 * with the signature orange accent square (#FF541F).
 */
export default function AgniLogo({
  width,
  size,
  className = "",
  theme,
}: AgniLogoProps) {
  // If height 'size' is given, compute proportional width (aspect ratio: 1215 / 139 ≈ 8.74)
  const computedWidth = width ?? (size ? Math.round(size * 8.74) : 220);
  const computedHeight = Math.round(computedWidth * (139 / 1215));

  // Determine letter fill style:
  // If a specific theme is forced, use static color; otherwise use CSS class to switch dynamically with .light
  const letterFillClass =
    theme === "light"
      ? "fill-[#141110]"
      : theme === "dark"
      ? "fill-white"
      : "fill-white [.light_&]:fill-[#141110]";

  return (
    <span
      className={`inline-flex items-center select-none ${className}`}
      role="img"
      aria-label="AgniGrow logo"
    >
      <svg
        viewBox="0 0 1215 139"
        width={computedWidth}
        height={computedHeight}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="transition-colors duration-200 max-w-full h-auto"
      >
        {/* A */}
        <path
          className={`agni-logo-letter ${letterFillClass}`}
          fillRule="evenodd"
          d="M 9,125 L 57,125 L 101,52 L 103,53 L 105,58 L 110,65 L 112,70 L 114,72 L 115,75 L 117,77 L 145,125 L 192,125 L 188,117 L 181,107 L 180,104 L 178,102 L 156,64 L 152,59 L 145,46 L 141,41 L 139,36 L 132,26 L 130,21 L 123,10 L 81,10 L 79,12 L 65,36 L 58,46 L 57,49 L 53,54 L 49,62 L 38,78 L 34,86 L 28,94 L 27,97 L 23,102 L 22,105 Z"
        />
        {/* G */}
        <path
          className={`agni-logo-letter ${letterFillClass}`}
          fillRule="evenodd"
          d="M 187,32 L 183,38 L 177,52 L 176,61 L 175,62 L 175,74 L 176,75 L 177,84 L 179,87 L 182,96 L 186,102 L 201,116 L 213,122 L 219,124 L 222,124 L 223,125 L 227,125 L 228,126 L 317,126 L 317,118 L 318,117 L 318,110 L 317,109 L 317,55 L 244,55 L 243,56 L 260,82 L 280,82 L 281,83 L 281,93 L 280,94 L 235,94 L 234,93 L 228,92 L 223,89 L 217,83 L 212,71 L 213,59 L 217,51 L 224,44 L 233,40 L 317,40 L 317,37 L 318,36 L 318,20 L 317,19 L 317,11 L 318,10 L 317,9 L 229,9 L 228,10 L 224,10 L 223,11 L 213,13 L 203,18 L 197,22 Z"
        />
        {/* N */}
        <path
          className={`agni-logo-letter ${letterFillClass}`}
          fillRule="evenodd"
          d="M 328,9 L 328,126 L 366,126 L 366,65 L 367,64 L 375,70 L 438,126 L 440,127 L 475,127 L 476,126 L 476,9 L 438,9 L 437,10 L 437,74 L 436,75 L 362,9 Z"
        />
        {/* I */}
        <path
          className={`agni-logo-letter ${letterFillClass}`}
          fillRule="evenodd"
          d="M 487,9 L 487,126 L 488,127 L 526,127 L 526,9 Z"
        />
        {/* G */}
        <path
          className={`agni-logo-letter ${letterFillClass}`}
          fillRule="evenodd"
          d="M 547,34 L 540,47 L 537,56 L 537,61 L 536,62 L 537,79 L 538,80 L 538,83 L 540,89 L 545,99 L 550,106 L 560,115 L 566,119 L 577,124 L 580,124 L 585,126 L 590,126 L 591,127 L 673,127 L 673,56 L 603,56 L 609,67 L 619,82 L 638,82 L 639,83 L 639,93 L 638,94 L 593,94 L 584,90 L 578,84 L 577,81 L 575,79 L 574,73 L 573,72 L 573,63 L 577,53 L 585,45 L 591,42 L 594,42 L 595,41 L 673,41 L 673,31 L 674,30 L 674,27 L 673,26 L 673,9 L 591,9 L 590,10 L 586,10 L 585,11 L 575,13 L 563,19 L 553,27 Z"
        />
        {/* R */}
        <path
          className={`agni-logo-letter ${letterFillClass}`}
          fillRule="evenodd"
          d="M 684,9 L 684,114 L 683,115 L 684,118 L 684,125 L 683,126 L 684,127 L 720,127 L 721,126 L 721,87 L 722,86 L 762,127 L 808,127 L 770,89 L 773,87 L 778,86 L 787,81 L 795,73 L 799,66 L 801,60 L 801,56 L 802,55 L 802,45 L 801,44 L 800,37 L 795,28 L 787,20 L 775,13 L 766,10 L 759,10 L 758,9 Z M 721,39 L 722,38 L 755,38 L 758,39 L 763,43 L 765,47 L 765,54 L 763,58 L 759,62 L 754,64 L 722,64 L 721,63 Z"
        />
        {/* O */}
        <path
          className={`agni-logo-letter ${letterFillClass}`}
          fillRule="evenodd"
          d="M 899,10 L 880,8 L 879,9 L 862,10 L 861,11 L 858,11 L 849,14 L 837,20 L 830,25 L 820,35 L 812,49 L 810,55 L 810,58 L 809,59 L 809,78 L 810,79 L 811,86 L 817,98 L 823,106 L 833,115 L 847,123 L 859,127 L 869,128 L 870,129 L 887,129 L 888,128 L 893,128 L 894,127 L 898,127 L 899,126 L 905,125 L 919,118 L 927,112 L 938,100 L 944,89 L 946,83 L 946,79 L 947,78 L 948,65 L 947,64 L 947,58 L 946,57 L 945,50 L 941,41 L 934,31 L 923,21 L 911,14 Z M 866,43 L 872,42 L 873,41 L 883,41 L 884,42 L 888,42 L 898,47 L 906,56 L 909,65 L 908,75 L 905,81 L 896,90 L 890,93 L 883,94 L 882,95 L 869,94 L 859,89 L 850,79 L 848,73 L 848,62 L 852,54 L 860,46 Z"
        />
        {/* W */}
        <path
          className={`agni-logo-letter ${letterFillClass}`}
          fillRule="evenodd"
          d="M 935,10 L 987,127 L 1021,127 L 1021,125 L 1034,99 L 1034,97 L 1041,83 L 1043,81 L 1048,90 L 1051,99 L 1056,108 L 1056,110 L 1059,115 L 1061,122 L 1064,127 L 1099,127 L 1131,63 L 1131,61 L 1144,36 L 1144,34 L 1155,11 L 1109,11 L 1105,19 L 1105,21 L 1097,36 L 1097,38 L 1090,51 L 1090,53 L 1082,68 L 1082,70 L 1080,72 L 1065,41 L 1065,39 L 1054,17 L 1052,11 L 1035,11 L 1034,12 L 1006,71 L 1003,67 L 1003,65 L 1000,60 L 1000,58 L 997,53 L 997,51 L 994,46 L 992,39 L 989,34 L 989,32 L 986,27 L 986,25 L 979,10 Z"
        />
        {/* Orange Accent Square */}
        <path
          fill="#FF541F"
          fillRule="evenodd"
          d="M 1144,75 L 1144,127 L 1145,128 L 1155,128 L 1156,127 L 1197,127 L 1198,128 L 1201,128 L 1202,127 L 1204,128 L 1205,127 L 1205,75 L 1146,75 L 1145,74 Z"
        />
      </svg>
    </span>
  );
}
