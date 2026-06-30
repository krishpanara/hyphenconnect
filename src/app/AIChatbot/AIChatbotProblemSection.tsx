import Image from "next/image";
import {
  CheckCircle2,
  Bot,
  BrainCircuit,
  MessageSquare,
  Database,
} from "lucide-react";

export default function AIChatbotProblemSection() {
  const features = [
    "Understands context instead of keyword matching.",
    "Handles complex conversations intelligently.",
    "Integrates with CRM, ERP & internal systems.",
    "Remembers conversation history.",
    "Provides 24/7 automated customer support.",
  ];

  return (
    <section className="bg-slate-50 py-10 lg:py-14">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">

              <div className="relative h-[560px] overflow-hidden rounded-2xl">
                <Image
                  src="/AI-chatbots.png"
                  alt="AI Chatbot Development"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute left-10 bottom-10 rounded-2xl bg-white shadow-2xl border border-slate-200 px-6 py-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                    <Bot className="h-6 w-6 text-sky-600" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      AI Assistant
                    </p>

                    <h4 className="font-bold text-slate-900">
                      Always Available
                    </h4>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>

            <span className="text-sky-600 font-semibold text-lg">
              What We Build
            </span>

            <h2 className="mt-3 text-2xl lg:text-3xl font-black leading-tight text-slate-900">
              AI Chatbots That Think,Understand &
           
           
              <span className="text-sky-600"> Automate.</span>
            </h2>

            <p className="mt-8 text-md leading-8 text-slate-600">
              We design and build production-grade AI chatbots powered by
              the latest large language models. From customer service
              automation to internal knowledge assistants, our chatbots go
              far beyond simple FAQ bots — they reason, remember context,
              and escalate intelligently.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 text-sky-600 flex-shrink-0" />

                  <p className="text-md text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Cards */}

            <div className="mt-12 grid grid-cols-2 gap-3">

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-lg transition">
                <BrainCircuit className="h-6 w-6 text-sky-600" />
                <h4 className="mt-3 font-bold text-sm leading-tight">LLM Powered</h4>
                <p className="mt-1.5 text-slate-500 text-xs leading-relaxed">GPT, Claude, Gemini & open-source models.</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-lg transition">
                <Database className="h-6 w-6 text-sky-600" />
                <h4 className="mt-3 font-bold text-sm leading-tight">Knowledge Base</h4>
                <p className="mt-1.5 text-slate-500 text-xs leading-relaxed">Connect PDFs, CRM and databases.</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-lg transition">
                <MessageSquare className="h-6 w-6 text-sky-600" />
                <h4 className="mt-3 font-bold text-sm leading-tight">Omnichannel</h4>
                <p className="mt-1.5 text-slate-500 text-xs leading-relaxed">Website, WhatsApp, Slack & Teams.</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-lg transition">
                <Bot className="h-6 w-6 text-sky-600" />
                <h4 className="mt-3 font-bold text-sm leading-tight">Smart Automation</h4>
                <p className="mt-1.5 text-slate-500 text-xs leading-relaxed">Reduce support workload instantly.</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}