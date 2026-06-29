"use client";

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
              "url('/terms-of-use.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.3,
          }}
        />
        <div className="relative z-10 container h-full flex flex-col justify-end pb-12">
          <h1 className={`${openSans.className} text-white font-bold text-[32px] md:text-[32px] leading-tight m-0 p-0 text-left`}>
            Terms of Use


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
1. Acceptance of Terms
    </h2>
    <p>
     By accessing and using Hyphen Labs's website or engaging our services, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.


    </p>
  </div>

  <div className="mb-16 space-y-5">
    <h2 className="font-bold text-[17px] text-[#242424]">
    2. Services

    </h2>
    <p>
      Hyphen Labs provides custom AI development, integration, and consulting services. Specific service terms, deliverables, timelines, and payment conditions are outlined in individual project agreements signed with each client.


    </p>
  </div>

  <div className="mb-16 space-y-5">
    <h2 className="font-bold text-[17px] text-[#242424]">
      3. Intellectual Property
           
    </h2>
    <p>
  Unless otherwise agreed in a project contract, custom AI solutions built for clients become the client's property upon full payment. Our proprietary frameworks, tooling, and reusable components remain the property of Hyphen Labs.


    </p>
  </div>

  <div className="mb-16 space-y-5">
    <h2 className="font-bold text-[17px] text-[#242424]">
     4. Confidentiality

    </h2>
    <p>
     We treat all client business information, data, and project details as strictly confidential. NDAs are available upon request before any discovery discussions.


    </p>
  </div>
  
    <div className="mb-16 space-y-5">
    <h2 className="font-bold text-[17px] text-[#242424]">
    5. Limitation of Liability


    </h2>
    <p>
Hyphen Labs's liability is limited to the fees paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages.



    </p>
  </div>


  <div className="mb-16 space-y-5">
    <h2 className="font-bold text-[17px] text-[#242424]">
6. Contact
    </h2>
    <p>
      For terms-related questions, contact us at 

{" "}
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
