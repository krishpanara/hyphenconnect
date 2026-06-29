const services = [
  {
    title: 'AI Chatbot Development',
    description: 'Intelligent chatbots powered by OpenAI, Claude, Ollama, and custom LLMs tailored to your business.',
    features: ['Multi-LLM Support', 'Custom Training', 'Analytics Dashboard'],
  },
  {
    title: 'AI Agent Development',
    description: 'Autonomous agents that perform tasks, analyze data, and automate multi-step operations end-to-end.',
    features: ['CrewAI & LangChain', 'Tool Integration', 'Task Orchestration'],
  },
  {
    title: 'Business Process Automation',
    description: 'Automate emails, documents, reporting, data entry, and internal workflows intelligently.',
    features: ['Email Automation', 'Document Processing', 'Report Generation'],
  },
]

export default function ServicesSection() {
  return (
    <section className="section-py bg-[#ffffff]">
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '800', color: '#111827', lineHeight: '1.2', textAlign: 'center', animation: 'fadeInUp 0.8s ease forwards' }}>
            Everything You Need to Harness AI
          </h2>
          {/* <button style={{ border: '1px solid #111827', color: '#111827', fontSize: '14px', fontWeight: '600', padding: '12px 24px', borderRadius: '8px', background: 'transparent', cursor: 'pointer' }}>
            View All Services
          </button> */}
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {services.map((svc) => (
            <div
              key={svc.title}
              style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid #9CA3AF', borderRadius: '5px', padding: '32px' }}
            >
              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
                {svc.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', marginBottom: '24px' }}>
                {svc.description}
              </p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {svc.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#374151' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#" style={{ marginTop: '32px', color: '#111827', fontSize: '14px', fontWeight: '600', textDecoration: 'none', alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
