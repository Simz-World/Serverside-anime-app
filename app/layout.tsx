import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

// the hero and footer is typically the header and and bottom 
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <Hero />
          {/* the children refers to the pain we are currently on */}
          {children} 
          <Footer />
        </main>
      </body>
    </html>
  );
}
