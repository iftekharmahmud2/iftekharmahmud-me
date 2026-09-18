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

      {/* Semantic Content & Social Backlinks for Crawlers and Search Engines */}
      <section className="sr-only" aria-label="Iftekhar Mahmud CSE Portfolio Semantic Overview">
        <h1>Iftekhar Mahmud — Computer Science & Engineering Student Portfolio</h1>
        <p>
          Welcome to the official portfolio of Iftekhar Mahmud, an undergraduate student pursuing a Bachelor of Science
          in Computer Science & Engineering (B.Sc. in CSE) at the World University of Bangladesh (WUB), Dhaka, Bangladesh.
          Iftekhar Mahmud is passionate about software engineering, competitive programming, object-oriented systems design,
          and modern web application development using React, Next.js, and TypeScript.
        </p>

        <h2>Academic Background & University Affiliation</h2>
        <p>
          Enrolled in the Department of Computer Science and Engineering at the World University of Bangladesh (WUB).
          Focus areas include Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), Database Management Systems (DBMS),
          Operating Systems, Discrete Mathematics, Computer Networks, and Software Engineering methodologies.
        </p>

        <h2>Core Technical Skills & Capabilities</h2>
        <ul>
          <li>Programming Languages: C++, C, JavaScript (ES6+), TypeScript, HTML5, CSS3</li>
          <li>Frameworks & Libraries: React, Next.js, Node.js, Tailwind CSS, Motion / Framer Motion</li>
          <li>Software Engineering: Object-Oriented Programming (OOP), Data Structures, Algorithms, Modular Architecture</li>
          <li>Tools & Platforms: Git, GitHub, VS Code, Linux/Windows development environments, Vercel</li>
        </ul>

        <h2>Featured Projects by Iftekhar Mahmud</h2>
        <article>
          <h3>Library De Kraken — Advanced C++ Object-Oriented Library Management System</h3>
          <p>
            A high-performance command-line application engineered in modern C++ utilizing Object-Oriented Programming
            principles such as encapsulation, inheritance, and polymorphism. It features file-based persistent storage,
            book inventory tracking, member management, search algorithms, and automated fine calculation.
          </p>
        </article>
        <article>
          <h3>Hackulator — Interactive Scientific Web Calculator</h3>
          <p>
            A modern, responsive, client-side calculator web application constructed with vanilla JavaScript, HTML5, and CSS3.
            Features keyboard support, calculation history, complex mathematical operations, error handling, and a polished dark-mode UI.
          </p>
        </article>

        <h2>Official Social Media Profiles & Backlinks</h2>
        <nav aria-label="Iftekhar Mahmud Social Profiles and Backlinks">
          <ul>
            <li>
              <a href="https://iftekharmahmud.me" rel="canonical">
                Iftekhar Mahmud Official Portfolio Website
              </a>
            </li>
            <li>
              <a href="https://github.com/iftekharmahmud2" target="_blank" rel="noopener noreferrer">
                Iftekhar Mahmud GitHub Profile — Open Source Projects and Repositories
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/iftekharmahmud" target="_blank" rel="noopener noreferrer">
                Iftekhar Mahmud LinkedIn Profile — Professional Career & CSE Student Network
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/iftekhaar.murad" target="_blank" rel="noopener noreferrer">
                Iftekhar Mahmud Facebook Profile
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/iftekhaar_" target="_blank" rel="noopener noreferrer">
                Iftekhar Mahmud Instagram Profile (@iftekhaar_)
              </a>
            </li>
            <li>
              <a href="https://x.com/iftekhaar69" target="_blank" rel="noopener noreferrer">
                Iftekhar Mahmud X (Twitter) Profile (@iftekhaar69)
              </a>
            </li>
            <li>
              <a href="https://www.threads.net/@iftekhaar_" target="_blank" rel="noopener noreferrer">
                Iftekhar Mahmud Threads Profile (@iftekhaar_)
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/iftekhar_mahmud/" target="_blank" rel="noopener noreferrer">
                Iftekhar Mahmud Pinterest Profile
              </a>
            </li>
            <li>
              <a href="https://t.me/iftekharmahmud" target="_blank" rel="noopener noreferrer">
                Iftekhar Mahmud Telegram Profile (@iftekharmahmud)
              </a>
            </li>
            <li>
              <a href="https://wa.me/IftekhaarMahmud" target="_blank" rel="noopener noreferrer">
                Iftekhar Mahmud WhatsApp Direct Contact
              </a>
            </li>
            <li>
              <a href="https://wub.edu.bd" target="_blank" rel="noopener noreferrer">
                World University of Bangladesh (WUB) — Department of Computer Science & Engineering
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
