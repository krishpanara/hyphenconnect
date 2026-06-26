import Link from "next/link";
import { ArrowRight, Building2, HeartPulse, Factory } from "lucide-react";

const caseStudies = [
  {
    icon: Building2,
    industry: "Real Estate",
    category: "CRM Automation",
    title: "AI-Powered CRM Automation",
    description:
      "A leading real estate firm integrated our AI assistant into HubSpot CRM, automating lead qualification, follow-up emails, and property matching.",
    stats: [
      { value: "40%", label: "Reduction in manual tasks" },
      { value: "3x", label: "Faster lead response time" },
      { value: "28%", label: "Increase in conversion" },
    ],
  },
  {
    icon: HeartPulse,
    industry: "Healthcare",
    category: "Enterprise AI",
    title: "Enterprise AI Knowledge Assistant",
    description:
      "A hospital network deployed our RAG-based assistant giving medical staff instant access to clinical protocols across 500,000+ documents.",
    stats: [
      { value: "60%", label: "Faster information retrieval" },
      { value: "95%", label: "Query accuracy rate" },
      { value: "12hrs", label: "Saved per staff per week" },
    ],
  },
  {
    icon: Factory,
    industry: "Manufacturing",
    category: "ERP Integration",
    title: "ERP AI Integration",
    description:
      "A global manufacturer integrated AI into Odoo ERP, enabling NL inventory queries, automated PO generation, and predictive maintenance alerts.",
    stats: [
      { value: "50%", label: "Operational efficiency gain" },
      { value: "80%", label: "Faster report generation" },
      { value: "$2.1M", label: "Annual cost savings" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-[#fffff] py-36">
      <div className="container">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 mb-4">
              Case Studies
            </p>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-5">
              Proven AI Success Stories
            </h2>
            <p className="text-lg leading-8 text-slate-600" style={{ marginTop: '16px' }}>
              Real results from real businesses. See how our AI solutions have
              transformed operations and driven measurable growth.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-600 tracking-wide hover:gap-4 transition-all shrink-0"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center" style={{ paddingTop: '32px', paddingLeft: '32px' }}>
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <div
                key={index}
                className="group flex flex-col w-full max-w-sm min-h-[180px] bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden"
              >
                {/* Card Top Accent */}


                <div className="flex flex-col flex-1 justify-between" style={{ padding: '24px 32px' }}>
                  {/* Icon + Badges */}
                  {/* <div className="flex items-center justify-between mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 border border-sky-100 shrink-0">
                      <Icon className="h-5 w-5 text-sky-600" />
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full bg-sky-50 border border-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                        {study.industry}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                        {study.category}
                      </span>
                    </div>
                  </div> */}

                  {/* Title */}
                  <h3 className="text-sm font-bold text-slate-900 leading-snug mb-3">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] leading-5 text-slate-500">
                    {study.description}
                  </p>

                  {/* Stats */}
                  {/* <div className="grid grid-cols-3 gap-3 mb-7">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col items-center text-center py-3 px-2 bg-slate-50 border border-slate-100 rounded-xl">
                        <p className="text-base font-extrabold text-sky-600 leading-none mb-1">
                          {stat.value}
                        </p>
                        <p className="text-[10px] leading-4 text-slate-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div> */}

                  {/* CTA */}
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 tracking-wide hover:gap-4 transition-all"
                  >
                    Read Full Case Study
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 flex items-center gap-4" style={{ marginTop: '60px' }}>
          <div className="h-10 w-px bg-sky-500" />
          <p className="text-lg font-semibold text-slate-700">
            Results are not promises. They are{" "}
            <span className="text-sky-600">proof.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
