export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0F2E] via-[#2B1145] to-[#3A165C]">
      <div className="container mx-auto max-w-4xl px-4 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-white/60">Last updated: May 11, 2025</p>
        </div>

        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl p-8 md:p-12 space-y-8 text-white/80 leading-relaxed">

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
          <p className="text-white/70">
            By accessing and using CalSnap (&ldquo;the App&rdquo;), you accept and agree to be bound by these Terms
            of Service. If you do not agree to these terms, please do not use the App.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">2. Description of Service</h2>
          <p className="text-white/70">
            CalSnap is a nutrition tracking and meal planning application that uses AI-powered image
            recognition to help users log meals, track calories and macronutrients, and achieve their
            health and fitness goals. The App includes an AI Coach feature for personalized dietary guidance.
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
          <p className="text-white/70">
            CalSnap offers free and premium subscription tiers:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2 text-white/70">
            <li>Premium subscriptions are available as monthly or annual plans</li>
            <li>Family plans allow up to 6 members under a single subscription</li>
            <li>Payment is processed through Apple App Store or Google Play Store</li>
            <li>Subscriptions auto-renew unless canceled at least 24 hours before the end of the current billing period</li>
            <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
            <li>You can manage and cancel subscriptions in your device&apos;s App Store account settings</li>
            <li>Any unused portion of a free trial period will be forfeited upon purchasing a subscription</li>
            <li>Refunds are handled according to Apple&apos;s or Google&apos;s refund policies</li>
            <li>We reserve the right to change pricing with advance notice to existing subscribers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">5. Apple EULA</h2>
          <p className="text-white/70">
            This App is licensed to you under the{' '}
            <a
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 underline font-semibold"
            >
              Apple Standard End User License Agreement (EULA)
            </a>
            . By using CalSnap, you acknowledge and agree to the terms of the Apple EULA, which governs
            your use of apps downloaded from the App Store. In the event of any conflict between these
            Terms of Service and the Apple EULA, the Apple EULA shall take precedence with respect to
            App Store distribution matters.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">6. User Content and Data</h2>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>You retain ownership of photos and data you upload</li>
            <li>You grant us a non-exclusive license to use your content to provide and improve our services</li>
            <li>You are responsible for the accuracy of data you input</li>
            <li>We may use anonymized, aggregated data for research and service improvement</li>
            <li>Meal photos are sent to AI services for analysis and are not stored by those services beyond processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">7. AI Features Disclaimer</h2>
          <div className="bg-purple-500/10 border border-purple-400/30 rounded-xl p-6">
            <p className="font-semibold text-purple-200 mb-3">IMPORTANT — AI LIMITATIONS:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>AI-powered nutrition estimates are approximations and may not be 100% accurate</li>
              <li>The AI Coach provides general guidance, not medical or professional dietary advice</li>
              <li>AI results should be verified for accuracy, especially for allergen detection</li>
              <li>We continuously improve our AI but cannot guarantee error-free analysis</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">8. Health Information Disclaimer</h2>
          <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-6">
            <p className="font-semibold text-yellow-200 mb-3">IMPORTANT HEALTH DISCLAIMER:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>CalSnap is for informational purposes only and is not medical advice</li>
              <li>Always consult with healthcare professionals before making dietary changes</li>
              <li>Do not rely solely on CalSnap for managing medical conditions or food allergies</li>
              <li>We are not liable for health outcomes resulting from use of the App</li>
              <li>If you have a medical emergency, contact your local emergency services immediately</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">9. Acceptable Use</h2>
          <p className="text-white/70">You agree NOT to:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Use the App for any illegal purpose</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Upload malicious content or code</li>
            <li>Abuse, harass, or harm other users (including family group members)</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use automated tools to access the App without permission</li>
            <li>Circumvent usage limits or subscription restrictions</li>
            <li>Share subscription access with non-family members on a family plan</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">10. Intellectual Property</h2>
          <p className="text-white/70">
            All content, features, and functionality of CalSnap (including but not limited to text,
            graphics, logos, icons, images, AI models, and software) are owned by CalSnap and protected by
            copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">11. Third-Party Services</h2>
          <p className="text-white/70">
            CalSnap integrates with third-party services (OpenAI, RevenueCat, Apple HealthKit, Supabase, etc.).
            Your use of these services is subject to their respective terms and privacy policies.
            We are not responsible for the practices of these third-party services.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">12. Termination</h2>
          <p className="text-white/70">
            We reserve the right to suspend or terminate your account at any time for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Violation of these Terms</li>
            <li>Fraudulent or illegal activity</li>
            <li>Abuse of AI features or usage limits</li>
            <li>At your request (account deletion available in Settings)</li>
          </ul>
          <p className="mt-4 text-white/70">
            Upon termination, your right to use the App will immediately cease. Active subscriptions
            must be canceled through your App Store account settings to stop future charges.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">13. Limitation of Liability</h2>
          <p className="text-white/70">
            TO THE FULLEST EXTENT PERMITTED BY LAW, CALSNAP SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES,
            WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
            INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE APP.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">14. Warranty Disclaimer</h2>
          <p className="text-white/70">
            THE APP IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
            BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE,
            OR FREE OF HARMFUL COMPONENTS.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">15. Changes to Terms</h2>
          <p className="text-white/70">
            We reserve the right to modify these Terms at any time. We will notify users of material
            changes via the App or email. Continued use after changes constitutes acceptance of the
            new Terms. If you do not agree to the updated terms, you must stop using the App.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">16. Governing Law</h2>
          <p className="text-white/70">
            These Terms are governed by and construed in accordance with the laws of the United States,
            without regard to conflict of law principles. Any disputes shall be resolved in the courts
            of the applicable jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">17. Contact Information</h2>
          <p className="text-white/70">
            For questions about these Terms, please contact us through our{' '}
            <a href="/contact" className="text-purple-300 hover:text-purple-200 underline font-semibold">
              contact form
            </a>.
          </p>
          <p className="mt-2 text-white/70">
            <strong className="text-white">Website:</strong> https://calsnap.me
          </p>
        </section>
        </div>
      </div>
    </div>
  );
}
