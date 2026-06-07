import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export function Logo({ className = "w-full h-full", color = "#d4af37" }: LogoProps) {
  return (
    <svg viewBox="0 0 520 320" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(10, 20)">
        {/* Sofa Arm (Left) */}
        <path d="M 40 100 Q 10 100, 10 130 L 10 220 L 70 220 L 70 140 Q 70 100, 40 100 Z" fill={color} />
        
        {/* Sofa Body */}
        <rect x="65" y="120" width="180" height="100" rx="15" fill={color} />
        
        {/* Sofa White Highlight Base */}
        <rect x="40" y="195" width="220" height="8" rx="4" fill="#ffffff" />
        
        {/* Sofa Legs */}
        <path d="M 50 220 L 30 260 L 60 260 L 70 220 Z" fill={color} />
        
        {/* Lamp */}
        <path d="M 180 50 L 195 10 L 235 10 L 250 50 Z" fill={color} />
        <rect x="213" y="50" width="5" height="70" fill={color} />
        <circle cx="215.5" cy="70" r="4" fill="#ffffff" />
        <rect x="214.5" y="50" width="2" height="20" fill="#ffffff" />
        <path d="M 190 15 L 185 45 L 195 45 Z" fill="#ffffff" opacity="0.8" />

        {/* Text: MY HOME SOFAS */}
        <text x="280" y="75" className="font-serif font-black fill-white" style={{ fontSize: '75px', letterSpacing: '2px' }}>MY</text>
        <text x="260" y="155" className="font-serif font-black fill-white" style={{ fontSize: '75px', letterSpacing: '2px' }}>HOME</text>
        <text x="250" y="235" className="font-serif font-black fill-white" style={{ fontSize: '75px', letterSpacing: '2px' }}>SOFAS</text>
        
        {/* Subtitle */}
        <text x="110" y="290" className="font-sans font-light italic" fill={color} style={{ fontSize: '26px', letterSpacing: '2px' }}>
          Customized &amp; Idealized
        </text>
      </g>
    </svg>
  );
}
