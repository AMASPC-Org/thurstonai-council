export default function HeroBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient Background */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(216, 82%, 28%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(216, 82%, 20%)" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.05)" />
        </linearGradient>
      </defs>

      {/* Background Fill */}
      <rect width="1440" height="800" fill="url(#bgGradient)" />

      {/* Mount Rainier Silhouette */}
      <g opacity="0.2">
        <path
          d="M200 600 L400 300 L480 380 L600 250 L720 380 L800 300 L1000 600 Z"
          fill="url(#mountainGradient)"
        />
        <path
          d="M800 600 L1000 400 L1080 460 L1200 350 L1320 460 L1400 400 L1600 600 Z"
          fill="url(#mountainGradient)"
        />
      </g>

      {/* Capitol Dome Outline */}
      <g opacity="0.15" transform="translate(100, 400)">
        <path
          d="M100 100 L100 60 M100 60 L95 55 L105 55 Z"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M80 100 Q100 90 120 100 L120 140 L80 140 Z"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="2"
          fill="none"
        />
        <rect x="88" y="140" width="8" height="30" fill="rgba(255, 255, 255, 0.2)" />
        <rect x="104" y="140" width="8" height="30" fill="rgba(255, 255, 255, 0.2)" />
        <rect x="75" y="170" width="50" height="8" fill="rgba(255, 255, 255, 0.2)" />
      </g>

      {/* Circuit Pattern Overlay */}
      <g opacity="0.1">
        <circle cx="200" cy="200" r="3" fill="rgba(255, 255, 255, 0.5)" />
        <circle cx="800" cy="150" r="3" fill="rgba(255, 255, 255, 0.5)" />
        <circle cx="1200" cy="250" r="3" fill="rgba(255, 255, 255, 0.5)" />
        <path d="M200 200 L300 200 L300 250 L500 250" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
        <path d="M800 150 L900 150 L900 200 L1100 200" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
        <circle cx="500" cy="250" r="3" fill="rgba(255, 255, 255, 0.5)" />
        <circle cx="1100" cy="200" r="3" fill="rgba(255, 255, 255, 0.5)" />
      </g>

      {/* Dark Overlay for Text Readability */}
      <rect width="1440" height="800" fill="black" opacity="0.4" />
    </svg>
  );
}