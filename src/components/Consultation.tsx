"use client";

import Image from "next/image";
import { ArrowRight, Calendar, Play } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-10">
      {/* Background Glow */}
      <div className="absolute inset-x-0 bottom-0 h-[420px] " />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '48px auto 0', padding: '0 80px 80px', textAlign: 'center' }}>

        {/* Heading */}

        <div style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}>

          <span className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-400">
            Free Consultation Available
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Build Your
            <br />
            AI-Powered Future?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join <span className="font-semibold text-white">50+ companies</span>{" "}
            that have transformed their operations with Hyphen Labs.
            Book a free 30-minute consultation and receive a
            custom AI roadmap tailored to your business.
          </p>
        </div>

        {/* Video */}

        <div className="relative mt-16" style={{ marginTop: '64px' }}>

          <div className="overflow-hidden  border border-sky-500/40 shadow-[0_0_80px_rgba(59,130,246,.18)]">

            <Image
              src="/Consultation.png"
              alt="Consultation"
              width={1600}
              height={900}
              className="aspect-video w-full object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 " />

            {/* Play Button */}

            <button className="absolute inset-0 flex items-center justify-center group">

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition duration-300 group-hover:scale-110">

                <Play
                  className="ml-1 fill-white text-white"
                  size={40}
                />

              </div>

            </button>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '56px' }}>

          <button className="inline-flex items-center justify-center gap-3 rounded-full bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600">

            <Calendar size={20} />

            Book Free Consultation

          </button>

          {/* <button className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10">

            See Our Process

            <ArrowRight size={18} />

          </button> */}

        </div>

        {/* Bottom Text */}

        {/* <div className="mt-8 text-center text-sm text-gray-400">

          No commitment required
          <span className="mx-3">•</span>
          Response within 24 hours
          <span className="mx-3">•</span>
          Free strategy session

        </div> */}

      </div>
    </section>
  );
}