import FAQSection from "@/components/FAQSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero"
import Introduction from "@/components/Introduction";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Introduction/>
      <Testimonials/>
      <FAQSection/>
      
      
    </div>
  );
}
