import type { SkincareType } from '../data/products'

interface ProductVisualProps {
  type: SkincareType
  className?: string
}

export default function ProductVisual({ type, className = '' }: ProductVisualProps) {
  return (
    <div className={`relative flex items-end justify-center ${className}`}>
      <div className="absolute inset-0 rounded-full bg-white/[0.03] blur-3xl" />
      {type === 'dropper' && <DropperBottle />}
      {type === 'pump' && <PumpBottle />}
      {type === 'spray' && <SprayBottle />}
      {type === 'mask' && <MaskPack />}
    </div>
  )
}

function DropperBottle() {
  return (
    <svg viewBox="0 0 120 280" className="relative h-full w-auto drop-shadow-2xl" aria-hidden>
      <defs>
        <linearGradient id="dropper-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="40%" stopColor="#2a2a2a" />
          <stop offset="60%" stopColor="#1f1f1f" />
          <stop offset="100%" stopColor="#0f0f0f" />
        </linearGradient>
        <linearGradient id="dropper-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="45%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="55%" stopColor="transparent" />
        </linearGradient>
      </defs>
      {/* Bulb */}
      <ellipse cx="60" cy="28" rx="18" ry="14" fill="#111" />
      <rect x="48" y="38" width="24" height="12" fill="#111" />
      {/* Collar ring */}
      <rect x="42" y="48" width="36" height="6" rx="1" fill="#333" />
      <rect x="42" y="52" width="36" height="2" fill="#888" opacity="0.6" />
      {/* Neck */}
      <rect x="52" y="54" width="16" height="20" fill="#151515" />
      {/* Body */}
      <path
        d="M 38 74 Q 38 74 40 260 Q 42 275 60 275 Q 78 275 80 260 Q 82 74 82 74 Z"
        fill="url(#dropper-body)"
      />
      <path
        d="M 38 74 Q 38 74 40 260 Q 42 275 60 275 Q 78 275 80 260 Q 82 74 82 74 Z"
        fill="url(#dropper-highlight)"
      />
      {/* Label lines */}
      <rect x="46" y="130" width="28" height="1.5" rx="0.5" fill="white" opacity="0.9" />
      <rect x="46" y="140" width="28" height="1" rx="0.5" fill="white" opacity="0.5" />
      <rect x="46" y="148" width="20" height="1" rx="0.5" fill="white" opacity="0.35" />
      <rect x="46" y="156" width="24" height="1" rx="0.5" fill="white" opacity="0.25" />
    </svg>
  )
}

function PumpBottle() {
  return (
    <svg viewBox="0 0 140 300" className="relative h-full w-auto drop-shadow-2xl" aria-hidden>
      <defs>
        <linearGradient id="pump-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#161616" />
          <stop offset="50%" stopColor="#282828" />
          <stop offset="100%" stopColor="#0e0e0e" />
        </linearGradient>
      </defs>
      {/* Pump head */}
      <path d="M 55 20 L 55 45 L 40 55 L 40 65 L 100 65 L 100 55 L 85 45 L 85 20 Z" fill="#111" />
      <rect x="50" y="65" width="40" height="8" rx="2" fill="#222" />
      <rect x="50" y="71" width="40" height="2" fill="#777" opacity="0.5" />
      {/* Body */}
      <rect x="35" y="73" width="70" height="200" rx="4" fill="url(#pump-body)" />
      <rect x="48" y="73" width="8" height="200" fill="white" opacity="0.04" />
      {/* Label */}
      <rect x="48" y="140" width="44" height="1.5" rx="0.5" fill="white" opacity="0.9" />
      <rect x="48" y="150" width="44" height="1" rx="0.5" fill="white" opacity="0.5" />
      <rect x="48" y="158" width="30" height="1" rx="0.5" fill="white" opacity="0.35" />
    </svg>
  )
}

function SprayBottle() {
  return (
    <svg viewBox="0 0 100 260" className="relative h-full w-auto drop-shadow-2xl" aria-hidden>
      <defs>
        <linearGradient id="spray-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#181818" />
          <stop offset="50%" stopColor="#2c2c2c" />
          <stop offset="100%" stopColor="#101010" />
        </linearGradient>
      </defs>
      {/* Trigger */}
      <path d="M 35 25 L 35 50 L 20 58 L 20 68 L 55 68 L 55 50 L 65 40 L 65 25 Z" fill="#111" />
      <rect x="38" y="68" width="24" height="6" rx="1" fill="#333" />
      {/* Body - cylindrical */}
      <rect x="28" y="74" width="44" height="170" rx="22" fill="url(#spray-body)" />
      <rect x="38" y="74" width="6" height="170" fill="white" opacity="0.05" />
      <rect x="36" y="130" width="28" height="1.5" rx="0.5" fill="white" opacity="0.85" />
      <rect x="36" y="140" width="28" height="1" rx="0.5" fill="white" opacity="0.45" />
    </svg>
  )
}

function MaskPack() {
  return (
    <svg viewBox="0 0 160 200" className="relative h-full w-auto drop-shadow-2xl" aria-hidden>
      <rect x="20" y="10" width="120" height="170" rx="6" fill="#141414" stroke="#333" strokeWidth="1" />
      <rect x="30" y="30" width="100" height="80" rx="4" fill="#1a1a1a" />
      {/* Face silhouette */}
      <ellipse cx="80" cy="70" rx="35" ry="45" fill="#222" />
      <ellipse cx="65" cy="55" rx="8" ry="5" fill="#333" />
      <ellipse cx="95" cy="55" rx="8" ry="5" fill="#333" />
      <path d="M 70 85 Q 80 92 90 85" stroke="#333" strokeWidth="2" fill="none" />
      <rect x="40" y="130" width="80" height="1.5" rx="0.5" fill="white" opacity="0.8" />
      <rect x="50" y="142" width="60" height="1" rx="0.5" fill="white" opacity="0.4" />
    </svg>
  )
}
