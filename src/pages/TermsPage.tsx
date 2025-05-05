
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TermsPage = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text inline-block">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>Last Updated: April 30, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to Island AI. These Terms and Conditions govern your use of our website and services. 
              By accessing or using Island AI services, you agree to be bound by these Terms and Conditions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
            <p>
              Island AI provides AI-powered automation solutions and chatbots for businesses. Our services 
              include but are not limited to Voiceflow Analytics Dashboard, Laws.mu, and Email Drafter.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate and complete information. 
              You are solely responsible for the activity that occurs on your account and must keep your account password secure.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Privacy Policy</h2>
            <p>
              Our Privacy Policy describes how we handle the information you provide to us. By using Island AI, 
              you acknowledge that you have read and understand our Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              The content, organization, graphics, design, compilation, and other matters related to the 
              Island AI website and services are protected by applicable copyrights and other intellectual property rights.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Island AI be liable for any indirect, incidental, special, consequential, or 
              punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
            <p>
              Island AI reserves the right to modify or replace these Terms at any time. If a revision is material, 
              we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at support@islandai.co.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
