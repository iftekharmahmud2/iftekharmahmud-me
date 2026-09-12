import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iftekhar Mahmud — CSE Student | World University of Bangladesh",
  description: "Portfolio of Iftekhar Mahmud, a Computer Science & Engineering (CSE) student at World University of Bangladesh (WUB). Projects include Library De Kraken (C++/OOP), Hackulator (JS/HTML/CSS), and core programming implementations.",
  keywords: ["Iftekhar Mahmud", "CSE Student", "World University of Bangladesh", "C++", "C", "JavaScript", "HTML", "CSS", "Git", "GitHub", "Library De Kraken", "Hackulator"],
  authors: [{ name: "Iftekhar Mahmud" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Iftekhar Mahmud — CSE Student Portfolio",
    description: "Computer Science & Engineering Student at World University of Bangladesh (WUB).",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#111113] text-[#f4f4f5] antialiased selection:bg-[#fd6f00] selection:text-white">
        {children}
      </body>
    </html>
  );
}
