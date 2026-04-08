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
  title: "CalSnap - Your AI Nutrition Companion",
  description: "Your personal AI nutrition companion. Snap a photo, get instant insights, and reach your health goals effortlessly. Available on iOS and Android.",
  keywords: ["nutrition companion", "AI nutrition", "meal analysis", "health goals", "nutrition insights", "wellness", "fitness", "iOS", "Android", "app"],
  authors: [{ name: "CalSnap" }],
  openGraph: {
    title: "CalSnap - Your AI Nutrition Companion",
    description: "Your personal AI nutrition companion. Snap a photo, get instant insights, and reach your health goals effortlessly.",
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
