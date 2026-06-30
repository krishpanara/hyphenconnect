'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Hyphen Consultancy', href: '/AIChatbot' },
  { label: 'Hyphen ONE', href: '#' },
  { label: 'Hyphen Exchange', href: '#' },
  { label: 'Become An Affiliate', href: '#' },
  { label: 'Contact Us', href: '#' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-6 left-0 right-0 z-50 mt-[50px]">
      <div className="container flex items-center justify-between py-5">

        {/* Logo */}
        <div>
          <span className="text-[20px] font-bold leading-none">
            <span className="text-white">Hyphen</span>
            <span className="text-sky-400">Labs</span>
           
          </span>
          {/* <p className="text-[9px] text-slate-400 tracking-widest uppercase mt-0.5">
            AI-Driven Efficiency | Unmatched Growth
          </p> */}
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-4">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-white/85 hover:text-white text-[13px] font-medium transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          className="lg:hidden text-white space-y-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="block w-6 h-[2px] bg-white" />
          <span className="block w-6 h-[2px] bg-white" />
          <span className="block w-4 h-[2px] bg-white" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden bg-black/80 backdrop-blur-md border-t border-white/10 section-px py-4">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="block text-white/80 hover:text-white py-2.5 text-sm font-medium border-b border-white/5 last:border-0">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
