import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "FLOW | Productivité Augmentée",
  description: "Optimisez votre flux de travail avec FLOW, le SaaS de productivité premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0C0A09] text-[#FAFAF9]">
        {children}
      </body>
    </html>
  );
}
