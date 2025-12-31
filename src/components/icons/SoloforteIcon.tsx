interface SoloforteIconProps {
  className?: string;
  color?: string;
}

const SoloforteIcon = ({ className, color = "#f97316" }: SoloforteIconProps) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Soil layers - bottom layer (dark) */}
      <rect x="8" y="46" width="48" height="10" rx="2" fill={color} opacity="0.9"/>
      
      {/* Middle soil layer */}
      <rect x="8" y="36" width="48" height="10" rx="1" fill={color} opacity="0.7"/>
      
      {/* Top soil layer (light) */}
      <rect x="8" y="26" width="48" height="10" rx="1" fill={color} opacity="0.5"/>
      
      {/* Soil texture dots - bottom */}
      <circle cx="16" cy="51" r="1.5" fill="#92400e" opacity="0.6"/>
      <circle cx="28" cy="49" r="1" fill="#92400e" opacity="0.5"/>
      <circle cx="40" cy="52" r="1.5" fill="#92400e" opacity="0.6"/>
      <circle cx="50" cy="49" r="1" fill="#92400e" opacity="0.5"/>
      
      {/* Soil texture dots - middle */}
      <circle cx="14" cy="41" r="1" fill="#ea580c" opacity="0.4"/>
      <circle cx="32" cy="40" r="1.5" fill="#ea580c" opacity="0.4"/>
      <circle cx="48" cy="42" r="1" fill="#ea580c" opacity="0.4"/>
      
      {/* Chart/Graph overlay */}
      <path
        d="M12 40L22 32L32 36L42 24L52 28"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      
      {/* Data points */}
      <circle cx="12" cy="40" r="3" fill="white" opacity="0.95"/>
      <circle cx="22" cy="32" r="3" fill="white" opacity="0.95"/>
      <circle cx="32" cy="36" r="3" fill="white" opacity="0.95"/>
      <circle cx="42" cy="24" r="3" fill="white" opacity="0.95"/>
      <circle cx="52" cy="28" r="3" fill="white" opacity="0.95"/>
      
      {/* Magnifying glass / analysis icon */}
      <circle 
        cx="20" 
        cy="14" 
        r="8" 
        stroke={color} 
        strokeWidth="2.5" 
        fill="white"
        opacity="0.95"
      />
      <line 
        x1="26" 
        y1="20" 
        x2="32" 
        y2="26" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      
      {/* Plus sign inside magnifying glass */}
      <line x1="20" y1="10" x2="20" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="14" x2="24" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      
      {/* Test tube / flask */}
      <rect x="44" y="6" width="8" height="16" rx="2" fill="white" stroke={color} strokeWidth="2"/>
      <rect x="44" y="14" width="8" height="8" rx="1" fill={color} opacity="0.6"/>
      <rect x="42" y="4" width="12" height="4" rx="1" fill={color} opacity="0.8"/>
    </svg>
  );
};

export default SoloforteIcon;
