"use client";

import { useState, useEffect } from "react";
import {
  ArrowUp,
  Globe,
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
  PinterestLogo,
  WhatsappLogo,
  GithubLogo,
  TelegramLogo,
  TwitterLogo,
  ChatCircleText
} from "@phosphor-icons/react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About me", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact me", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Globe, href: "https://iftekharmahmud.me", label: "Website" },
    { icon: LinkedinLogo, href: "https://www.linkedin.com/in/iftekharmahmud", label: "LinkedIn" },
    { icon: GithubLogo, href: "https://github.com/iftekharmahmud2", label: "GitHub" },
    { icon: FacebookLogo, href: "https://www.facebook.com/iftekhaar.murad", label: "Facebook" },
    { icon: InstagramLogo, href: "https://www.instagram.com/iftekhaar_", label: "Instagram" },
    { icon: WhatsappLogo, href: "https://wa.me/IftekhaarMahmud", label: "WhatsApp" },
    { icon: TelegramLogo, href: "https://t.me/iftekharmahmud", label: "Telegram" },
    { icon: TwitterLogo, href: "https://x.com/iftekhaar69", label: "Twitter" },
    { icon: ChatCircleText, href: "https://www.threads.net/@iftekhaar_", label: "Threads" },
    { icon: PinterestLogo, href: "https://www.pinterest.com/iftekhar_mahmud/", label: "Pinterest" },
  ];

  return (
    <footer className="border-t border-zinc-800/80 bg-[#0c0c0e] py-14 px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Top: Brand & Social Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10 border-b border-zinc-800/60">
          <div>
            <a href="#home" className="flex items-center gap-1.5 text-2xl font-black tracking-tight text-white mb-2">
              <span className="text-[#fd6f00]">Iftekhar</span>
              <span className="h-2 w-2 rounded-full bg-[#fd6f00]" />
            </a>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm">
              Iftekhar Mahmud — CSE Graduate from World University of Bangladesh (WUB).
            </p>
          </div>

          {/* Social Icons (10 Links) */}
          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-[#161619] border border-zinc-700/80 hover:border-[#fd6f00] hover:text-[#fd6f00] text-zinc-400 flex items-center justify-center transition-all duration-200 active:scale-95"
                >
                  <Icon size={16} weight="bold" />
                </a>
              );
            })}

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#fd6f00]/10 border border-[#fd6f00]/30 hover:bg-[#fd6f00] hover:text-white text-[#fd6f00] flex items-center justify-center transition-all duration-200 active:scale-95 ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} weight="bold" />
            </button>
          </div>
        </div>

        {/* Links Navigation Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-6">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs sm:text-sm text-zinc-400 hover:text-[#fd6f00] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Local Time: {time || "12:00:00 AM"}</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 pt-6 border-t border-zinc-800/40">
          <div>
            © {new Date().getFullYear()} Iftekhar Mahmud · World University of Bangladesh
          </div>
          <div>
            Website: <a href="https://iftekharmahmud.me" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#fd6f00]">iftekharmahmud.me</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
