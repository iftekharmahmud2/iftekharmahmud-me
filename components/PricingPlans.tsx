"use client";

import { Check, Sparkle, ArrowUpRight } from "@phosphor-icons/react";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function PricingPlans({ onSelectPlan }: PricingProps) {
  const plans = [
    {
      name: "Design Sprint",
      tagline: "Ideal for MVPs & Rapid Overhauls",
      price: "$3,500",
      period: "per 2-week sprint",
      popular: false,
      features: [
        "Complete UX Heuristic Audit",
        "Up to 5 Core Web/App Screens",
        "Interactive Clickable Prototype",
        "Design Tokens & Typography Spec",
        "Figma Source File Delivery",
        "1 Round of Iteration",
      ],
      cta: "Book a Sprint",
    },
    {
      name: "Full Product Design",
      tagline: "End-to-End Web or Mobile Product",
      price: "$7,500",
      period: "per project scope",
      popular: true,
      features: [
        "Complete Product Architecture",
        "Up to 20 High-Fidelity Screens",
        "Scalable Multi-Theme Design System",
        "Motion & Interaction Prototypes",
        "Developer Handoff Documentation",
        "Full Slack & Zoom Async Support",
        "3 Rounds of Iterative Revisions",
        "Post-Launch QA Engineering Support",
      ],
      cta: "Start Full Project",
    },
    {
      name: "Dedicated Retainer",
      tagline: "Ongoing Embedded Design Partner",
      price: "$5,000",
      period: "billed monthly",
      popular: false,
      features: [
        "Continuous UI/UX Feature Sprints",
        "Dedicated Weekly Capacity (25 hrs/wk)",
        "Direct Shared Slack / Teams Channel",
        "Design System Maintenance",
        "A/B Testing & Conversion Audits",
        "Pause or Cancel Anytime",
      ],
      cta: "Join Waitlist / Retainer",
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#0d0e13]/80 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fd6f00]/10 border border-[#fd6f00]/20 text-[#fd6f00] text-xs font-semibold uppercase tracking-wider mb-4">
              Engagement Models
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Simple, transparent <span className="text-[#fd6f00]">pricing</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-base max-w-md leading-relaxed">
            No surprise retainers or opaque hourly bills. Fixed-scope pricing with guaranteed velocity and high craftsmanship.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-[#161824] border-2 border-[#fd6f00] shadow-2xl shadow-[#fd6f00]/15 lg:-translate-y-2"
                  : "bg-[#13141b] border border-white/[0.08] hover:border-white/[0.2]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#fd6f00] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-[#fd6f00]/40 flex items-center gap-1.5">
                  <Sparkle size={12} weight="fill" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                {/* Plan Title & Tagline */}
                <h3 className="text-2xl font-bold text-white mb-1.5">{plan.name}</h3>
                <p className="text-xs text-zinc-400 mb-6">{plan.tagline}</p>

                {/* Price */}
                <div className="mb-8 pb-6 border-b border-white/[0.08]">
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-baseline gap-1">
                    <span>{plan.price}</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">{plan.period}</div>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#fd6f00]/20 text-[#fd6f00] flex items-center justify-center mt-0.5">
                        <Check size={11} weight="bold" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-md ${
                  plan.popular
                    ? "bg-[#fd6f00] hover:bg-[#ff7d1a] text-white shadow-[#fd6f00]/30 hover:shadow-lg hover:shadow-[#fd6f00]/40"
                    : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1]"
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowUpRight size={16} weight="bold" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
