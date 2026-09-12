"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Globe,
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
  PinterestLogo,
  WhatsappLogo,
  GithubLogo,
  TelegramLogo,
  TwitterLogo,
  ChatCircleText,
  EnvelopeSimple,
  PaperPlaneTilt,
  CheckCircle,
  MapPin,
  Sparkle
} from "@phosphor-icons/react";

interface ContactProps {
  initialService?: string;
  initialPlan?: string;
}

export default function Contact({ initialService = "", initialPlan = "" }: ContactProps) {
  const [selectedTopic, setSelectedTopic] = useState(initialService || "General Collaboration");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    initialPlan ? `Hi Iftekhar, I'd like to talk regarding ${initialPlan}.` : ""
  );
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const topics = [
    "General Collaboration",
    "Academic / Thesis Project",
    "Web Application Dev",
    "Job / Internship Opportunity",
    "Tech Discussion",
  ];

  const socialLinks = [
    { name: "Website", url: "https://iftekharmahmud.me", handle: "iftekharmahmud.me", icon: Globe },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/iftekharmahmud", handle: "in/iftekharmahmud", icon: LinkedinLogo },
    { name: "GitHub", url: "https://github.com/iftekharmahmud2", handle: "iftekharmahmud2", icon: GithubLogo },
    { name: "Facebook", url: "https://www.facebook.com/iftekhaar.murad", handle: "iftekhaar.murad", icon: FacebookLogo },
    { name: "Instagram", url: "https://www.instagram.com/iftekhaar_", handle: "@iftekhaar_", icon: InstagramLogo },
    { name: "WhatsApp", url: "https://wa.me/IftekhaarMahmud", handle: "IftekhaarMahmud", icon: WhatsappLogo },
    { name: "Telegram", url: "https://t.me/iftekharmahmud", handle: "@iftekharmahmud", icon: TelegramLogo },
    { name: "X (Twitter)", url: "https://x.com/iftekhaar69", handle: "@iftekhaar69", icon: TwitterLogo },
    { name: "Threads", url: "https://www.threads.net/@iftekhaar_", handle: "@iftekhaar_", icon: ChatCircleText },
    { name: "Pinterest", url: "https://www.pinterest.com/iftekhar_mahmud/", handle: "iftekhar_mahmud", icon: PinterestLogo },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 75,
          spread: 65,
          origin: { y: 0.6 },
          colors: ["#fd6f00", "#ff8800", "#ffffff"],
        });
      } catch (err) {}
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0e0e11] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#fd6f00]/10 border border-[#fd6f00]/20 text-[#fd6f00] text-xs font-semibold uppercase tracking-wider mb-4">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Let's connect & <span className="text-[#fd6f00]">collaborate</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Reach out for software projects, engineering roles, student collaborations, or just to say hello across any of my social profiles.
          </p>
        </div>

        {/* 10 Social Links Grid */}
        <div className="mb-16">
          <h3 className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-4">
            Connect Across All 10 Social Platforms
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#141418] border border-zinc-800 hover:border-[#fd6f00] hover:bg-[#1a1a20] transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zinc-400 group-hover:text-[#fd6f00] transition-colors">
                      <Icon size={20} weight="bold" />
                    </span>
                    <span className="text-[10px] text-zinc-500 group-hover:text-zinc-400">
                      ↗
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-[#fd6f00] transition-colors">
                      {social.name}
                    </div>
                    <div className="text-[11px] text-zinc-500 truncate mt-0.5">
                      {social.handle}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Form & Direct Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl bg-[#141418] border border-zinc-800 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white">Direct Communication</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1c1c24] border border-zinc-700/60 flex items-center justify-center text-[#fd6f00]">
                  <Globe size={20} weight="bold" />
                </div>
                <div>
                  <div className="text-[11px] text-zinc-500 font-semibold uppercase">Personal Site</div>
                  <a href="https://iftekharmahmud.me" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#fd6f00] text-sm font-medium">
                    iftekharmahmud.me
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1c1c24] border border-zinc-700/60 flex items-center justify-center text-[#fd6f00]">
                  <WhatsappLogo size={20} weight="bold" />
                </div>
                <div>
                  <div className="text-[11px] text-zinc-500 font-semibold uppercase">WhatsApp</div>
                  <a href="https://wa.me/IftekhaarMahmud" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#fd6f00] text-sm font-medium">
                    wa.me/IftekhaarMahmud
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1c1c24] border border-zinc-700/60 flex items-center justify-center text-[#fd6f00]">
                  <MapPin size={20} weight="bold" />
                </div>
                <div>
                  <div className="text-[11px] text-zinc-500 font-semibold uppercase">Location / University</div>
                  <div className="text-zinc-200 text-sm font-medium">
                    World University of Bangladesh, Dhaka
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7 bg-[#141418] border border-zinc-800 rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle size={32} weight="fill" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                  Thank you, <span className="text-white font-semibold">{name}</span>. I'll get back to your email at <span className="text-[#fd6f00] font-semibold">{email}</span> soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="mt-4 px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-zinc-400 mb-2">
                    Topic / Subject
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTopic(t)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          selectedTopic === t
                            ? "bg-[#fd6f00] text-white"
                            : "bg-[#1c1c24] text-zinc-400 hover:text-white border border-zinc-800"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#111113] border border-zinc-800 focus:border-[#fd6f00] text-white text-xs sm:text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#111113] border border-zinc-800 focus:border-[#fd6f00] text-white text-xs sm:text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111113] border border-zinc-800 focus:border-[#fd6f00] text-white text-xs sm:text-sm outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-lg bg-[#fd6f00] hover:bg-[#ff7d1a] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <PaperPlaneTilt size={16} weight="bold" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
