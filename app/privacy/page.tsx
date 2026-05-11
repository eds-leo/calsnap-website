export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0F2E] via-[#2B1145] to-[#3A165C]">
      <div className="container mx-auto max-w-4xl px-4 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-white/60">Last updated: May 11, 2025</p>
        </div>

        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl p-8 md:p-12 space-y-8 text-white/80 leading-relaxed">

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Introduction</h2>
          <p>
            CalSnap (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use our mobile
            application (&ldquo;the App&rdquo;). By using CalSnap, you consent to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Information We Collect</h2>

          <h3 className="text-xl font-semibold mb-3 text-purple-300">Personal Information</h3>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Account information (email address, authentication provider)</li>
            <li>Profile data (name, date of birth, gender, height, weight)</li>
            <li>Health and fitness goals</li>
            <li>Dietary preferences, restrictions, and food allergies</li>
            <li>Health conditions relevant to nutrition</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-purple-300">Usage Information</h3>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Meal photos and AI-analyzed nutrition data</li>
            <li>Food intake logs and daily summaries</li>
            <li>AI Coach conversation history</li>
            <li>App usage statistics and feature interactions</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-purple-300">Health Data</h3>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Apple HealthKit data (if you grant permission) — read and write access for calories, macronutrients, and activity</li>
            <li>Weight and body measurement tracking</li>
            <li>Calorie and macronutrient tracking</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-purple-300">Subscription Information</h3>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Subscription status and plan tier (managed via RevenueCat)</li>
            <li>We do not store payment card details — all payments are processed by Apple or Google</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Provide personalized nutrition recommendations via AI analysis</li>
            <li>Analyze food photos using AI to estimate nutritional content</li>
            <li>Power the AI Coach feature for personalized dietary guidance</li>
            <li>Track your progress toward health and nutrition goals</li>
            <li>Generate daily nutrition summaries and insights</li>
            <li>Send notifications and meal reminders (with your permission)</li>
            <li>Improve our services, AI models, and develop new features</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Data Storage and Security</h2>
          <p>
            Your data is stored securely using industry-standard encryption. We use Supabase for data
            storage with row-level security policies ensuring you can only access your own data.
            All data is transmitted over HTTPS/TLS encryption. We implement appropriate technical and
            organizational security measures to protect your information from unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Third-Party Services</h2>
          <p className="text-white/70">We use the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2 text-white/70">
            <li><strong className="text-white">OpenAI:</strong> For AI-powered food recognition, nutrition analysis, and AI Coach conversations. Meal photos and text are sent to OpenAI for processing.</li>
            <li><strong className="text-white">RevenueCat:</strong> For subscription management and entitlement verification. RevenueCat receives your anonymous user ID and purchase receipts.</li>
            <li><strong className="text-white">Apple HealthKit:</strong> For syncing health and activity data (only with your explicit permission). Health data is never shared with advertisers.</li>
            <li><strong className="text-white">Supabase:</strong> For secure data storage, authentication, and serverless functions.</li>
            <li><strong className="text-white">Apple Sign-In / Google OAuth:</strong> For secure authentication.</li>
            <li><strong className="text-white">Expo / EAS:</strong> For app delivery and push notifications.</li>
          </ul>
          <p className="mt-4 text-white/70">
            These services have their own privacy policies governing their use of your information.
            We encourage you to review their policies.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Tracking and Analytics</h2>
          <p className="text-white/70">
            CalSnap does not use third-party advertising trackers. We collect anonymous usage analytics
            to improve the App experience. We do not sell your personal data to third parties. We do not
            track you across other apps or websites. In accordance with Apple&apos;s App Tracking Transparency
            framework, we do not engage in tracking as defined by Apple.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Your Rights</h2>
          <p className="text-white/70">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data and account</li>
            <li>Export your data (available in Account Settings)</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
            <li>Revoke HealthKit permissions at any time via iOS Settings</li>
          </ul>
          <p className="mt-4 text-white/70">
            To exercise these rights, use the Account Settings within the App or contact us via our
            contact form.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Data Retention</h2>
          <p className="text-white/70">
            We retain your personal information for as long as your account is active or as needed to
            provide you services. If you request account deletion, we will delete your data within 30 days,
            except where we are required by law to retain certain information. Anonymized, aggregated data
            may be retained indefinitely for service improvement.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Children&apos;s Privacy</h2>
          <p className="text-white/70">
            CalSnap is not intended for children under 13 years of age. We do not knowingly collect
            personal information from children under 13. If we become aware that we have collected data
            from a child under 13, we will delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">International Users</h2>
          <p className="text-white/70">
            Your information may be transferred to and processed in countries other than your own.
            By using CalSnap, you consent to the transfer of your information to the United States
            and other jurisdictions where our service providers operate.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Changes to This Policy</h2>
          <p className="text-white/70">
            We may update this Privacy Policy from time to time. We will notify you of material changes
            by posting the new Privacy Policy on this page, updating the &ldquo;Last updated&rdquo; date, and
            where appropriate, notifying you via the App. Continued use of CalSnap after changes
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-white/70">
            If you have questions about this Privacy Policy, please contact us through our{' '}
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
