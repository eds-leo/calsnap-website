import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility - CalSnap',
  description: 'CalSnap is committed to making nutrition tracking accessible to everyone. Learn about our accessibility features including VoiceOver, Voice Control, Dark Mode, and more.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0F2E] via-[#2B1145] to-[#3A165C]">
      <div className="container mx-auto max-w-4xl px-4 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">♿</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 bg-clip-text text-transparent">
              Accessibility
            </span>
          </h1>
          <p className="text-white/60">Making nutrition tracking accessible to everyone</p>
        </div>

        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl p-8 md:p-12 space-y-8 text-white/80 leading-relaxed">
          <div className="text-center my-8">
            <div className="text-6xl font-extrabold text-[#59E36A]">86%</div>
            <p className="text-lg text-white/60 mt-2">Accessibility Features Supported</p>
          </div>

          <p>
            We believe everyone deserves access to powerful nutrition tracking tools.
            That's why we've built CalSnap with accessibility at its core, supporting
            Apple's accessibility features and following industry best practices.
          </p>

          <section>
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">✅ Supported Features</h2>

            <div className="space-y-6">
              <FeatureCard
                title="📱 VoiceOver (Screen Reader)"
                badge="Fully Supported"
                badgeColor="bg-[#59E36A]"
              >
                <p className="mb-4">
                  Navigate CalSnap completely using VoiceOver. We've added 275+ accessibility
                  labels throughout the app so every button, image, and interactive element
                  is clearly announced.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Log meals entirely hands-free</li>
                  <li>Hear nutrition information read aloud</li>
                  <li>Navigate all screens without seeing them</li>
                  <li>Clear feedback for all actions</li>
                </ul>
              </FeatureCard>

              <FeatureCard
                title="🎤 Voice Control"
                badge="Fully Supported"
                badgeColor="bg-[#59E36A]"
              >
                <p className="mb-4">
                  Control CalSnap using only your voice. All buttons and interactive elements
                  work with voice commands like "Tap add meal" or "Tap save."
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Navigate using voice commands</li>
                  <li>Dictate meal notes and information</li>
                  <li>All features accessible via voice</li>
                </ul>
              </FeatureCard>

              <FeatureCard
                title="📏 Larger Text (Dynamic Type)"
                badge="Fully Supported"
                badgeColor="bg-[#59E36A]"
              >
                <p className="mb-4">
                  Adjust text size system-wide and CalSnap adapts automatically. Text scales
                  up to 200%+ without breaking the layout or hiding content.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respects iOS text size settings</li>
                  <li>Layouts adapt to larger text</li>
                  <li>Nothing gets cut off or hidden</li>
                </ul>
              </FeatureCard>

              <FeatureCard
                title="🌙 Dark Mode"
                badge="Fully Supported"
                badgeColor="bg-[#59E36A]"
              >
                <p className="mb-4">
                  Choose between Light, Dark, or System themes. Dark mode reduces eye strain
                  and is perfect for light-sensitive users or low-light environments.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full dark theme throughout the app</li>
                  <li>High contrast for readability</li>
                  <li>Comfortable viewing in any lighting</li>
                </ul>
              </FeatureCard>

              <FeatureCard
                title="🎨 Color Independence"
                badge="Fully Supported"
                badgeColor="bg-[#59E36A]"
              >
                <p className="mb-4">
                  We never rely on color alone to convey information. All status indicators
                  use icons, text labels, and shapes so color-blind users don't miss anything.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Icons accompany all color-coded items</li>
                  <li>Text labels describe all states</li>
                  <li>Works for all types of color blindness</li>
                </ul>
              </FeatureCard>

              <FeatureCard
                title="🔆 Sufficient Contrast"
                badge="Fully Supported"
                badgeColor="bg-[#59E36A]"
              >
                <p className="mb-4">
                  All text and interactive elements meet WCAG AA and AAA contrast standards.
                  Users with low vision or viewing in bright sunlight can read everything clearly.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>15:1+ contrast ratio for text</li>
                  <li>Clear boundaries around buttons</li>
                  <li>Readable in all lighting conditions</li>
                </ul>
              </FeatureCard>

              <FeatureCard
                title="🎬 Reduced Motion"
                badge="Partial Support"
                badgeColor="bg-[#FFB84D]"
              >
                <p className="mb-4">
                  Our animations are gentle and non-disruptive. We avoid spinning, zooming,
                  or peripheral motion that could trigger vestibular sensitivity.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No spinning or aggressive animations</li>
                  <li>Gentle fades and slides only</li>
                  <li>Safe for motion-sensitive users</li>
                </ul>
              </FeatureCard>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">How to Use CalSnap with Accessibility Features</h2>

            <div className="space-y-6">
              <HowToSection title="Enabling VoiceOver">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open <strong>Settings</strong> on your iPhone</li>
                  <li>Go to <strong>Accessibility → VoiceOver</strong></li>
                  <li>Toggle <strong>VoiceOver</strong> on</li>
                  <li>Open CalSnap and navigate with swipes</li>
                </ol>
              </HowToSection>

              <HowToSection title="Adjusting Text Size">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open <strong>Settings</strong> on your iPhone</li>
                  <li>Go to <strong>Display & Brightness → Text Size</strong></li>
                  <li>Drag the slider to your preferred size</li>
                  <li>CalSnap will automatically adapt</li>
                </ol>
              </HowToSection>

              <HowToSection title="Enabling Dark Mode">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open CalSnap</li>
                  <li>Go to <strong>Profile → Settings → Theme</strong></li>
                  <li>Choose <strong>Dark</strong> or <strong>System</strong></li>
                </ol>
              </HowToSection>
            </div>
          </section>

          <section className="bg-purple-500/20 border-2 border-purple-400/40 rounded-xl p-6 mt-12">
            <h3 className="text-xl font-bold text-purple-300 mb-4">📧 Accessibility Feedback</h3>
            <p className="mb-4">
              Have suggestions for improving accessibility? Experiencing an accessibility
              issue? We want to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </section>

          <footer className="mt-12 pt-6 border-t-2 border-white/10 text-center text-white/60">
            <p>
              <a href="/" className="hover:text-white transition-colors">CalSnap Home</a> •{' '}
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a> •{' '}
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </p>
            <p className="mt-4">© 2026 CalSnap. All rights reserved.</p>
            <p className="mt-2 text-sm">Last Updated: April 2026</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  badge,
  badgeColor,
  children,
}: {
  title: string;
  badge: string;
  badgeColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/5 border-l-4 border-purple-400 rounded-lg p-6">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <h3 className="text-xl font-semibold text-purple-300">{title}</h3>
        <span className={`${badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold uppercase`}>
          {badge}
        </span>
      </div>
      <div className="text-white/70">{children}</div>
    </div>
  );
}

function HowToSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-purple-300 mb-3">{title}</h3>
      <div className="text-white/70">{children}</div>
    </div>
  );
}
