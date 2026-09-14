"use client";

import Image from "next/image";
import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  FacebookLogo
} from "@phosphor-icons/react";

interface HeroProps {
  onOpenHireModal: () => void;
}

export default function Hero({ onOpenHireModal }: HeroProps) {
  const socials = [
    { name: "Instagram", icon: InstagramLogo, href: "https://www.instagram.com/iftekhaar_" },
    { name: "LinkedIn", icon: LinkedinLogo, href: "https://www.linkedin.com/in/iftekharmahmud" },
    { name: "GitHub", icon: GithubLogo, href: "https://github.com/iftekharmahmud2" },
    { name: "Facebook", icon: FacebookLogo, href: "https://www.facebook.com/iftekhaar.murad" },
  ];

  return (
    <section
      id="home"
      className="relative w-full bg-[#111113] pt-8 md:pt-14 pb-14 md:pb-20 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden"
    >
      {/* 1. Primary Left Ambient Orange Glow (Behind Typography & Buttons) */}
      <div className="absolute top-[42%] left-[22%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-radial from-[#fd6f00]/25 via-[#fd6f00]/[0.08] to-transparent rounded-full blur-[90px] pointer-events-none z-0" />

      {/* 2. Secondary Subtle Rim Ambient Glow behind Right Circle */}
      <div className="absolute top-1/2 right-[18%] -translate-y-1/2 w-[480px] h-[480px] bg-radial from-[#fd6f00]/15 via-[#fd6f00]/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      {/* 3. Bottom Subtle Warm Ambient Glow */}
      <div className="absolute -bottom-10 left-10 w-[380px] h-[380px] bg-[#fd6f00]/[0.10] rounded-full blur-[110px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: CSE Student Identity & Details */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
            {/* Hi I am */}
            <span className="text-zinc-400 font-normal text-base sm:text-lg mb-1 tracking-normal">
              Hi, I am
            </span>

            {/* Name */}
            <h2 className="text-zinc-200 text-2xl sm:text-3xl md:text-[34px] font-semibold tracking-tight mb-2">
              Iftekhar Mahmud
            </h2>

            {/* Main Orange Headline: CSE Student */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-[#fd6f00] tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              CSE Student
            </h1>

            {/* 4 Circular Social Icons */}
            <div className="flex items-center gap-3 mb-8">
              {socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full bg-[#18181c]/90 border border-zinc-700/80 hover:border-[#fd6f00] text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md hover:shadow-[#fd6f00]/20"
                  >
                    <IconComponent size={17} weight="bold" />
                  </a>
                );
              })}
            </div>

            {/* Buttons: Hire Me & Download CV */}
            <div className="flex items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenHireModal}
                className="px-7 py-2.5 rounded-lg bg-[#fd6f00] hover:bg-[#ff7d1a] text-white font-semibold text-sm sm:text-base transition-all duration-200 active:scale-95 text-center shadow-md shadow-[#fd6f00]/25 hover:shadow-lg hover:shadow-[#fd6f00]/35"
              >
                Hire Me
              </button>

              <a
                href="/resume.pdf"
                download="Iftekhar_Mahmud_Resume.pdf"
                className="px-6 py-2.5 rounded-lg bg-[#141416]/90 hover:bg-[#1a1a1e] border border-zinc-600 text-zinc-200 hover:text-white font-medium text-sm sm:text-base transition-all duration-200 active:scale-95 inline-flex items-center justify-center text-center"
              >
                Download CV
              </a>
            </div>

            {/* Stats Card: 3-column dark box at bottom left */}
            <div className="w-full max-w-md rounded-xl bg-[#161619]/95 backdrop-blur-sm border border-zinc-800/90 p-4 sm:p-5 shadow-xl">
              <div className="grid grid-cols-3 divide-x divide-zinc-800 text-left">
                
                {/* Experiences */}
                <div className="pr-3">
                  <div className="text-xl sm:text-2xl font-bold text-[#fd6f00] tracking-tight">
                    2+
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5 font-normal">
                    Years of Study
                  </div>
                </div>

                {/* Project done */}
                <div className="px-3">
                  <div className="text-xl sm:text-2xl font-bold text-[#fd6f00] tracking-tight">
                    3+
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5 font-normal">
                    Project done
                  </div>
                </div>

                {/* Problem Solving */}
                <div className="pl-3">
                  <div className="text-xl sm:text-2xl font-bold text-[#fd6f00] tracking-tight">
                    25+
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5 font-normal">
                    Solved Problems
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Properly Proportioned 3D Pop-out Circular Framing */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-4">
            
            {/* Outer Circle Container */}
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[450px] lg:h-[450px] flex items-center justify-center">
              
              {/* 1. Dark Circle Background Disc */}
              <div className="absolute inset-0 rounded-full bg-[#18181b] border border-zinc-800/80 shadow-2xl" />

              {/* 2. Bottom-Clipped Person (Clipped inside the circle at the bottom) */}
              <div className="absolute inset-0 rounded-full overflow-hidden flex items-end justify-center z-10 pointer-events-none">
                <Image
                  src="/hero.png"
                  alt="Iftekhar Mahmud"
                  width={600}
                  height={800}
                  priority
                  className="w-auto h-[120%] max-w-none object-contain object-bottom filter contrast-[1.02] brightness-[0.98]"
                />
              </div>

              {/* 3. Top-Popping Head & Hair (Pops out above the circle with breathing room below navbar) */}
              <div className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none [clip-path:polygon(-30%_-40%,130%_-40%,130%_50%,-30%_50%)]">
                <Image
                  src="/hero.png"
                  alt="Iftekhar Mahmud"
                  width={600}
                  height={800}
                  priority
                  className="w-auto h-[120%] max-w-none object-contain object-bottom filter contrast-[1.02] brightness-[0.98]"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
