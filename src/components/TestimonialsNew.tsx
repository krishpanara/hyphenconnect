"use client";

import Image from "next/image";
import { ArrowRight, Play, Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#fcfcfc]">
      <div className="container">

        <div className="spacing grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div className="relative group">

            <div className="relative overflow-hidden rounded-2xl shadow-xl">

              <Image
                src="/Testimonials2.png"
                alt="Customer Story"
                width={900}
                height={850}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Play Button */}

              <button className="absolute inset-0 flex items-center justify-center">

                <div className="w-20 h-20  bg-black/40 backdrop-blur-sm flex items-center justify-center transition group-hover:scale-110">

                  <Play
                    className="fill-white text-white ml-1"
                    size={34}
                  />

                </div>

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="text-sky-500 font-semibold uppercase tracking-wide text-sm" style={{ marginTop: '34px', display: 'block' }}>
              Testimonials
            </span>

            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Trusted by
              <br />
              Industry Leaders
            </h2>

            {/* <p className="mt-6 text-slate-600 text-lg leading-8">
              Don't just take our word for it — hear from businesses that have
              transformed their operations with our AI solutions.
            </p> */}

            {/* Quote */}

            <div className="mt-8 relative">

             

              <p className="relative text-slate-700 leading-8 pl-5">
                The ERP AI integration Hyphen Labs built for us is nothing short of remarkable. Our operations team can query inventory, generate reports, and get predictive insights using plain English. We&apos;ve seen a <strong>50% improvement in operational efficiency</strong> and saved over <strong>$2M in annual costs</strong>.
              </p>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-5" style={{ marginTop: '28px' }}>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 text-center">
                <h3 className="text-2xl font-bold text-sky-600">50%</h3>
                <p className="text-sm text-slate-600 mt-2">Efficiency Improvement</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 text-center">
                <h3 className="text-2xl font-bold text-sky-600">$2M</h3>
                <p className="text-sm text-slate-600 mt-2">Annual Savings</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 text-center">
                <h3 className="text-2xl font-bold text-sky-600">Real-time</h3>
                <p className="text-sm text-slate-600 mt-2">ERP Insights</p>
              </div>

            </div>

            {/* Customer */}

            {/* <div className="flex items-center gap-4" style={{ marginTop: '28px' }}>
              <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                DO
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">David Okonkwo</h4>
                <p className="text-slate-500 text-sm">VP of Operations · TechFlow Manufacturing</p>
              </div>
            </div> */}

            {/* Button */}

            <button className="mb-10 inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 transition px-7 py-4  text-white font-semibold" style={{ marginTop: '18px' }}>
              Read More Stories
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}