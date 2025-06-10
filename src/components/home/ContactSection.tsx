
import { Button } from "@/components/ui/button";

type TeamMember = {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "Ryan",
    role: "COO",
    email: "ryan@islandai.co",
    linkedin: "https://www.linkedin.com/in/saulryan/",
    image: "/lovable-uploads/0ea9c6ff-e796-472f-b9f8-7d1609e7e607.png",
  },
  {
    name: "Renveer",
    role: "CEO",
    email: "renveer@islandai.co",
    linkedin: "https://www.linkedin.com/in/renveer-ramsaha/",
    image: "/lovable-uploads/b2b93af0-5746-4d64-8f06-b65a8543b426.png",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-islandai-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business with AI? Get in touch with our team to discuss how we can help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-center">{member.name}</h3>
              <p className="text-gray-500 text-center mb-4">{member.role}</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-islandai-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-islandai-purple transition-colors">
                    {member.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-islandai-purple" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-islandai-purple transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-gradient-to-br from-islandai-purple/10 to-islandai-blue/10 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-1">General Inquiries</h3>
              <p className="text-gray-600 mb-4">For any general questions about our services.</p>
              
              <div className="flex items-center space-x-2 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-islandai-purple" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:support@islandai.co" className="text-gray-600 hover:text-islandai-purple transition-colors">
                  support@islandai.co
                </a>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-islandai-purple to-islandai-blue text-white">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
