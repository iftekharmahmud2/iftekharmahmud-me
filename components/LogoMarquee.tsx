"use client";

export default function LogoMarquee() {
  const logos = [
    { name: "Figma", label: "FIGMA" },
    { name: "Linear", label: "LINEAR" },
    { name: "Stripe", label: "STRIPE" },
    { name: "Vercel", label: "VERCEL" },
    { name: "Supabase", label: "SUPABASE" },
    { name: "Framer", label: "FRAMER" },
    { name: "Raycast", label: "RAYCAST" },
    { name: "Notion", label: "NOTION" },
  ];

  return (
    <section className="py-12 border-y border-white/[0.06] bg-[#0d0e13]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">
          Trusted by fast-moving teams & global product builders
        </p>
        <div className="h-px bg-white/[0.06] flex-1 hidden md:block ml-6" />
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0c0d11] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0c0d11] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex shrink-0 items-center gap-12 sm:gap-16 md:gap-20 animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex items-center gap-2 group cursor-default transition-all duration-200"
            >
              <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-[#fd6f00] transition-colors" />
              <span className="text-sm md:text-base font-bold tracking-widest text-zinc-500 group-hover:text-zinc-200 transition-colors">
                {logo.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
