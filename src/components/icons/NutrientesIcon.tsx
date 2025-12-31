interface NutrientesIconProps {
  className?: string;
  color?: string;
}

const NutrientesIcon = ({ className, color = "#06b6d4" }: NutrientesIconProps) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central atom nucleus */}
      <circle cx="32" cy="32" r="8" fill={color} opacity="0.95"/>
      
      {/* Electron orbits */}
      <ellipse 
        cx="32" 
        cy="32" 
        rx="20" 
        ry="8" 
        stroke={color} 
        strokeWidth="2"
        opacity="0.6"
        transform="rotate(0 32 32)"
      />
      <ellipse 
        cx="32" 
        cy="32" 
        rx="20" 
        ry="8" 
        stroke={color} 
        strokeWidth="2"
        opacity="0.6"
        transform="rotate(60 32 32)"
      />
      <ellipse 
        cx="32" 
        cy="32" 
        rx="20" 
        ry="8" 
        stroke={color} 
        strokeWidth="2"
        opacity="0.6"
        transform="rotate(120 32 32)"
      />
      
      {/* Electrons */}
      <circle cx="52" cy="32" r="4" fill={color} opacity="0.9"/>
      <circle cx="22" cy="15" r="4" fill={color} opacity="0.9"/>
      <circle cx="22" cy="49" r="4" fill={color} opacity="0.9"/>
      
      {/* NPK labels */}
      <text x="30" y="35" fill="white" fontSize="8" fontWeight="bold" fontFamily="system-ui">N</text>
      
      {/* Small decorative atoms/molecules */}
      <circle cx="10" cy="10" r="3" fill={color} opacity="0.5"/>
      <circle cx="10" cy="18" r="2" fill={color} opacity="0.4"/>
      <line x1="10" y1="10" x2="10" y2="18" stroke={color} strokeWidth="1.5" opacity="0.5"/>
      
      <circle cx="54" cy="54" r="3" fill={color} opacity="0.5"/>
      <circle cx="58" cy="48" r="2" fill={color} opacity="0.4"/>
      <circle cx="50" cy="50" r="2" fill={color} opacity="0.4"/>
      <line x1="54" y1="54" x2="58" y2="48" stroke={color} strokeWidth="1.5" opacity="0.5"/>
      <line x1="54" y1="54" x2="50" y2="50" stroke={color} strokeWidth="1.5" opacity="0.5"/>
      
      {/* Formula hint: P */}
      <circle cx="8" cy="50" r="5" fill={color} opacity="0.7"/>
      <text x="5.5" y="53" fill="white" fontSize="7" fontWeight="bold" fontFamily="system-ui">P</text>
      
      {/* Formula hint: K */}
      <circle cx="56" cy="14" r="5" fill={color} opacity="0.7"/>
      <text x="53" y="17" fill="white" fontSize="7" fontWeight="bold" fontFamily="system-ui">K</text>
    </svg>
  );
};

export default NutrientesIcon;
