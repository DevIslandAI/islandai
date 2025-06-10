import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrivacyPage = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text inline-block">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg font-semibold">Effective Date: May 6th 2025</p>
            
            <p>
              Island AI Ltd. ("Company", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website, chatbot services, automation solutions, and Software-as-a-Service (SaaS) platforms (collectively, the "Services").
            </p>
            
            <p>
              By using our Services, you agree to the practices described in this Privacy Policy.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-3">a. Information You Provide to Us:</h3>
            <ul className="list-disc ml-6 mb-4">
              <li>Name, email address, company name, phone number, and other contact details</li>
              <li>Payment and billing information (processed via secure third-party providers)</li>
              <li>Chatbot interactions, support messages, and survey responses</li>
              <li>Account registration details</li>
            </ul>
            
            <h3 className="text-xl font-medium mt-6 mb-3">b. Information We Collect Automatically:</h3>
            <ul className="list-disc ml-6 mb-4">
              <li>IP address, browser type, operating system</li>
              <li>Usage data (pages visited, features used, session duration)</li>
              <li>Device identifiers and cookies</li>
            </ul>
            
            <h3 className="text-xl font-medium mt-6 mb-3">c. Third-Party Integrations:</h3>
            <ul className="list-disc ml-6 mb-4">
              <li>If you connect third-party services (e.g., WhatsApp, Slack, CRMs), we may collect data shared via those platforms as part of our service delivery.</li>
            </ul>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Provide and maintain our Services</li>
              <li>Improve user experience and develop new features</li>
              <li>Process transactions and send billing notifications</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Send updates, service announcements, or marketing communications (with opt-out options)</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Legal Basis for Processing</h2>
            
            <p>
              If you are located in the European Economic Area (EEA), we process your personal information under the following legal bases:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Your consent</li>
              <li>Contractual necessity</li>
              <li>Legal obligations</li>
              <li>Legitimate business interests (e.g., improving our services)</li>
            </ul>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sharing Your Information</h2>
            
            <p>
              We do <strong>not</strong> sell or rent your personal data. We may share your information with:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li><strong>Trusted service providers</strong> (e.g., payment processors, cloud hosting)</li>
              <li><strong>Business partners</strong> where integrations or white-label solutions are involved</li>
              <li><strong>Authorities</strong> if required by law or to protect our legal rights</li>
            </ul>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
            
            <p>We retain your information for as long as necessary to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Provide the Services</li>
              <li>Fulfill legal and accounting obligations</li>
              <li>Resolve disputes and enforce our agreements</li>
            </ul>
            
            <p>You may request deletion of your data by contacting us (see Section 9).</p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights and Choices</h2>
            
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Access, correct, or delete your personal data</li>
              <li>Object to or restrict our processing of your data</li>
              <li>Withdraw your consent at any time</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            
            <p>To exercise any of these rights, contact us at <strong>support@islandai.co</strong>.</p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
            
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Recognize returning users</li>
              <li>Track usage and analytics</li>
              <li>Customize your experience</li>
            </ul>
            
            <p>You can control cookie settings via your browser preferences.</p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Data Security</h2>
            
            <p>
              We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. International Data Transfers</h2>
            
            <p>
              Your information may be transferred to and maintained on servers located outside your country. By using our Services, you consent to such transfers in accordance with this Privacy Policy.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Children's Privacy</h2>
            
            <p>
              Our Services are not intended for individuals under the age of 13 (or 16 in some jurisdictions). We do not knowingly collect personal data from children. If you believe we have done so, please contact us immediately.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to This Privacy Policy</h2>
            
            <p>
              We may update this Privacy Policy occasionally. When we do, we'll revise the "Effective Date" at the top. Continued use of the Services means you accept the updated terms.
            </p>
            
            <hr className="my-6" />
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
            
            <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
            
            <p><strong>Island AI Ltd.</strong></p>
            <p>Email: support@islandai.co</p>
            <p>Website: <a href="https://www.islandai.co" className="text-islandai-purple hover:underline">https://www.islandai.co</a></p>
            <p>Mailing Address: Royal Road Belle Vue Maurel</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
