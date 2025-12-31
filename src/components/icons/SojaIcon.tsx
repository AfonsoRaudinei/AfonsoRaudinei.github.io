interface SojaIconProps {
  className?: string;
  color?: string;
}

const SojaIcon = ({ className, color = "#10b981" }: SojaIconProps) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main stem */}
      <path 
        d="M32 56V28" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round"
      />
      
      {/* Left branch */}
      <path 
        d="M32 40L20 32" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      
      {/* Right branch */}
      <path 
        d="M32 36L44 28" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      
      {/* Left leaf group - trifoliate */}
      <ellipse 
        cx="14" 
        cy="28" 
        rx="8" 
        ry="12" 
        transform="rotate(-30 14 28)"
        fill={color}
        opacity="0.9"
      />
      <ellipse 
        cx="22" 
        cy="22" 
        rx="6" 
        ry="10" 
        transform="rotate(-10 22 22)"
        fill={color}
        opacity="0.7"
      />
      <ellipse 
        cx="18" 
        cy="34" 
        rx="6" 
        ry="9" 
        transform="rotate(-50 18 34)"
        fill={color}
        opacity="0.8"
      />
      
      {/* Right leaf group - trifoliate */}
      <ellipse 
        cx="50" 
        cy="24" 
        rx="8" 
        ry="12" 
        transform="rotate(30 50 24)"
        fill={color}
        opacity="0.9"
      />
      <ellipse 
        cx="42" 
        cy="18" 
        rx="6" 
        ry="10" 
        transform="rotate(10 42 18)"
        fill={color}
        opacity="0.7"
      />
      <ellipse 
        cx="46" 
        cy="30" 
        rx="6" 
        ry="9" 
        transform="rotate(50 46 30)"
        fill={color}
        opacity="0.8"
      />
      
      {/* Top leaf */}
      <ellipse 
        cx="32" 
        cy="14" 
        rx="10" 
        ry="8" 
        fill={color}
        opacity="0.95"
      />
      
      {/* Small pods/grains decorative */}
      <circle cx="26" cy="46" r="2.5" fill={color} opacity="0.6"/>
      <circle cx="38" cy="48" r="2.5" fill={color} opacity="0.6"/>
      <circle cx="32" cy="52" r="2" fill={color} opacity="0.5"/>
    </svg>
  );
};

export default SojaIcon;
