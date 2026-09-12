"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Sparkle, ArrowUpRight, Users, Code, Globe } from "@phosphor-icons/react";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "C++ & OOP" | "Web Development";
  image: string;
  impactMetric: string;
  description: string;
  longDescription: string;
  tags: string[];
  team: { name: string; url?: string }[];
  year: string;
  role: string;
  deliverables: string[];
}

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const projectsData: Project[] = [
  {
    id: "library-de-kraken",
    title: "Library De Kraken",
    subtitle: "Library Management System — Object-Oriented C++",
    category: "C++ & OOP",
    image: "/images/project_kraken.jpg",
    impactMetric: "C++ & OOP Project",
    description: "A comprehensive Library Management System built in C++ utilizing core OOP principles, file handling for persistent records, book checkout, and student membership management.",
    longDescription:
      "Library De Kraken is an academic software project developed in C++. It implements core Object-Oriented Programming (OOP) concepts including Classes, Encapsulation, Inheritance, and Polymorphism alongside C++ File Streams (fstream) to maintain persistent storage for library inventory, book issue/return tracking, fine calculation, and student account databases.",
    tags: ["C++", "OOP", "File Handling", "Data Structures", "Git / GitHub"],
    team: [
      { name: "IFTEKHAR MAHMUD", url: "/" },
      { name: "AL RIFAT SABBIR", url: "https://alrifatsabbir.me" },
      { name: "AL MAMUN" },
    ],
    year: "Academic Project",
    role: "Core C++ & OOP Developer",
    deliverables: [
      "Book Inventory & Record Management",
      "Student Borrowing & Return System",
      "File I/O Persistence Architecture",
      "OOP Class Architecture & Documentation",
    ],
  },
  {
    id: "hackulator",
    title: "Hackulator",
    subtitle: "Interactive Web Calculator & Utility Tool",
    category: "Web Development",
    image: "/images/project_hackulator.jpg",
    impactMetric: "JavaScript & CSS",
    description: "A modern, responsive browser-based calculator tool engineered with vanilla JavaScript DOM manipulation, semantic HTML, and sleek CSS styling.",
    longDescription:
      "Hackulator is an interactive calculator web utility crafted to deliver fast arithmetic and scientific computations directly in the browser. It features clean keyboard and touch event listeners, dynamic display parsing, responsive CSS layout, and instant error handling for division by zero and invalid mathematical expressions.",
    tags: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation", "Frontend"],
    team: [{ name: "Iftekhar Mahmud" }],
    year: "Web Project",
    role: "Frontend Developer",
    deliverables: [
      "Arithmetic & Mathematical Logic Engine",
      "Responsive Dark Mode Interface",
      "Dynamic DOM Event Handlers",
      "Cross-Browser Responsive Layout",
    ],
  },
];

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "C++ & OOP", "Web Development"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#111113] border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#fd6f00]/10 border border-[#fd6f00]/20 text-[#fd6f00] text-xs font-semibold uppercase tracking-wider mb-4">
              Academic Projects
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured <span className="text-[#fd6f00]">projects</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Practical programming projects developed using C, C++, JavaScript, HTML, and CSS.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-zinc-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[#fd6f00] text-white"
                  : "bg-[#161619] text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl bg-[#161619] border border-zinc-800 hover:border-[#fd6f00]/60 overflow-hidden transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Card Image Banner */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0c0d11]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Metric Badge Overlay */}
                  <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-sm border border-zinc-700 px-3 py-1 rounded-full text-xs font-bold text-[#fd6f00] flex items-center gap-1.5 shadow-md">
                    <Sparkle size={12} weight="fill" />
                    <span>{project.impactMetric}</span>
                  </div>

                  {/* Hover Quick View Trigger */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 rounded-lg bg-[#fd6f00] text-white font-bold text-xs flex items-center gap-2 shadow-lg active:scale-95 transition-transform"
                    >
                      <Eye size={15} weight="bold" />
                      <span>View Project Details</span>
                    </button>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono text-[#fd6f00] font-bold uppercase">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-zinc-500">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#fd6f00] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Team Partners */}
                  {project.team && project.team.length > 1 && (
                    <div className="mb-4 p-2.5 rounded-lg bg-[#111113] border border-zinc-800 flex items-center gap-2 text-xs text-zinc-300">
                      <Users size={15} weight="bold" className="text-[#fd6f00] flex-shrink-0" />
                      <div className="flex flex-wrap items-center gap-1 text-[11px]">
                        <span className="text-zinc-400">Team:</span>
                        {project.team.map((member, mIdx) => (
                          <span key={member.name} className="flex items-center">
                            {member.url ? (
                              <a
                                href={member.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#fd6f00] underline underline-offset-2 font-medium"
                              >
                                {member.name}
                              </a>
                            ) : (
                              <span className="text-zinc-200 font-medium">{member.name}</span>
                            )}
                            {mIdx < project.team.length - 1 && <span className="text-zinc-500 ml-1">,</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-300 hover:text-[#fd6f00] transition-colors"
                >
                  <span>Read project details & architecture</span>
                  <ArrowUpRight size={13} weight="bold" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
