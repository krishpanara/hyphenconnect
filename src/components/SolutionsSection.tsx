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
    <section className="bg-gray-100 py-20">
      <div className="container">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 mb-4">
            Solutions
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight animate-slide-left">
            Industry-Ready AI Solutions
          </h2>
          <p className="max-w-2xl text-lg leading-8 tracking-wide text-slate-600" style={{ marginTop: '16px' }}>
            Purpose-built AI systems designed to automate operations, improve
            customer experiences, and accelerate business growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-10" style={{ marginTop: '48px' }}>
          {solutions.map((solution, index) => (
            <div key={index} className="flex gap-10">

              {/* Left Line + Dot */}
              <div className="relative hidden w-8 lg:flex flex-col items-center"  style={{ marginTop: '28px' }}>
                <div className="w-3 h-3 rounded-full bg-sky-500 shrink-0 mt-1" />
                <div className="flex-1 w-px bg-sky-200 mt-1" />
              </div>

              {/* Content */}
              <div className="max-w-3xl pb-14">
                <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 mb-8" style={{ marginTop: '28px' }}>
                  {`Solution 0${index + 1}`}
                </p>

                <h3 className="text-3xl font-bold text-slate-900 mb-8 leading-tight">
                  {solution.title}
                </h3>

                <p className="text-lg leading-9 tracking-wide text-slate-600 mb-12">
                  {solution.description}
                </p>

                <div className="flex flex-wrap gap-8 mb-12">
                  {solution.stats.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-800">
                      <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0" />
                      <span className="font-medium tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={solution.href}
                  style={{ marginTop: '32px', display: 'inline-flex' }}
                  className="group inline-flex items-center gap-2 font-semibold tracking-wide text-sky-600 transition-all hover:gap-4"
                >
                  Explore Solution
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}