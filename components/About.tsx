"use client";

import { useState } from "react";
import {
  Code,
  Globe,
  GitBranch,
  FileCode,
  GraduationCap,
  CheckCircle,
  Browsers
} from "@phosphor-icons/react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"skills" | "education" | "coursework">("skills");

  const techStack = [
    { name: "C Programming", level: "Core Foundation", desc: "Pointers, Memory Allocation, Data Structs", category: "Language" },
    { name: "C++ (OOP)", level: "Core Language", desc: "Classes, Inheritance, Polymorphism, File I/O", category: "Language" },
    { name: "JavaScript (ES6+)", level: "Web Logic", desc: "DOM Manipulation, Event Handling, Functions", category: "Web Scripting" },
    { name: "HTML5 & Semantic Markup", level: "Markup", desc: "Accessible Structure, Clean Layouts", category: "Frontend" },
    { name: "CSS3 & Styling", level: "Styling", desc: "Flexbox, CSS Grid, Responsive Design", category: "Frontend" },
    { name: "Git & Version Control", level: "VCS", desc: "Branching, Commit Management, Merge Logic", category: "Tools" },
    { name: "GitHub Collaboration", level: "Dev Platform", desc: "Repositories, Code Hosting, Open Source", category: "Tools" },
  ];

  const educationMilestones = [
    {
      degree: "B.Sc. in Computer Science & Engineering (CSE)",
      institution: "World University of Bangladesh (WUB)",
      period: "Undergraduate Student",
      description: "Studying core computer science curriculum: Structured Programming in C, Object-Oriented Programming in C++, Data Structures, Algorithms, and Web Development.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Science Group",
      period: "College Level",
      description: "Science background with strong foundation in Mathematics, Physics, and Information & Communication Technology (ICT).",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Science Group",
      period: "School Level",
      description: "Completed secondary education in General Science with distinction in Mathematics.",
    },
  ];

  const courses = [
    { title: "Structured Programming Language (C)", focus: "Syntax, Control Flow, Functions, Pointers & Arrays" },
    { title: "Object-Oriented Programming (C++)", focus: "Classes, Objects, Inheritance, Polymorphism, Encapsulation & File Handling" },
    { title: "Data Structures & Algorithms", focus: "Arrays, Linked Lists, Stacks, Queues, Sorting & Searching" },
    { title: "Web Technologies & Internet Basics", focus: "HTML5, CSS3, JavaScript DOM Manipulation & Responsive Web" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#111113] border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#fd6f00]/10 border border-[#fd6f00]/20 text-[#fd6f00] text-xs font-semibold uppercase tracking-wider mb-4">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              About <span className="text-[#fd6f00]">Iftekhar Mahmud</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Computer Science & Engineering student at World University of Bangladesh (WUB) focusing on core programming, problem-solving, and web fundamentals.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Bio & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              CSE Student at World University of Bangladesh (WUB).
            </h3>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              I am an undergraduate student pursuing my B.Sc. in Computer Science & Engineering at World University of Bangladesh. My academic journey revolves around mastering programming fundamentals with C and C++, applying object-oriented design, and building web utilities with HTML, CSS, and JavaScript.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              I have collaborated on academic projects like <strong>Library De Kraken</strong> (a C++ OOP Library Management System) alongside team partners, and built interactive browser tools like <strong>Hackulator</strong> using vanilla JavaScript.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#161619] border border-zinc-800">
                <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold mb-1">
                  Institution
                </div>
                <div className="text-white font-semibold text-sm">
                  World University of Bangladesh
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#161619] border border-zinc-800">
                <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold mb-1">
                  Department
                </div>
                <div className="text-[#fd6f00] font-semibold text-sm">
                  CSE Department
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Tabs (Skills, Education, Coursework) */}
          <div className="lg:col-span-6 bg-[#161619] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            
            {/* Tabs Selector */}
            <div className="flex items-center gap-2 p-1 rounded-lg bg-[#111113] border border-zinc-800 mb-8">
              <button
                onClick={() => setActiveTab("skills")}
                className={`flex-1 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "skills"
                    ? "bg-[#fd6f00] text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Tech Stack
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`flex-1 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "education"
                    ? "bg-[#fd6f00] text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab("coursework")}
                className={`flex-1 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "coursework"
                    ? "bg-[#fd6f00] text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Coursework
              </button>
            </div>

            {/* Tab 1: Tech Stack */}
            {activeTab === "skills" && (
              <div className="space-y-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-lg bg-[#111113] border border-zinc-800 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-white font-semibold text-xs sm:text-sm flex items-center gap-2">
                        <span>{tech.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                          {tech.category}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">{tech.desc}</div>
                    </div>
                    <span className="text-[11px] font-bold text-[#fd6f00] font-mono">
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Education */}
            {activeTab === "education" && (
              <div className="space-y-5">
                {educationMilestones.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-zinc-700 pb-2 last:pb-0">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#fd6f00] ring-4 ring-[#161619]" />
                    <div className="text-xs font-bold text-[#fd6f00] mb-0.5">
                      {edu.period}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-zinc-400 font-medium mt-0.5">
                      {edu.institution}
                    </div>
                    <p className="text-zinc-400 text-xs mt-1.5 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Coursework */}
            {activeTab === "coursework" && (
              <div className="space-y-3.5">
                {courses.map((c, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#111113] border border-zinc-800">
                    <div className="text-white font-bold text-xs sm:text-sm mb-1 text-[#fd6f00]">
                      {c.title}
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {c.focus}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
