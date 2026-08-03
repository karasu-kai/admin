import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-kodo-charcoal/30">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold tracking-[0.15em] text-white">
              KODO CO<sup className="text-[0.4em]">®</sup>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-kodo-silver">
              Premium copper peptide skincare. Minimal design. Maximum performance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-kodo-silver">Skincare</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/shop" className="text-sm text-white/70 transition-colors hover:text-white">
                    All Skincare
                  </Link>
                </li>
                <li>
                  <Link to="/shop#ghk-cu-serum" className="text-sm text-white/70 transition-colors hover:text-white">
                    GHK-Cu Serum
                  </Link>
                </li>
                <li>
                  <Link to="/shop#ghk-cu-cream" className="text-sm text-white/70 transition-colors hover:text-white">
                    GHK-Cu Cream
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-kodo-silver">Merch</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/merch" className="text-sm text-white/70 transition-colors hover:text-white">
                    Black on Black
                  </Link>
                </li>
                <li>
                  <Link to="/merch#logo-tee" className="text-sm text-white/70 transition-colors hover:text-white">
                    Logo Tee
                  </Link>
                </li>
                <li>
                  <Link to="/merch#oversized-hoodie" className="text-sm text-white/70 transition-colors hover:text-white">
                    Hoodie
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-kodo-silver">Info</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="/#about" className="text-sm text-white/70 transition-colors hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#ritual" className="text-sm text-white/70 transition-colors hover:text-white">
                    The Ritual
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-kodo-silver">Connect</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:hello@kodoco.com.au"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    hello@kodoco.com.au
                  </a>
                </li>
                <li>
                  <span className="text-sm text-white/70">kodoco.com.au</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-xs text-kodo-silver">© {new Date().getFullYear()} KODO CO. All rights reserved.</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-kodo-silver/60">
            Skincare · Merch · Black on Black
          </p>
        </div>
      </div>
    </footer>
  )
}
