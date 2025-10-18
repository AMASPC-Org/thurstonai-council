interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export default function Logo({ className = "h-12", variant = "default" }: LogoProps) {
  const fillColor = variant === 'white' ? '#ffffff' : 'hsl(216, 82%, 28%)';
  
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Capitol Dome */}
      <g>
        <path
          d="M30 15 L30 8 M30 8 L28 6 L32 6 Z"
          stroke={fillColor}
          strokeWidth="1.5"
          fill={fillColor}
        />
        <path
          d="M25 15 Q30 12 35 15 L35 25 L25 25 Z"
          stroke={fillColor}
          strokeWidth="1.5"
          fill="none"
        />
        <rect x="27" y="25" width="2" height="8" fill={fillColor} />
        <rect x="31" y="25" width="2" height="8" fill={fillColor} />
        <rect x="23" y="33" width="14" height="2" fill={fillColor} />
      </g>
      
      {/* Mount Rainier */}
      <g>
        <path
          d="M10 35 L20 20 L24 25 L30 18 L36 25 L40 20 L50 35 Z"
          fill={fillColor}
          opacity="0.3"
        />
      </g>
      
      {/* Circuit Pattern */}
      <g opacity="0.5">
        <circle cx="15" cy="40" r="1.5" fill={fillColor} />
        <circle cx="45" cy="40" r="1.5" fill={fillColor} />
        <path d="M15 40 L20 40 L20 45 L40 45 L40 40 L45 40" stroke={fillColor} strokeWidth="1" fill="none" />
        <circle cx="30" cy="45" r="1.5" fill={fillColor} />
      </g>
      
      {/* Text */}
      <text x="65" y="28" fontSize="16" fontWeight="700" fill={fillColor} fontFamily="Inter, sans-serif">
        THURSTON AI
      </text>
      <text x="65" y="42" fontSize="11" fontWeight="500" fill={fillColor} opacity="0.8" fontFamily="Inter, sans-serif">
        BUSINESS COUNCIL
      </text>
    </svg>
  );
}