"use client";

import Link from "next/link";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-screen font-['Inter',sans-serif]">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[320px] bg-black overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('/privacy-policy.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.3,
          }}
        />
        <div className="relative z-10 container h-full flex flex-col justify-end pb-12">
          <h1 className={`${openSans.className} text-white font-bold text-[32px] md:text-[32px] leading-tight m-0 p-0 text-left`}>
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="w-full">
   <div
  className="text-[#444] text-[15px] leading-[1.8]"
  style={{ padding: "100px 120px" }}
>

  <div className="mb-16 space-y-5">
    <h2 className="font-bold text-[17px] text-[#242424]">
      1. Information We Collect
    </h2>
    <p>
      We collect information you provide directly to us, such as when you fill
      out our contact form, book a consultation, or communicate with our team.
      This includes your name, email address, company name, phone number, and
      project details.
    </p>
  </div>

  <div className="mb-16 space-y-5">
    <h2 className="font-bold text-[17px] text-[#242424]">
      2. How We Use Your Information
    </h2>
    <p>
      We use the information we collect to respond to your inquiries, provide
      our AI services, send relevant communications about our solutions, and
      improve our offerings. We never sell your personal data to third parties.
    </p>
  </div>

  <div className="mb-16 space-y-5">
    <h2 className="font-bold text-[17px] text-[#242424]">
      3. Data Security
    </h2>
    <p>
      We implement industry-standard security measures to protect your
      information. All data transmitted through our systems is encrypted.
      For enterprise clients, we offer on-premise deployment options that
      ensure your data never leaves your infrastructure.
    </p>
  </div>

  <div className="mb-16 space-y-5">
    <h2 className="font-bold text-[17px] text-[#242424]">
      4. Cookies
    </h2>
    <p>
      Our website uses essential cookies for functionality and analytics
      cookies to understand how visitors interact with our site. You can
      disable non-essential cookies through your browser settings.
    </p>
  </div>

  <div className="mb-16 space-y-5">
    <h2 className="font-bold text-[17px] text-[#242424]">
      5. Contact
    </h2>
    <p>
      For privacy-related questions, contact us at{" "}
      <a
        href="mailto:hello@hyphenone.ai"
        className="text-[#63b3ed] hover:underline"
      >
        hello@hyphenone.ai
      </a>
    </p>
  </div>

  <p className="text-[13px] text-gray-400 uppercase tracking-widest">
    Last updated: June 2025
  </p>
</div>
      </section>

   
      <Footer />
    </main>
  );
}
