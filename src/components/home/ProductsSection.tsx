
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Product = {
  title: string;
  description: string;
  imageUrl: string;
};

const products: Product[] = [
  {
    title: "Voiceflow Analytics Dashboard",
    description: "A comprehensive analytics dashboard for your Voiceflow agents, providing insights into user interactions and performance metrics.",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Laws.mu",
    description: "The first Legal AI Assistant in Mauritius, providing legal information and guidance to businesses and individuals.",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Email Drafter",
    description: "An AI-powered tool that drafts email replies for you, saving time and ensuring professional communication.",
    imageUrl: "/placeholder.svg"
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 relative">
      <div className="absolute -top-40 right-0 w-96 h-96 bg-islandai-light-blue/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our suite of AI-powered solutions designed to streamline workflows and boost productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-card group">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-islandai-purple/10 to-islandai-blue/10 flex items-center justify-center">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-1/2 h-1/2 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
