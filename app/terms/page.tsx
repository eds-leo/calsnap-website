export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0F2E] via-[#2B1145] to-[#3A165C]">
      <div className="container mx-auto max-w-4xl px-4 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 bg-clip-text text-transparent">
              Terms of Use
            </span>
          </h1>
          <p className="text-white/60">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl p-8 md:p-12 space-y-8 text-white/80 leading-relaxed">

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing and using CalSnap ("the App"), you accept and agree to be bound by these Terms
            of Use. If you do not agree to these terms, please do not use the App.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">2. Description of Service</h2>
          <p>
            CalSnap is a nutrition tracking and meal planning application that uses AI-powered image
            recognition to help users log meals, track calories and macronutrients, and achieve their
            health and fitness goals.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">3. User Accounts</h2>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>You must be at least 13 years old to use CalSnap</li>
            <li>You are responsible for maintaining the security of your account</li>
            <li>You agree to provide accurate and complete information</li>
            <li>You are responsible for all activity under your account</li>
            <li>One account per person; sharing accounts is prohibited</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">4. Subscriptions and Payments</h2>
          <p>
            CalSnap offers both free and premium subscription tiers:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2 text-white/70">
            <li>Premium subscriptions are billed monthly or annually</li>
            <li>Payment is processed through Apple App Store or Google Play Store</li>
            <li>Subscriptions auto-renew unless canceled at least 24 hours before the renewal date</li>
            <li>Refunds are handled according to Apple/Google's refund policies</li>
            <li>We reserve the right to change pricing with notice to existing subscribers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">5. User Content and Data</h2>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>You retain ownership of photos and data you upload</li>
            <li>You grant us a license to use your content to provide and improve our services</li>
            <li>You are responsible for the accuracy of data you input</li>
            <li>We may use anonymized, aggregated data for research and service improvement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">6. Health Information Disclaimer</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="font-semibold text-yellow-900 mb-2">IMPORTANT HEALTH DISCLAIMER:</p>
            <ul className="list-disc pl-6 space-y-2 text-yellow-900">
              <li>CalSnap is for informational purposes only and is not medical advice</li>
              <li>AI-powered nutrition estimates may not be 100% accurate</li>
              <li>Always consult with healthcare professionals before making dietary changes</li>
              <li>Do not rely solely on CalSnap for managing medical conditions</li>
              <li>We are not liable for health outcomes resulting from use of the App</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">7. Acceptable Use</h2>
          <p>You agree NOT to:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Use the App for any illegal purpose</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Upload malicious content or code</li>
            <li>Abuse, harass, or harm other users</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use automated tools to access the App without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">8. Intellectual Property</h2>
          <p>
            All content, features, and functionality of CalSnap (including but not limited to text,
            graphics, logos, icons, images, and software) are owned by CalSnap and protected by
            copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">9. Third-Party Services</h2>
          <p>
            CalSnap integrates with third-party services (OpenAI, RevenueCat, Apple HealthKit, etc.).
            Your use of these services is subject to their respective terms and privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">10. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account at any time for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Violation of these Terms</li>
            <li>Fraudulent or illegal activity</li>
            <li>At your request</li>
          </ul>
          <p className="mt-2">
            Upon termination, your right to use the App will immediately cease.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">11. Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, CALSNAP SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES,
            WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
            INTANGIBLE LOSSES.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">12. Warranty Disclaimer</h2>
          <p>
            THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
            BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">13. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of material
            changes via the App or email. Continued use after changes constitutes acceptance of the
            new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">14. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the United States,
            without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">15. Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> legal@calsnap.me<br />
            <strong>Website:</strong> https://calsnap.me
          </p>
        </section>
        </div>
      </div>
    </div>
  );
}
