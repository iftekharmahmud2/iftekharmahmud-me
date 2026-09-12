"use client";

import { useState } from "react";
import { Star, Quotes, CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Marcus Vance",
      role: "VP of Product",
      company: "Quantum Capital Labs",
      rating: 5,
      content:
        "Iftekhar completely redefined how our traders interact with live financial data. His obsession with typography, latency, and dark mode ergonomics resulted in our highest retention quarter to date.",
    },
    {
      name: "Elena Rostova",
      role: "Co-Founder & CEO",
      company: "Velocity Protocol",
      rating: 5,
      content:
        "Working with Iftekhar was a game changer for our mobile launch. He simplified complex Web3 key management into an interface so intuitive that our grandmother could use it. Truly world-class.",
    },
    {
      name: "David Sterling",
      role: "Head of Engineering",
      company: "NeuralSync Technologies",
      rating: 5,
      content:
        "Rarely do you find a designer who understands both advanced Figma component systems and Next.js frontend code. The handoff was frictionless and we shipped 3 weeks ahead of schedule.",
    },
    {
      name: "Camille Laurent",
      role: "Creative Director",
      company: "Maison Aeterna",
      rating: 5,
      content:
        "Iftekhar brought an elevated Parisian editorial sensibility to our digital flagship. Our online checkout conversion increased by 46% within the first 60 days post-launch.",
    },
  ];

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fd6f00]/10 border border-[#fd6f00]/20 text-[#fd6f00] text-xs font-semibold uppercase tracking-wider mb-4">
              Client Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              What founders & <span className="text-[#fd6f00]">leaders</span> say
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevReview}
              className="w-11 h-11 rounded-full bg-[#15161e] border border-white/[0.08] hover:border-[#fd6f00]/60 text-zinc-300 hover:text-white flex items-center justify-center transition-colors active:scale-95"
              aria-label="Previous Testimonial"
            >
              <CaretLeft size={20} weight="bold" />
            </button>
            <button
              onClick={nextReview}
              className="w-11 h-11 rounded-full bg-[#15161e] border border-white/[0.08] hover:border-[#fd6f00]/60 text-zinc-300 hover:text-white flex items-center justify-center transition-colors active:scale-95"
              aria-label="Next Testimonial"
            >
              <CaretRight size={20} weight="bold" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="rounded-3xl bg-[#13141b] border border-white/[0.08] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-8 right-8 text-white/[0.03] pointer-events-none">
            <Quotes size={160} weight="fill" />
          </div>

          <div className="max-w-3xl relative z-10">
            {/* Stars */}
            <div className="flex items-center gap-1.5 text-[#fd6f00] mb-6">
              {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                <Star key={i} size={20} weight="fill" />
              ))}
            </div>

            {/* Quote Body */}
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
              "{reviews[activeIndex].content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#fd6f00] to-amber-300 flex items-center justify-center text-black font-black text-lg shadow-md shadow-[#fd6f00]/30">
                {reviews[activeIndex].name.charAt(0)}
              </div>
              <div>
                <div className="text-white font-bold text-base">
                  {reviews[activeIndex].name}
                </div>
                <div className="text-xs text-zinc-400">
                  {reviews[activeIndex].role} · <span className="text-[#fd6f00] font-medium">{reviews[activeIndex].company}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 mt-8 md:mt-12">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-8 bg-[#fd6f00]" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
