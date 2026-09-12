"use client";

import Image from "next/image";
import { X, Sparkle, ArrowUpRight, Check, Users } from "@phosphor-icons/react";
import { Project } from "./Portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenHireModal: () => void;
}

export default function ProjectModal({
  project,
  onClose,
  onOpenHireModal,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] rounded-2xl bg-[#141418] border border-zinc-800 shadow-2xl overflow-y-auto my-auto p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors z-20"
          aria-label="Close Project"
        >
          <X size={18} weight="bold" />
        </button>

        {/* Top Header */}
        <div className="mb-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-0.5 rounded bg-[#fd6f00]/10 border border-[#fd6f00]/20 text-[#fd6f00] text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-zinc-500 font-mono">
              {project.year}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1.5">
            {project.title}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            {project.subtitle}
          </p>
        </div>

        {/* Big Preview Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-zinc-800 shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            width={1000}
            height={560}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-zinc-700 px-3 py-1 rounded-full text-xs font-bold text-[#fd6f00] flex items-center gap-1.5 shadow-md">
            <Sparkle size={12} weight="fill" />
            <span>{project.impactMetric}</span>
          </div>
        </div>

        {/* Grid: Context & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          
          <div className="md:col-span-7 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-zinc-300">
              Project Description & Overview
            </h4>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {project.longDescription}
            </p>

            {project.team && project.team.length > 0 && (
              <div className="pt-2">
                <h5 className="text-xs font-bold text-zinc-400 uppercase mb-2 flex items-center gap-1.5">
                  <Users size={14} weight="bold" className="text-[#fd6f00]" />
                  <span>Project Contributors / Team:</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.team.map((member) => (
                    <div
                      key={member.name}
                      className="px-3 py-1.5 rounded-lg bg-[#111113] border border-zinc-800 text-xs text-zinc-300"
                    >
                      {member.url ? (
                        <a
                          href={member.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#fd6f00] hover:underline font-semibold flex items-center gap-1"
                        >
                          <span>{member.name}</span>
                          <ArrowUpRight size={11} weight="bold" />
                        </a>
                      ) : (
                        <span className="font-semibold text-white">{member.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-5 space-y-5 bg-[#111113] p-5 rounded-xl border border-zinc-800">
            <div>
              <div className="text-[11px] uppercase font-bold text-zinc-500 mb-1">Role</div>
              <div className="text-white font-semibold text-xs sm:text-sm">{project.role}</div>
            </div>

            <div>
              <div className="text-[11px] uppercase font-bold text-zinc-500 mb-2">Key Modules & Features</div>
              <div className="space-y-1.5">
                {project.deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#fd6f00]/20 text-[#fd6f00] flex items-center justify-center flex-shrink-0">
                      <Check size={9} weight="bold" />
                    </span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] uppercase font-bold text-zinc-500 mb-2">Tech Stack</div>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-zinc-800 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA in Modal */}
        <div className="border-t border-zinc-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-400">
            Interested in collaborating on a software or academic project?
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenHireModal();
            }}
            className="w-full sm:w-auto px-5 py-2 rounded-lg bg-[#fd6f00] hover:bg-[#ff7d1a] text-white font-bold text-xs flex items-center justify-center gap-1.5"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={13} weight="bold" />
          </button>
        </div>

      </div>
    </div>
  );
}
