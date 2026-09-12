"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { X, CheckCircle, Sparkle, PaperPlaneTilt } from "@phosphor-icons/react";

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedPlan?: string;
}

export default function HireMeModal({
  isOpen,
  onClose,
  preselectedService,
  preselectedPlan,
}: HireMeModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(
    preselectedService || preselectedPlan || "Full-Stack Web Development"
  );
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 },
          colors: ["#fd6f00", "#ffaa40", "#ffffff"],
        });
      } catch (err) {}
    }, 600);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-2xl bg-[#141418] border border-zinc-800 shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={18} weight="bold" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-2">
              <CheckCircle size={28} weight="fill" />
            </div>
            <h3 className="text-xl font-bold text-white">Inquiry Sent!</h3>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto">
              Thank you, <span className="text-white font-semibold">{name}</span>. Iftekhar will review your message and reach out at <span className="text-[#fd6f00] font-semibold">{email}</span>.
            </p>
            <button
              onClick={handleClose}
              className="mt-3 px-5 py-2 rounded-lg bg-[#fd6f00] text-white font-semibold text-xs hover:bg-[#ff7d1a]"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#fd6f00]/10 border border-[#fd6f00]/20 text-[#fd6f00] text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkle size={12} weight="fill" />
                <span>Get in Touch</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Contact <span className="text-[#fd6f00]">Iftekhar Mahmud</span>
              </h3>
              <p className="text-zinc-400 text-xs mt-1">
                CSE Student / Graduate · World University of Bangladesh (WUB)
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah"
                    className="w-full px-3 py-2 rounded-lg bg-[#111113] border border-zinc-800 focus:border-[#fd6f00] text-white text-xs sm:text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@example.com"
                    className="w-full px-3 py-2 rounded-lg bg-[#111113] border border-zinc-800 focus:border-[#fd6f00] text-white text-xs sm:text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1">
                  Inquiry Topic / Project
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#111113] border border-zinc-800 focus:border-[#fd6f00] text-white text-xs sm:text-sm outline-none"
                >
                  <option value="Web & Software Development">Web & Software Development</option>
                  <option value="Academic / Thesis Project">Academic / Thesis Collaboration</option>
                  <option value="Job / Internship Opportunity">Job / Internship Opportunity</option>
                  <option value="Database & Backend Design">Database & Backend Design</option>
                  <option value="General Tech Discussion">General Tech Discussion</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1">
                  Message Details
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Share a short note about what you'd like to discuss..."
                  className="w-full px-3 py-2 rounded-lg bg-[#111113] border border-zinc-800 focus:border-[#fd6f00] text-white text-xs sm:text-sm outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 rounded-lg bg-[#fd6f00] hover:bg-[#ff7d1a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
              >
                {submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <PaperPlaneTilt size={15} weight="bold" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
