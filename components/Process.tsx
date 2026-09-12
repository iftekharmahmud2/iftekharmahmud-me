"use client";

import {
  MagnifyingGlass,
  TreeStructure,
  FigmaLogo,
  RocketLaunch,
} from "@phosphor-icons/react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      subtitle: "Aligning product goals with user needs",
      desc: "Deep research into user pain points, competitive landscape analysis, stakeholder interviews, and defining measurable business KPIs.",
      icon: MagnifyingGlass,
      highlights: ["UX Heuristic Audit", "User Persona & Journey Maps", "Project Scope & Milestones"],
    },
    {
      step: "02",
      title: "Architecture & Wireframing",
      subtitle: "Structuring content before visual design",
      desc: "Mapping comprehensive user flows, information architecture, and rapid low-fidelity wireframes to validate interaction logic early.",
      icon: TreeStructure,
      highlights: ["Information Architecture", "Low-Fidelity Wireframes", "User Flow Validation"],
    },
    {
      step: "03",
      title: "Visual Design & Prototyping",
      subtitle: "Bringing concepts to life with high fidelity",
      desc: "Crafting polished, high-contrast dark and light interfaces, typography hierarchies, custom icons, and physics-based motion prototypes.",
      icon: FigmaLogo,
      highlights: ["High-Fidelity Mockups", "Interactive Prototypes", "Micro-Interactions"],
    },
    {
      step: "04",
      title: "Design System & Dev Handoff",
      subtitle: "Ensuring flawless implementation in code",
      desc: "Packaging full Figma component libraries, multi-theme design tokens, responsive specs, and collaborating closely with engineering.",
      icon: RocketLaunch,
      highlights: ["Scalable Design Tokens", "Developer Documentation", "Post-Launch QA Review"],
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#0d0e13]/70 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fd6f00]/10 border border-[#fd6f00]/20 text-[#fd6f00] text-xs font-semibold uppercase tracking-wider mb-4">
              My Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              A structured process for <span className="text-[#fd6f00]">predictable</span> results
            </h2>
          </div>
          <p className="text-zinc-400 text-base max-w-md leading-relaxed">
            Every project follows a proven, transparent 4-stage sprint cycle designed to minimize risk and accelerate time-to-market.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative rounded-2xl bg-[#13141b] border border-white/[0.07] hover:border-[#fd6f00]/50 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-[#fd6f00] font-mono">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#1a1b24] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-[#fd6f00] group-hover:border-[#fd6f00]/40 transition-colors">
                      <Icon size={20} weight="bold" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#fd6f00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-medium mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Highlights */}
                <div className="border-t border-white/[0.06] pt-4 space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-[11px] text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fd6f00]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
