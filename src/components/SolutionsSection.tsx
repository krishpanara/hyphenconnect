import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "AI Customer Support",
    description:
      "24/7 intelligent support systems that resolve queries instantly and learn from every interaction.",
    stats: ["80% faster resolution", "24/7 availability"],
    href: "/solutions/customer-support",
  },
  {
    title: "AI Sales Assistant",
    description:
      "Lead qualification, pipeline management, and sales automation that converts prospects autonomously.",
    stats: ["3x lead conversion", "Auto follow-ups"],
    href: "/solutions/sales-assistant",
  },
  {
    title: "AI Knowledge Base",
    description:
      "Internal company knowledge search powered by RAG for instant, accurate employee answers.",
    stats: ["60% faster search", "Always accurate"],
    href: "/solutions/knowledge-base",
  },
];

export default function IndustrySolutions() {
  return (
    <section className="bg-gray-100 section-py">
      <div className="container">

        {/* Heading */}
        <div style={{ marginBottom: "48px" }}>
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 mb-4">
            Solutions
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 leading-tight animate-slide-left">
            Industry-Ready AI Solutions
          </h2>
          <p className="max-w-2xl text-lg leading-8 tracking-wide text-slate-600">
            Purpose-built AI systems designed to automate operations, improve
            customer experiences, and accelerate business growth.
          </p>
        </div>

        {/* 3 Cards in one line */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Solution Number */}
              <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#0284c7" }}>
                {`Solution 0${index + 1}`}
              </p>

              {/* Title */}
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", lineHeight: 1.3 }}>
                {solution.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.8, flex: 1 }}>
                {solution.description}
              </p>

              {/* Stats */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {solution.stats.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#334155" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={solution.href}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 700, color: "#0284c7", textDecoration: "none", marginTop: "8px" }}
              >
                Explore Solution
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
