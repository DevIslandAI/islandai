
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const bgRingsRef = useRef<HTMLDivElement>(null);

  // Interactive background effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRingsRef.current) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Move background elements based on mouse position for parallax effect
        bgRingsRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-islandai-purple/20 rounded-full blur-3xl animate-pulse-light"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-islandai-blue/20 rounded-full blur-3xl animate-pulse-light" style={{animationDelay: '2s'}}></div>
      
      {/* Moving background rings */}
      <div ref={bgRingsRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 border-2 border-islandai-purple/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 border border-islandai-blue/10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-islandai-purple/20 rounded-full"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div 
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-islandai-purple/10 to-islandai-blue/10 border border-islandai-purple/20 animate-fade-in"
            style={{animationDelay: '0.3s'}}
          >
            <span className="text-sm font-medium text-islandai-purple-dark">Automations & AI Agents</span>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight gradient-text animate-gradient-shift"
          >
            Empower Your Business with AI Solutions
          </h1>
          
          <p 
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl animate-fade-in"
            style={{animationDelay: '0.6s'}}
          >
            Island AI helps companies save valuable time and resources through custom AI agents and smart automation workflows.
          </p>
          
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-islandai-purple to-islandai-blue text-white px-8 py-6 text-lg rounded-xl hover:shadow-lg hover:shadow-islandai-purple/20 transition-all duration-300 animate-fade-in hover:scale-105"
            style={{animationDelay: '0.9s'}}
          >
            Get in touch
          </Button>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full border border-islandai-purple/30 animate-float hidden md:block"></div>
        <div className="absolute bottom-1/4 right-10 w-12 h-12 rounded-full border border-islandai-blue/30 animate-float animation-delay-2000 hidden md:block" style={{animationDelay: '2s'}}></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-islandai-purple/20 rounded-full animate-ping hidden md:block" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-islandai-blue/20 rounded-full animate-ping hidden md:block" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
      </div>
    </section>
  );
}
