import type { Metadata, Viewport } from "next";
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

const baseUrl = "https://iftekharmahmud.me";

export const viewport: Viewport = {
  themeColor: "#111113",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Iftekhar Mahmud — CSE Student | World University of Bangladesh",
    template: "%s | Iftekhar Mahmud",
  },
  description:
    "Official portfolio of Iftekhar Mahmud, a Computer Science & Engineering (CSE) student at World University of Bangladesh (WUB). Discover software projects including Library De Kraken (C++/OOP), Hackulator (JS/HTML/CSS), algorithms, and technical skills.",
  applicationName: "Iftekhar Mahmud Portfolio",
  authors: [{ name: "Iftekhar Mahmud", url: baseUrl }],
  generator: "Next.js",
  keywords: [
    "Iftekhar Mahmud",
    "Iftekhar",
    "CSE Student",
    "World University of Bangladesh",
    "WUB CSE",
    "Software Developer",
    "Computer Science and Engineering",
    "C++ Developer",
    "C Programming",
    "JavaScript Developer",
    "Next.js Portfolio",
    "React Developer",
    "Library De Kraken",
    "Hackulator",
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Web Development Dhaka Bangladesh",
    "iftekharmahmud.me",
    "iftekharmahmud2",
  ],
  creator: "Iftekhar Mahmud",
  publisher: "Iftekhar Mahmud",
  category: "technology",
  manifest: "/manifest.json",
  alternates: {
    canonical: baseUrl,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Iftekhar Mahmud — CSE Student | World University of Bangladesh",
    description:
      "Official portfolio of Iftekhar Mahmud, Computer Science & Engineering student at World University of Bangladesh. Explore software projects, C++/JS engineering, and tech stacks.",
    url: baseUrl,
    siteName: "Iftekhar Mahmud Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Iftekhar Mahmud — CSE Student & Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iftekhar Mahmud — CSE Student | World University of Bangladesh",
    description:
      "Official portfolio of Iftekhar Mahmud, Computer Science & Engineering student at World University of Bangladesh. Explore software projects, C++/JS engineering, and tech stacks.",
    site: "@iftekhaar69",
    creator: "@iftekhaar69",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      "name": "Iftekhar Mahmud",
      "alternateName": ["Iftekhar", "Iftekhaar Mahmud"],
      "url": baseUrl,
      "image": `${baseUrl}/iftekhar.PNG`,
      "jobTitle": "Computer Science & Engineering Student & Software Developer",
      "description":
        "Computer Science & Engineering (CSE) student at World University of Bangladesh (WUB) specializing in C++, JavaScript, React, Next.js, and Software Engineering.",
      "affiliation": {
        "@type": "EducationalOrganization",
        "name": "World University of Bangladesh",
        "alternateName": "WUB",
        "url": "https://wub.edu.bd",
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "World University of Bangladesh",
      },
      "knowsAbout": [
        "Computer Science",
        "Software Engineering",
        "C++",
        "C Programming",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Data Structures and Algorithms",
        "Object-Oriented Programming (OOP)",
        "Web Application Development",
        "Database Management",
        "Git and GitHub",
      ],
      "sameAs": [
        "https://www.linkedin.com/in/iftekharmahmud",
        "https://github.com/iftekharmahmud2",
        "https://www.facebook.com/iftekhaar.murad",
        "https://www.instagram.com/iftekhaar_",
        "https://x.com/iftekhaar69",
        "https://t.me/iftekharmahmud",
        "https://www.threads.net/@iftekhaar_",
        "https://www.pinterest.com/iftekhar_mahmud/",
        "https://wa.me/IftekhaarMahmud",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": "Iftekhar Mahmud Portfolio",
      "description":
        "Official portfolio and software engineering showcase of Iftekhar Mahmud, CSE Student at World University of Bangladesh.",
      "publisher": {
        "@id": `${baseUrl}/#person`,
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${baseUrl}/#profilepage`,
      "url": baseUrl,
      "name": "Iftekhar Mahmud — CSE Student Portfolio",
      "isPartOf": {
        "@id": `${baseUrl}/#website`,
      },
      "about": {
        "@id": `${baseUrl}/#person`,
      },
      "mainEntity": {
        "@id": `${baseUrl}/#person`,
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#111113] text-[#f4f4f5] antialiased selection:bg-[#fd6f00] selection:text-white">
        {children}
      </body>
    </html>
  );
}
