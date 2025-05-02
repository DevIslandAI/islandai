
import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import CursorEffect from "@/components/CursorEffect";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Scroll progress indicator
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for fade-in animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Select all sections and elements to animate
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("section-fade-in");
      observerRef.current?.observe(section);
    });

    // Animate individual elements with staggered delay
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el, index) => {
      el.classList.add("element-fade-in");
      (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
      observerRef.current?.observe(el);
    });

    // Add floating particles with reduced visibility
    const particleContainer = document.createElement('div');
    particleContainer.className = 'fixed inset-0 pointer-events-none z-0';
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 10; i++) { // Reduced from 20 to 10 particles
      const particle = document.createElement('div');
      const size = Math.random() * 6 + 3; // Reduced size from 10+5 to 6+3
      
      particle.className = 'absolute rounded-full';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = i % 2 === 0 
        ? 'linear-gradient(to bottom right, rgba(155, 135, 245, 0.15), rgba(14, 165, 233, 0.1))' // Reduced opacity
        : 'linear-gradient(to bottom right, rgba(14, 165, 233, 0.1), rgba(155, 135, 245, 0.15))'; // Reduced opacity
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.filter = 'blur(2px)'; // Increased blur for subtlety
      particle.style.opacity = (Math.random() * 0.2 + 0.05).toString(); // Significantly reduced opacity
      particle.style.animationDuration = `${Math.random() * 30 + 15}s`; // Slowed down animation
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationIterationCount = 'infinite';
      particle.style.animationName = 'float';
      particle.style.animationTimingFunction = 'ease-in-out';
      particle.style.zIndex = '-1'; // Place bubbles behind content
      
      particleContainer.appendChild(particle);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener("scroll", handleScroll);
      if (particleContainer.parentNode) {
        document.body.removeChild(particleContainer);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <CursorEffect />
      <Header />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-islandai-purple to-islandai-blue z-50" style={{ width: `${scrollProgress}%` }} />
      
      <main>
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
