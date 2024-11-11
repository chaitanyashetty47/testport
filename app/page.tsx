import FAQSection from "@/components/FAQSection";
import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Hero from "@/components/Hero"
import Introduction from "@/components/Introduction";
import ProgramsCard from "@/components/ProgramsCard";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Featured/>
      <Introduction/>
      <section className='container mx-auto px-4 text-center mt-20'>
          <h1 className="text-3xl font-thin bg-gradient-to-r from-purple-600 via-indigo-400 to-violet-700 inline-block text-transparent bg-clip-text mb-6">
            Our Programs
          </h1>
          <ProgramsCard/>
      </section>
     
      <Testimonials/>
      <FAQSection/>
      
      
    </div>
  );
}
