"use client";

import Link from "next/link";

const footerLinks = [
  {
    heading: "Services",
    links: [
      { label: "AI Chatbot Development", href: "#" },
      { label: "AI Agent Development", href: "#" },
      { label: "CRM + AI Integration", href: "#" },
      { label: "ERP + AI Integration", href: "#" },
      { label: "Local LLM Deployment", href: "#" },
      { label: "Process Automation", href: "#" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "AI Customer Support", href: "#" },
      { label: "AI Sales Assistant", href: "#" },
      { label: "AI Knowledge Base", href: "#" },
      { label: "AI Document Processing", href: "#" },
      { label: "AI ERP Assistant", href: "#" },
      { label: "AI CRM Assistant", href: "#" },
    ],
  },
  {
    heading: "Technologies",
    links: [
      { label: "OpenAI GPT-4", href: "#" },
      { label: "Claude API", href: "#" },
      { label: "Ollama & Llama", href: "#" },
      { label: "LangChain", href: "#" },
      { label: "CrewAI", href: "#" },
      { label: "Vector Databases", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Process", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0f1a", color: "#fff", padding: "80px 0 0" }}>
      <div className="container">

        {/* Top */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr repeat(4, 1fr)", gap: "48px", paddingBottom: "64px", borderBottom: "1px solid #1e293b" }}>

          {/* Brand */}
          <div>
            <p style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
              Hyphen <span style={{ color: "#38bdf8" }}>Labs</span>
            </p>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.8", maxWidth: "260px" }}>
              Bridging Business and Artificial Intelligence. We build custom AI solutions that deliver real, measurable results.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fff", marginBottom: "20px" }}>
                {col.heading}
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", padding: "24px 0" }}>
          <p style={{ fontSize: "13px", color: "#475569" }}>
            © 2025 Hyphen Labs. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/privacy-policy" style={{ fontSize: "13px", color: "#475569", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" style={{ fontSize: "13px", color: "#475569", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
