"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

interface NavbarProps {
  onOpenHireModal: () => void;
}

export default function Navbar({ onOpenHireModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "services", "about", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Services", href: "#services", id: "services" },
    { label: "About me", href: "#about", id: "about" },
    { label: "Portfolio", href: "#portfolio", id: "portfolio" },
    { label: "Contact me", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#111113]/90 backdrop-blur-md border-b border-zinc-800/80 py-4 shadow-xl shadow-black/40"
          : "bg-[#111113] border-b border-white/[0.04] py-5 md:py-6"
      } px-6 sm:px-10 md:px-14 lg:px-20`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Left: Brand Logo (Iftekhar with glowing orange accent) */}
        <a
          href="#home"
          className="group flex items-center gap-1.5 text-2xl sm:text-3xl font-black tracking-tight text-white transition-transform active:scale-95"
        >
          <span className="text-[#fd6f00] font-black tracking-wide">
            Iftekhar
          </span>
          <span className="h-2 w-2 rounded-full bg-[#fd6f00] group-hover:scale-125 transition-transform" />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm lg:text-base font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-[#fd6f00] font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fd6f00] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Hire Me CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={onOpenHireModal}
            className="px-7 py-2.5 rounded-lg bg-[#fd6f00] hover:bg-[#ff7d1a] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md shadow-[#fd6f00]/25 hover:shadow-lg hover:shadow-[#fd6f00]/40 active:scale-95 text-center"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-800/80 text-zinc-300 hover:text-white border border-zinc-700/60"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-zinc-800/80 flex flex-col gap-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "text-[#fd6f00] bg-[#fd6f00]/10 font-semibold"
                  : "text-zinc-300 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenHireModal();
            }}
            className="mt-2 w-full py-3 rounded-lg bg-[#fd6f00] text-white font-semibold text-sm text-center shadow-md shadow-[#fd6f00]/30"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}
