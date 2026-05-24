export function CameraOverlaySvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 520"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 260H260"
        stroke="url(#fadeLine)"
        strokeWidth="2"
      />

      <defs>
        <radialGradient
          id="fadeLine"
          cx="0"
          cy="0"
          r="2"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(164 260) rotate(90) scale(1 164)"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      <path
        d="M20 120 V40 A20 20 0 0 1 40 20 H80"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M220 20 H260 A20 20 0 0 1 280 40 V120"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 380 V460 A20 20 0 0 0 40 480 H80"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M220 480 H260 A20 20 0 0 0 280 460 V380"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
