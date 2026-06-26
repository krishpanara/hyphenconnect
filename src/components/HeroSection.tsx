import Navbar from './Navbar'

const stats = [
  { value: '50+',  label: 'AI Projects' },
  { value: '98%',  label: 'Satisfaction' },
  { value: '10x',  label: 'Faster Processing' },
  { value: '24/7', label: '' },
]



export default function HeroSection() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col">

        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.png')", backgroundAttachment: 'fixed' }} />
        <div className="absolute inset-0 -z-10 bg-[#07111c]" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/25 to-transparent" />

        <Navbar />

        <div className="relative z-10 flex flex-col flex-1">
          <div className="h-[max(180px,35vh)]" />

          <div className="container">
            <div className="flex items-center gap-2 mb-10">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shrink-0" />
              <span className="text-sky-300 text-sm font-medium tracking-wide">
                Next-Gen AI Solutions for Enterprise
              </span>
            </div>

            <h1 className="text-[22px] sm:text-[28px] lg:text-[36px] xl:text-[44px] font-extrabold leading-[1.1] text-white">
              <span className="text-sky-400">AI-Powered</span>
              <br />Business
              <br />Transformation
            </h1>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl mt-6 mb-8">
              Build intelligent chatbots, automate workflows, and integrate AI
              seamlessly into your CRM, ERP, and business systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-sky-500 hover:bg-sky-400 active:scale-95 text-white font-semibold px-10 h-8  text-base transition-all rounded-sm shadow-lg shadow-sky-500/30 border border-sky-500">
                Choose Your Path →
              </button>
              <button className="border border-white/60 hover:border-white hover:bg-white/10 active:scale-95 text-white font-semibold px-10 h-8 rounded-sm text-base transition-all">
                Book a Clarity Call →
              </button>
            </div>
          </div>

          <div className="mt-auto container  section-py">
            <div className="flex flex-wrap gap-10 sm:gap-16">
              {stats.map((s) => (
                <div key={s.value}>
                  <p className="text-4xl sm:text-5xl font-extrabold text-sky-400 leading-none">{s.value}</p>
                  {s.label && <p className="text-white/55 text-sm mt-1 font-medium">{s.label}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Floating call button */}
      <a
        href="#"
        aria-label="Call us"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-400 flex items-center justify-center shadow-xl shadow-sky-500/40 transition-all hover:scale-110 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
        </svg>
      </a>
    </>
  )
}
