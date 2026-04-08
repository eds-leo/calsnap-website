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
          <p className="text-white/60">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl p-8 md:p-12 space-y-8 text-white/80 leading-relaxed">

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Introduction</h2>
          <p>
            CalSnap ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use our mobile
            application.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Information We Collect</h2>

          <h3 className="text-xl font-semibold mb-3 text-purple-300">Personal Information</h3>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Account information (email address)</li>
            <li>Profile data (name, date of birth, gender, height, weight)</li>
            <li>Health and fitness goals</li>
            <li>Dietary preferences and restrictions</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-purple-300">Usage Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Meal photos and nutrition data</li>
            <li>Food intake logs</li>
            <li>Exercise and activity data</li>
            <li>App usage statistics</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 mt-6 text-purple-300">Health Data</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>HealthKit data on iOS / Google Fit data on Android (if you grant permission)</li>
            <li>Weight tracking</li>
            <li>Calorie and macro tracking</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide personalized nutrition recommendations</li>
            <li>Analyze food photos using AI to estimate nutritional content</li>
            <li>Track your progress toward health goals</li>
            <li>Send notifications and reminders</li>
            <li>Improve our services and develop new features</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
          <p>
            Your data is stored securely using industry-standard encryption. We use Supabase for data
            storage and implement appropriate security measures to protect your information from
            unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>OpenAI:</strong> For AI-powered food recognition and nutrition analysis</li>
            <li><strong>RevenueCat:</strong> For subscription management</li>
            <li><strong>Apple HealthKit / Google Fit:</strong> For syncing health and activity data (with your permission)</li>
            <li><strong>Apple Sign-In / Google OAuth:</strong> For authentication</li>
          </ul>
          <p className="mt-2">
            These services have their own privacy policies governing their use of your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Export your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is active or as needed to
            provide you services. If you request account deletion, we will delete your data within 30 days,
            except where we are required by law to retain certain information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p>
            CalSnap is not intended for children under 13 years of age. We do not knowingly collect
            personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us through our{' '}
            <a href="/contact" className="text-purple-300 hover:text-purple-200 underline font-semibold">
              contact form
            </a>.
          </p>
          <p className="mt-2">
            <strong>Website:</strong> https://calsnap.me
          </p>
        </section>
        </div>
      </div>
    </div>
  );
}
