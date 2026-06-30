import Footer from "@/components/Footer";
import AIChatbotHero from "./ai-chatbothero";
import AIChatbotProblemSection from "./AIChatbotProblemSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
        <Navbar/>
        <AIChatbotHero/>
        <AIChatbotProblemSection/>
        <Footer/>
    </main>
  )
}