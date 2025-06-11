
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Bot, GraduationCap } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Custom AI Automations",
    description: "Transform your workflow with tailor-made AI solutions that automate repetitive tasks and streamline operations, saving you countless hours while enhancing accuracy.",
    icon: <Settings className="w-12 h-12 text-islandai-purple" />
  },
  {
    title: "Custom AI Agents",
    description: "Deploy intelligent AI agents designed specifically for your industry needs, capable of handling complex interactions, making decisions, and learning from experience.",
    icon: <Bot className="w-12 h-12 text-islandai-blue" />
  },
  {
    title: "AI Training",
    description: "Learn the art and science of AI through our comprehensive training programs. We teach individuals and teams how to leverage AI tools, create custom automations, and implement AI solutions in their workflows.",
    icon: <GraduationCap className="w-12 h-12 text-islandai-purple-dark" />
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute -top-40 left-0 w-96 h-96 bg-islandai-light-blue/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our AI-powered services can transform your business and unlock new possibilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="product-card group h-full flex flex-col">
              <div className="p-8 flex items-center justify-center">
                {service.icon}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </div>
              <div className="p-6 pt-0">
                <Badge variant="outline" className="bg-gradient-to-r from-islandai-purple/10 to-islandai-blue/10 hover:from-islandai-purple/20 hover:to-islandai-blue/20 border-transparent text-gray-700 transition-all">
                  Learn more
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
