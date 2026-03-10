"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A0F2E]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/logo.png"
              alt="CalSnap Logo"
              className="w-10 h-10 rounded-xl transform group-hover:scale-110 transition-transform"
            />
            <span className="font-bold text-xl bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              CalSnap
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className={`text-sm font-medium transition-colors hover:text-purple-300 ${
                pathname === "/privacy" ? "text-purple-300" : "text-white/60"
              }`}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className={`text-sm font-medium transition-colors hover:text-purple-300 ${
                pathname === "/terms" ? "text-purple-300" : "text-white/60"
              }`}
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-purple-300 ${
                pathname === "/contact" ? "text-purple-300" : "text-white/60"
              }`}
            >
              Contact
            </Link>
            <a
              href="https://apps.apple.com/app/calsnap/id123456789"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
