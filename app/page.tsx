"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio, { Project } from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HireMeModal from "@/components/HireMeModal";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenHireModal = (serviceName?: string, planName?: string) => {
    setSelectedService(serviceName || "");
    setSelectedPlan(planName || "");
    setIsHireModalOpen(true);
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsHireModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#111113] text-[#f4f4f5] relative selection:bg-[#fd6f00] selection:text-white">
      {/* 1. Header Navigation (Exact LOGO + text links + solid orange Hire Me) */}
      <Navbar onOpenHireModal={() => handleOpenHireModal()} />

      {/* 2. Hero Section (Exact 1:1 match with reference screenshot + Iftekhar Mahmud + iftekhar.PNG + WUB CSE Context) */}
      <Hero onOpenHireModal={() => handleOpenHireModal()} />

      {/* 3. Services / Academic & Technical Capabilities */}
      <Services onSelectService={handleSelectServiceFromCard} />

      {/* 4. About Me (World University of Bangladesh CSE Department, Coursework & Skills) */}
      <About />

      {/* 5. Featured Projects & Technical Work */}
      <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

      {/* 6. Contact & All 10 Social Media Profiles */}
      <Contact
        initialService={selectedService}
        initialPlan={selectedPlan}
      />

      {/* 7. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <HireMeModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        preselectedService={selectedService}
        preselectedPlan={selectedPlan}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenHireModal={() => handleOpenHireModal(selectedProject?.title)}
      />
    </main>
  );
}
