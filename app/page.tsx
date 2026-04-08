import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0F2E] via-[#2B1145] to-[#3A165C]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white text-sm font-medium">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              Your AI Nutrition Companion
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 bg-clip-text text-transparent">
                CalSnap
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Your personal AI nutrition companion that helps you reach your health goals. Just snap a photo, and get instant insights and guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="https://apps.apple.com/us/app/ai-nutrition-companion/id6760557467"
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-400/50 hover:scale-105 transition-all duration-300 flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.calsnap"
                className="group relative px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <svg className="w-6 h-6 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span className="relative z-10">Download on Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📸",
                title: "Snap & Track",
                description: "Just take a photo. Our AI instantly recognizes food and calculates nutrition.",
              },
              {
                icon: "🎯",
                title: "Smart Insights",
                description: "Get personalized recommendations based on your health goals and preferences.",
              },
              {
                icon: "📊",
                title: "Reach Your Goals",
                description: "Get guided support with beautiful insights and trends that help you achieve your health goals.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-12 px-4 bg-white/5 backdrop-blur">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-8 justify-center text-sm">
            <Link href="/privacy" className="text-white/60 hover:text-white font-medium transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white font-medium transition-colors">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="text-white/60 hover:text-white font-medium transition-colors">
              Accessibility
            </Link>
            <Link href="/contact" className="text-white/60 hover:text-white font-medium transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} CalSnap. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
