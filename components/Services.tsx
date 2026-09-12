"use client";

import { useState } from "react";
import {
  Code,
  Browsers,
  GitBranch,
  FileCode,
  TreeStructure,
  Cpu,
  ArrowRight,
  Check
} from "@phosphor-icons/react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: "cpp-oop",
      title: "C & C++ Programming",
      description:
        "Developing structured and object-oriented software in C and C++, utilizing classes, inheritance, polymorphism, pointers, and file I/O streams.",
      icon: Code,
      deliverables: ["Object-Oriented Design (OOP)", "File Handling & Persistent Storage", "Pointers & Dynamic Memory", "Console & Management Systems"],
      tag: "C / C++",
    },
    {
      id: "web-dev",
      title: "HTML, CSS & JavaScript Web Dev",
      description:
        "Building responsive, clean web interfaces and interactive browser utilities using semantic HTML5, modern CSS3 styling, and JavaScript DOM manipulation.",
      icon: Browsers,
      deliverables: ["Semantic HTML5 Markup", "Responsive CSS & Flexbox/Grid", "Vanilla JavaScript (ES6+)", "Interactive DOM Manipulation"],
      tag: "Web Tech",
    },
    {
      id: "git-github",
      title: "Git & GitHub Version Control",
      description:
        "Managing source code repositories, branching workflows, commits, pull requests, and collaborative development using Git and GitHub.",
      icon: GitBranch,
      deliverables: ["Repository Setup & Maintenance", "Git Branching & Merge Workflows", "Team Collaboration on GitHub", "Clean Commit Documentation"],
      tag: "Dev Tools",
    },
    {
      id: "academic-projects",
      title: "Academic Project Collaboration",
      description:
        "Collaborating on university semester projects like Library De Kraken, structuring software logic, team code reviews, and writing project reports.",
      icon: Cpu,
      deliverables: ["Team Project Implementation", "Logic & Code Architecture", "Bug Fixing & Code Reviews", "Project Documentation"],
      tag: "WUB Coursework",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0e0e11] border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#fd6f00]/10 border border-[#fd6f00]/20 text-[#fd6f00] text-xs font-semibold uppercase tracking-wider mb-4">
              Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Core <span className="text-[#fd6f00]">skillsets</span> & areas of focus
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Hands-on technical foundation in C, C++, JavaScript, HTML, CSS, Git, and GitHub developed through CSE coursework at WUB.
          </p>
        </div>

        {/* Services Grid (4 clean cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-xl bg-[#141418] border transition-all duration-300 p-7 flex flex-col justify-between ${
                  isHovered
                    ? "border-[#fd6f00]/50 bg-[#181820] -translate-y-1 shadow-xl shadow-black/60"
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all ${
                        isHovered
                          ? "bg-[#fd6f00] text-white"
                          : "bg-[#1c1c24] text-[#fd6f00] border border-zinc-700/60"
                      }`}
                    >
                      <IconComponent size={22} weight="bold" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#fd6f00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-zinc-800/80 pt-4">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#fd6f00]/15 text-[#fd6f00] flex items-center justify-center flex-shrink-0">
                          <Check size={9} weight="bold" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 rounded-lg bg-zinc-800/60 hover:bg-[#fd6f00] hover:text-white border border-zinc-700/70 hover:border-[#fd6f00] text-zinc-300 text-xs font-semibold transition-all flex items-center justify-between"
                >
                  <span>Discuss collaboration / project</span>
                  <ArrowRight size={13} weight="bold" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
