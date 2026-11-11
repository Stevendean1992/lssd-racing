type HelmetProps = {
  accent: string;
  number: string;
  className?: string;
};

export default function Helmet({ accent, number, className = "" }: HelmetProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Racing helmet number ${number}`}
    >
      <defs>
        <linearGradient id={`helmet-shell-${number}`} x1="78" y1="37" x2="178" y2="149" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2A2E2B" />
          <stop offset="0.55" stopColor="#121512" />
          <stop offset="1" stopColor="#050605" />
        </linearGradient>
        <linearGradient id={`visor-${number}`} x1="112" y1="62" x2="190" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B4648" />
          <stop offset="0.5" stopColor="#131A1B" />
          <stop offset="1" stopColor="#060808" />
        </linearGradient>
        <filter id={`helmet-shadow-${number}`} x="20" y="10" width="220" height="190" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="18" stdDeviation="15" floodColor="#000000" floodOpacity="0.5" />
        </filter>
      </defs>

      <g filter={`url(#helmet-shadow-${number})`}>
        <path
          d="M39 117C39 65 72 32 126 32C177 32 207 62 211 106L211 119C211 127 204 132 196 131L160 128L154 145C150 156 139 162 127 161L85 157C68 155 57 147 52 134L46 116L39 117Z"
          fill={`url(#helmet-shell-${number})`}
          stroke="#353A36"
          strokeWidth="1.5"
        />
        <path
          d="M102 59C124 50 159 47 183 63C197 72 203 85 204 99L183 100C152 102 123 92 101 77L102 59Z"
          fill={`url(#visor-${number})`}
          stroke={accent}
          strokeWidth="2"
        />
        <path d="M112 65C130 59 153 58 171 65" stroke="#AAB8B8" strokeOpacity="0.36" strokeWidth="2" strokeLinecap="round" />
        <path d="M121 73C137 69 151 68 164 71" stroke="#AAB8B8" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M43 112C72 103 104 99 139 103L149 112C121 122 82 125 48 121L43 112Z"
          fill={accent}
        />
        <path d="M82 34L74 58L83 57L92 35L82 34Z" fill={accent} fillOpacity="0.9" />
        <path d="M104 33L96 59L103 60L113 34L104 33Z" fill={accent} fillOpacity="0.5" />
        <path
          d="M53 123C65 137 81 145 102 148L145 152L145 160L98 156C76 154 61 147 53 136V123Z"
          fill={accent}
          fillOpacity="0.18"
        />
        <path
          d="M143 142L183 138C194 136 202 128 204 117L211 119L211 130C211 143 202 151 188 154L146 159L143 142Z"
          fill="#0B0D0B"
          stroke={accent}
          strokeOpacity="0.6"
        />
        <path d="M68 115L86 117" stroke="#000000" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round" />
        <path d="M165 91L194 93" stroke="#000000" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
        <text
          x="178"
          y="121"
          fill={accent}
          fontFamily="'Barlow Condensed', sans-serif"
          fontSize="16"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="1"
        >
          {number}
        </text>
      </g>
    </svg>
  );
}
