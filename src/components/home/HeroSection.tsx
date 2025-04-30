
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-islandai-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-islandai-blue/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-islandai-purple/10 to-islandai-blue/10 border border-islandai-purple/20">
            <span className="text-sm font-medium text-islandai-purple-dark">Automations & AI Agents</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight gradient-text animate-pulse-light">
            Empower Your Business with AI Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl">
            Island AI helps companies save valuable time and resources through custom AI agents and smart automation workflows.
          </p>
          
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-islandai-purple to-islandai-blue text-white px-8 py-6 text-lg rounded-xl hover:shadow-lg hover:shadow-islandai-purple/20 transition-all duration-300"
          >
            Get in touch
          </Button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full border border-islandai-purple/30 animate-float hidden md:block"></div>
        <div className="absolute bottom-1/4 right-10 w-12 h-12 rounded-full border border-islandai-blue/30 animate-float animation-delay-2000 hidden md:block"></div>
      </div>
    </section>
  );
}
