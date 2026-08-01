import type { MerchType } from '../data/products'

interface MerchVisualProps {
  type: MerchType
  className?: string
}

/** Tonal black-on-black SVG merch illustrations — logo visible only via light/shadow */
export default function MerchVisual({ type, className = '' }: MerchVisualProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 rounded-full bg-white/[0.015] blur-3xl" />
      {type === 'bag' && <TravelBag />}
      {type === 'tee' && <LogoTee />}
      {type === 'hoodie' && <OversizedHoodie />}
      {type === 'cap' && <StructuredCap />}
      {type === 'tote' && <CanvasTote />}
    </div>
  )
}

function TonalLogo({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity="0.55">
      <text
        x="0"
        y="0"
        fill="#2a2a2a"
        stroke="#3d3d3d"
        strokeWidth="0.3"
        fontFamily="system-ui, sans-serif"
        fontSize="10"
        fontWeight="700"
        letterSpacing="2"
      >
        KODO CO
      </text>
    </g>
  )
}

function TravelBag() {
  return (
    <svg viewBox="0 0 200 160" className="relative h-full w-auto" aria-hidden>
      <defs>
        <linearGradient id="bag-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="bag-shine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="40%" stopColor="rgba(255,255,255,0.04)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <rect x="30" y="50" width="140" height="90" rx="8" fill="url(#bag-body)" />
      <rect x="30" y="50" width="140" height="90" rx="8" fill="url(#bag-shine)" />
      <path d="M 70 50 Q 70 20 100 20 Q 130 20 130 50" stroke="#222" strokeWidth="3" fill="none" />
      <rect x="85" y="85" width="30" height="20" rx="3" fill="#080808" stroke="#252525" strokeWidth="1" />
      <TonalLogo x={62} y={78} scale={0.9} />
    </svg>
  )
}

function LogoTee() {
  return (
    <svg viewBox="0 0 200 220" className="relative h-full w-auto" aria-hidden>
      <defs>
        <linearGradient id="tee-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="50%" stopColor="#0f0f0f" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="tee-fold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.03)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M 60 45 L 45 65 L 55 72 L 55 200 L 145 200 L 145 72 L 155 65 L 140 45 L 120 55 L 100 48 L 80 55 Z"
        fill="url(#tee-body)"
      />
      <path d="M 55 72 L 145 72" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      <rect x="55" y="72" width="90" height="128" fill="url(#tee-fold)" />
      <TonalLogo x={68} y={105} />
      {/* Subtle fabric texture lines */}
      <line x1="70" y1="140" x2="130" y2="140" stroke="#151515" strokeWidth="0.5" />
      <line x1="72" y1="160" x2="128" y2="160" stroke="#121212" strokeWidth="0.5" />
    </svg>
  )
}

function OversizedHoodie() {
  return (
    <svg viewBox="0 0 220 240" className="relative h-full w-auto" aria-hidden>
      <defs>
        <linearGradient id="hoodie-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#121212" />
          <stop offset="100%" stopColor="#080808" />
        </linearGradient>
      </defs>
      {/* Hood */}
      <path d="M 70 55 Q 110 15 150 55 L 150 80 Q 110 60 70 80 Z" fill="#0d0d0d" />
      {/* Body */}
      <path
        d="M 50 75 L 35 100 L 50 108 L 50 220 L 170 220 L 170 108 L 185 100 L 170 75 L 150 85 L 110 70 L 70 85 Z"
        fill="url(#hoodie-body)"
      />
      {/* Kangaroo pocket */}
      <path
        d="M 75 155 Q 110 175 145 155 L 145 185 Q 110 200 75 185 Z"
        fill="#0a0a0a"
        stroke="#1c1c1c"
        strokeWidth="1"
      />
      <TonalLogo x={78} y={118} scale={0.85} />
      {/* Cuff ribbing hints */}
      <rect x="50" y="210" width="120" height="6" rx="1" fill="#111" />
    </svg>
  )
}

function StructuredCap() {
  return (
    <svg viewBox="0 0 200 140" className="relative h-full w-auto" aria-hidden>
      <defs>
        <linearGradient id="cap-crown" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#161616" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>
      {/* Crown */}
      <ellipse cx="100" cy="55" rx="70" ry="35" fill="url(#cap-crown)" />
      {/* Panels */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1={100 + 65 * Math.cos((i * Math.PI) / 3 - Math.PI / 2)}
          y1={55 + 30 * Math.sin((i * Math.PI) / 3 - Math.PI / 2)}
          x2="100"
          y2="55"
          stroke="#111"
          strokeWidth="0.8"
        />
      ))}
      {/* Brim */}
      <ellipse cx="100" cy="82" rx="85" ry="18" fill="#0d0d0d" />
      <ellipse cx="100" cy="80" rx="85" ry="18" fill="#111" opacity="0.5" />
      <TonalLogo x={72} y={52} scale={0.7} />
    </svg>
  )
}

function CanvasTote() {
  return (
    <svg viewBox="0 0 200 220" className="relative h-full w-auto" aria-hidden>
      <defs>
        <linearGradient id="tote-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0e0e0e" />
          <stop offset="50%" stopColor="#151515" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>
      {/* Handles */}
      <path d="M 55 55 Q 55 20 75 20" stroke="#1a1a1a" strokeWidth="4" fill="none" />
      <path d="M 145 55 Q 145 20 125 20" stroke="#1a1a1a" strokeWidth="4" fill="none" />
      {/* Body */}
      <rect x="40" y="50" width="120" height="155" rx="2" fill="url(#tote-body)" />
      {/* Canvas weave texture */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line
          key={`h-${i}`}
          x1="42"
          y1={70 + i * 18}
          x2="158"
          y2={70 + i * 18}
          stroke="#111"
          strokeWidth="0.4"
        />
      ))}
      <TonalLogo x={62} y={115} />
    </svg>
  )
}
