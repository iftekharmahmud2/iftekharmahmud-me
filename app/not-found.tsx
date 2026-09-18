import Link from "next/link";
import { House, ArrowLeft, MagnifyingGlass, Sparkle } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "404 - Page Not Found | Iftekhar Mahmud",
  description: "The page you are looking for does not exist. Explore Iftekhar Mahmud's CSE portfolio, software engineering projects, skills, and contact information.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#111113] text-[#f4f4f5] flex flex-col items-center justify-center relative overflow-hidden px-6 py-16">
      {/* Background ambient orange glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-radial from-[#fd6f00]/20 via-[#fd6f00]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fd6f00]/10 border border-[#fd6f00]/30 text-[#fd6f00] text-sm font-medium mb-6">
          <Sparkle size={16} weight="fill" />
          <span>Error 404 &bull; Page Not Found</span>
        </div>

        {/* 404 Big Heading */}
        <h1 className="text-7xl sm:text-9xl font-extrabold text-[#fd6f00] tracking-tight mb-4 drop-shadow-[0_0_35px_rgba(253,111,0,0.3)]">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3">
          Oops! Looks like you took a wrong turn
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg mb-8 max-w-md">
          The page or resource you requested cannot be found. It may have been moved, updated, or never existed.
        </p>

        {/* Quick Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#fd6f00] hover:bg-[#e06200] text-white font-semibold transition-all duration-200 shadow-lg shadow-[#fd6f00]/25 hover:shadow-[#fd6f00]/40 hover:-translate-y-0.5"
          >
            <House size={20} weight="bold" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <MagnifyingGlass size={20} weight="bold" />
            <span>View Projects</span>
          </Link>
        </div>

        {/* Quick Navigation Links */}
        <div className="w-full pt-8 border-t border-zinc-800/80">
          <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-4">
            Popular Destinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
            <Link href="/#home" className="hover:text-[#fd6f00] transition-colors">Home</Link>
            <Link href="/#services" className="hover:text-[#fd6f00] transition-colors">Capabilities</Link>
            <Link href="/#about" className="hover:text-[#fd6f00] transition-colors">About Me</Link>
            <Link href="/#portfolio" className="hover:text-[#fd6f00] transition-colors">Portfolio</Link>
            <Link href="/#contact" className="hover:text-[#fd6f00] transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Screen reader only semantic text for crawlability and indexing */}
      <section className="sr-only" aria-hidden="false">
        <h2>Iftekhar Mahmud CSE Portfolio - 404 Page Directory</h2>
        <p>
          You are viewing the 404 error page of Iftekhar Mahmud's official website.
          Iftekhar Mahmud is a Computer Science and Engineering (CSE) student at World University of Bangladesh (WUB).
          Explore software engineering projects such as Library De Kraken (C++ Object-Oriented Library Management System)
          and Hackulator (JavaScript Scientific Calculator), algorithms, coursework, and contact details.
        </p>
        <nav aria-label="Quick Sitemap">
          <ul>
            <li><a href="https://iftekharmahmud.me">Iftekhar Mahmud Home</a></li>
            <li><a href="https://iftekharmahmud.me/#about">About Iftekhar Mahmud - WUB CSE</a></li>
            <li><a href="https://iftekharmahmud.me/#portfolio">Iftekhar Mahmud Featured Software Projects</a></li>
            <li><a href="https://iftekharmahmud.me/#contact">Contact Iftekhar Mahmud</a></li>
            <li><a href="https://github.com/iftekharmahmud2" rel="noopener noreferrer">Iftekhar Mahmud GitHub Profile</a></li>
            <li><a href="https://www.linkedin.com/in/iftekharmahmud" rel="noopener noreferrer">Iftekhar Mahmud LinkedIn Profile</a></li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
