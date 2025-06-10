import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const TermsPage = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text inline-block">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg font-semibold">Last Updated: May 6th 2025</p>
            
            <p>
              Welcome to Island AI Ltd. ("Company", "we", "our", or "us"). These Terms and Conditions ("Terms") govern your 
              use of our website, products, software services, and any other services we provide, including AI automation 
              solutions, chatbot development, and SaaS platforms (collectively, the "Services").
            </p>
            
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part 
              of these Terms, you must not use our Services.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Company Information</h2>
            <p>Island AI Ltd.</p>
            <p>Royal Road Belle Vue Maurel</p>
            <p>Company Registration No: C24205381</p>
            <p>Email: support@islandai.co</p>
            <p>Website: <a href="https://www.islandai.co" className="text-islandai-purple hover:underline">https://www.islandai.co</a></p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
            <p>Island AI Ltd. provides the following services:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>AI Automation & Workflow Optimization</li>
              <li>Custom AI Chatbot Development</li>
              <li>Software-as-a-Service (SaaS) platforms (e.g., productivity tools, chat automation platforms)</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our Services at any time without notice.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p>Some of our Services require account registration. You agree to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your password</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Use the Services for any unlawful purpose</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Reverse engineer, decompile, or disassemble any part of the software</li>
              <li>Upload or distribute malicious code, spam, or unauthorized data collection tools</li>
            </ul>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Payment and Subscriptions</h2>
            <p>Some features of our Services may require payment. By subscribing or purchasing, you agree to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Pay all applicable fees as described at the time of purchase</li>
              <li>Authorize us or our third-party payment processors to charge your payment method</li>
              <li>Understand that subscriptions will auto-renew unless cancelled before the renewal date</li>
            </ul>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              All content, trademarks, service marks, and software associated with Island AI Ltd. are the intellectual 
              property of Island AI Ltd. or its licensors. You are granted a limited, non-transferable license to use our 
              Services for personal or business use, as applicable.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Privacy</h2>
            <p>
              Your privacy is important to us. Please review our <Link to="/privacy" className="text-islandai-purple hover:underline">Privacy Policy</Link> to 
              understand how we collect, use, and protect your data.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. SaaS-Specific Terms</h2>
            <p>
              By using any of our SaaS offerings, you agree to the specific Service Level Agreements (SLAs), usage limits, 
              and third-party integrations described in the respective product documentation or user agreements.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Services at our sole discretion, without notice, 
              if we believe you are violating these Terms or any applicable law.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Island AI Ltd. shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages arising out of or relating to your use of the Services.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Island AI Ltd., its officers, directors, employees, and agents 
              from any claims, liabilities, damages, or expenses arising out of your use of the Services or violation of these Terms.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of Mauritius, 
              without regard to its conflict of law principles.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">13. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Changes will be posted on this page with an updated "Last Updated" date. 
              Your continued use of the Services constitutes acceptance of the revised Terms.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">14. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p><strong>Email:</strong> support@islandai.co</p>
            <p><strong>Mailing Address:</strong> Royal Road Belle Vue Maurel</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
