interface MilhoIconProps {
  className?: string;
  color?: string;
}

const MilhoIcon = ({ className, color = "#f59e0b" }: MilhoIconProps) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Corn cob body */}
      <path
        d="M24 18C24 14 28 10 32 10C36 10 40 14 40 18V46C40 52 36 56 32 56C28 56 24 52 24 46V18Z"
        fill={color}
        opacity="0.95"
      />
      
      {/* Corn kernel rows - left side */}
      <ellipse cx="26" cy="22" rx="3" ry="4" fill="#fbbf24" opacity="0.9"/>
      <ellipse cx="26" cy="30" rx="3" ry="4" fill="#fcd34d" opacity="0.85"/>
      <ellipse cx="26" cy="38" rx="3" ry="4" fill="#fbbf24" opacity="0.9"/>
      <ellipse cx="26" cy="46" rx="3" ry="3.5" fill="#fcd34d" opacity="0.85"/>
      
      {/* Corn kernel rows - center */}
      <ellipse cx="32" cy="20" rx="3.5" ry="4" fill="#fcd34d" opacity="0.95"/>
      <ellipse cx="32" cy="28" rx="3.5" ry="4" fill="#fbbf24" opacity="0.9"/>
      <ellipse cx="32" cy="36" rx="3.5" ry="4" fill="#fcd34d" opacity="0.95"/>
      <ellipse cx="32" cy="44" rx="3.5" ry="4" fill="#fbbf24" opacity="0.9"/>
      <ellipse cx="32" cy="51" rx="3" ry="3" fill="#fcd34d" opacity="0.85"/>
      
      {/* Corn kernel rows - right side */}
      <ellipse cx="38" cy="22" rx="3" ry="4" fill="#fbbf24" opacity="0.9"/>
      <ellipse cx="38" cy="30" rx="3" ry="4" fill="#fcd34d" opacity="0.85"/>
      <ellipse cx="38" cy="38" rx="3" ry="4" fill="#fbbf24" opacity="0.9"/>
      <ellipse cx="38" cy="46" rx="3" ry="3.5" fill="#fcd34d" opacity="0.85"/>
      
      {/* Corn husk - left */}
      <path
        d="M22 16C18 14 14 18 12 26C10 34 12 42 16 48C20 52 22 50 24 46"
        stroke="#22c55e"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      
      {/* Corn husk - right */}
      <path
        d="M42 16C46 14 50 18 52 26C54 34 52 42 48 48C44 52 42 50 40 46"
        stroke="#22c55e"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      
      {/* Corn silk (top threads) */}
      <path d="M30 10C28 6 26 4 24 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <path d="M32 10C32 6 32 4 32 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <path d="M34 10C36 6 38 4 40 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <path d="M29 10C26 7 24 6 22 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M35 10C38 7 40 6 42 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
};

export default MilhoIcon;
