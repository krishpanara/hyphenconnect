"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export default function AIChatbotHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <Image
        src="/aichatbotbanner.png"
        alt="AI Chatbot Development"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 h-screen flex items-center mt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left */}
          <div className="max-w-2xl">

            <span className="mt-12 inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1.5 text-sky-400 text-xs backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              AI Development Services
            </span>

            <h1 className="mt-6 text-xl lg:text-2xl font-black leading-tight text-white">
              Build Intelligent
              <span className="block text-sky-400">
                AI Chatbots
              </span>
              For Modern Businesses
            </h1>

            <p className="mt-4 text-xs lg:text-sm text-gray-300 leading-6 max-w-xl">
              Custom intelligent chatbots that understand context,
              automate conversations, handle complex queries, and integrate
              seamlessly with your CRM, ERP, website, WhatsApp, and internal
              business systems.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="group rounded-lg bg-sky-500 hover:bg-sky-600 transition px-5 py-2.5 text-sm font-semibold text-white flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              <button className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition px-5 py-2.5 text-sm text-white font-semibold">
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">

              <div>
                <h3 className="text-2xl font-bold text-white">100+</h3>
                <p className="text-gray-400 mt-1 text-sm">AI Solutions</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">24/7</h3>
                <p className="text-gray-400 mt-1 text-sm">Automated Support</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">99%</h3>
                <p className="text-gray-400 mt-1 text-sm">Customer Satisfaction</p>
              </div>

            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:flex justify-end">

            <div className="relative">

              {/* Main Glass Card */}
              {/* <div className="w-[420px] rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl p-8 shadow-2xl">

                <div className="flex items-center gap-4">

                  <div className="h-14 w-14 rounded-2xl bg-sky-500 flex items-center justify-center">
                    <MessageCircle className="text-white w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="text-white text-xl font-bold">
                      AI Assistant
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Online • Ready to Help
                    </p>
                  </div>

                </div>

                <div className="mt-8 space-y-4">

                  <div className="rounded-2xl bg-white/10 p-4 text-gray-200">
                    👋 Hello! How can I help your business today?
                  </div>

                  <div className="rounded-2xl bg-sky-500 p-4 text-white ml-12">
                    I need an AI chatbot for customer support.
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 text-gray-200">
                    Great! We can build a GPT-powered chatbot integrated with
                    your website, CRM, WhatsApp, and knowledge base.
                  </div>

                </div>

                <button className="mt-8 w-full rounded-xl bg-sky-500 hover:bg-sky-600 py-4 font-semibold text-white transition">
                  Start AI Project
                </button>

              </div> */}

              {/* Floating Cards */}

              {/* <div className="absolute -top-8 -left-10 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-5">
                <p className="text-sky-400 font-semibold">Response Time</p>
                <h4 className="text-white text-3xl font-bold">&lt;2 sec</h4>
              </div> */}

              {/* <div className="absolute -bottom-8 -right-10 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-5">
                <p className="text-sky-400 font-semibold">Automation</p>
                <h4 className="text-white text-3xl font-bold">95%</h4>
              </div> */}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}