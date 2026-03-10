import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CalSnap - AI-Powered Nutrition Tracking",
  description: "Track your nutrition effortlessly with AI-powered meal analysis. Snap a photo, get instant nutrition insights. Available on iOS and Android.",
  keywords: ["nutrition", "meal tracking", "calorie counter", "AI nutrition", "health", "fitness", "iOS", "Android", "app"],
  authors: [{ name: "CalSnap" }],
  openGraph: {
    title: "CalSnap - AI-Powered Nutrition Tracking",
    description: "Track your nutrition effortlessly with AI-powered meal analysis. Available on iOS and Android.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
