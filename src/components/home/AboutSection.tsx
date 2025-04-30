
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-islandai-purple/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-islandai-blue/20 rounded-full blur-xl"></div>
              
              <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-islandai-purple"></div>
                  <div className="w-3 h-3 rounded-full bg-islandai-blue"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-4/5"></div>
                </div>
                
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="h-20 bg-islandai-purple/10 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-islandai-purple-dark text-3xl">1k+</span>
                  </div>
                  <div className="h-20 bg-islandai-blue/10 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-islandai-blue text-3xl">24/7</span>
                  </div>
                  <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-gray-600 text-3xl">AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text inline-block">About Island AI</h2>
            
            <p className="text-gray-600 mb-6">
              Launched in Mauritius in 2024, Island AI has quickly established itself as a leading provider of AI solutions both locally and internationally. Our team of experts is dedicated to helping businesses leverage the power of artificial intelligence to optimize operations and drive growth.
            </p>
            
            <p className="text-gray-600 mb-6">
              We specialize in creating custom AI Automations and Chatbots that are tailored to each client's unique needs. Our solutions have helped companies save over 1,000 hours of work time, allowing teams to focus on what matters most.
            </p>
            
            <div className="bg-islandai-purple/5 border border-islandai-purple/20 p-4 rounded-lg">
              <p className="text-islandai-purple-dark font-medium">
                "Our mission is to make cutting-edge AI technology accessible to businesses of all sizes, empowering them to work smarter, not harder."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
