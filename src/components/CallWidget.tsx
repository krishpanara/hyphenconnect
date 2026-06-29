'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function CallWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Widget popup */}
      {open && (
        <div
          className="fixed right-6 bottom-28 z-50 w-75 rounded-2xl overflow-hidden shadow-2xl"
          style={{ border: '1px solid #e2e8f0' }}
        >
          {/* Top bar */}
          <div className="bg-sky-500 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white shrink-0">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-semibold text-[13px]">Talk to us! (Calls are FREE)</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/90 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="bg-white px-6 pt-8 pb-6 flex flex-col items-center text-center">

            {/* Avatar */}
            <div className="relative mb-5">
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-[#eef2ff] border-4 border-white shadow-lg">
                <Image
                  src="/amanda.png"
                  alt="Amanda"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              {/* Hyphen badge */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-white rounded-full px-2.5 py-[3px] shadow-sm border border-gray-100">
                <span className="text-[10px] font-extrabold tracking-wide text-sky-500">Hyphen</span>
              </div>
            </div>

            {/* Name + AI badge */}
            <div className="flex items-center gap-1.5 mt-2">
              <span className="text-[20px] font-bold text-[#0f172a] leading-none">Amanda</span>
              <span className="text-[10px] font-bold bg-sky-100 text-sky-600 px-1.5 py-0.5 rounded tracking-wide">AI</span>
            </div>

            {/* Role */}
            <p className="text-[13px] text-[#64748b] mt-1.5 mb-6">
              <span className="font-semibold text-[#0f172a]">Hyphen Connect</span> Support Agent
            </p>

            {/* Call button */}
            <a
              href="tel:+1234567890"
              className="w-full flex items-center justify-center gap-2 border border-sky-400 text-sky-500 hover:bg-sky-50 active:scale-95 font-semibold text-[13px] py-2.5 rounded-lg transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" x2="12" y1="19" y2="22"/>
              </svg>
              Click HERE to Call
            </a>

            {/* Footer */}
            <p className="text-[11px] text-[#94a3b8] mt-4">
              Powered by <span className="font-semibold text-sky-500">Hyphen Connect AI.</span>
            </p>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Call us"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-400 flex items-center justify-center shadow-xl shadow-sky-500/40 transition-all hover:scale-110 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
        </svg>
      </button>
    </>
  )
}
