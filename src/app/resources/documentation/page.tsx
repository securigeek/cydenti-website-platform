"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Shield, Zap, Lock, Cpu, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";

// Define the structure for documentation sections
interface DocSection {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState<string>("platform-overview");

  // Handle scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 120; // Offset for header

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const sections: DocSection[] = [
    {
      id: "platform-overview",
      title: "Platform Overview",
      icon: <FileText className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            Cydenti is a SaaS Identity Security platform designed to help organizations discover, understand, and mitigate identity risk across modern SaaS environments.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Unlike traditional security tools that focus on infrastructure or endpoints, Cydenti focuses on <strong className="text-slate-900">identities, permissions, and integrations</strong>—including non-human identities and OAuth applications—that are increasingly targeted by attackers.
          </p>
          
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-slate-900 mb-4">What Cydenti Does</h4>
            <ul className="space-y-3">
              {[
                "Continuously analyzes SaaS identity configurations and access models",
                "Identifies excessive privileges and risky integrations",
                "Detects identity-based threats and anomalous behavior",
                "Maps identity relationships to understand potential blast radius",
                "Integrates with existing SOC, SIEM, and ticketing workflows"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                  <div className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <p className="text-slate-600 leading-relaxed">
            Cydenti helps security teams move from fragmented SaaS visibility to a unified, risk-driven view of identity exposure.
          </p>
        </div>
      )
    },
    {
      id: "identity-security-model",
      title: "Identity Security Model",
      icon: <Shield className="w-4 h-4" />,
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium text-slate-900 mb-4">Human and Non-Human Identities</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Cydenti secures both human users and non-human identities, including:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {["Service accounts and automation users", "API keys and tokens", "OAuth applications", "Third-party integrations"].map((item, i) => (
                <li key={i} className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-600 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed text-sm">
              Non-human identities often have persistent and high-impact access, making them a frequent target for attackers. Cydenti prioritizes visibility and detection for these identities.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <h3 className="text-xl font-medium text-slate-900 mb-4">OAuth and Third-Party Access</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Cydenti inventories OAuth applications and third-party integrations across supported SaaS platforms. It evaluates:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Granted scopes", "Privilege levels", "Usage patterns", "Dormant access"].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-slate-600 leading-relaxed">
              This allows teams to identify integrations that increase attack surface and remediate unnecessary or risky access.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <h3 className="text-xl font-medium text-slate-900 mb-4">Blast Radius and Access Paths</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Cydenti maps identity relationships across SaaS applications to show how access can propagate if an identity is compromised.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-slate-700 text-sm font-medium mb-2">Why this matters:</p>
              <ul className="list-disc pl-4 text-slate-600 text-sm space-y-1">
                <li>Understand potential impact of an attack</li>
                <li>Prioritize remediation based on risk</li>
                <li>Reduce over-privileged access</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "threat-detection",
      title: "Threat Detection & ITDR",
      icon: <Zap className="w-4 h-4" />,
      content: (
        <div className="space-y-8">
          <p className="text-slate-600 leading-relaxed">
            Cydenti provides Identity Threat Detection and Response (ITDR) capabilities tailored to SaaS environments.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-200 transition-colors">
              <h4 className="font-semibold text-slate-900 mb-3">Detection Coverage</h4>
              <p className="text-sm text-slate-500 mb-4">Aligned with MITRE-style patterns:</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">●</span> Suspicious sign-in behavior
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">●</span> Risky privilege escalation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">●</span> Unusual service account access
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">●</span> High-risk administrative actions
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-200 transition-colors">
              <h4 className="font-semibold text-slate-900 mb-3">Actionable Alerts</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                All detections are enriched with SaaS-specific context—such as identity type, permissions, and integrations—to reduce false positives and alert fatigue.
              </p>
              <p className="text-sm text-slate-500">
                Alerts can be forwarded to SIEM platforms or ticketing systems for seamless workflow integration.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "deployment",
      title: "Deployment & Integration",
      icon: <Rocket className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Agentless Architecture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cydenti is fully agentless. It connects to SaaS platforms using secure APIs and native integration mechanisms, minimizing operational overhead.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Time to Value</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most organizations can connect initial SaaS applications within hours and generate an initial risk snapshot on the first day.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-300 rounded-xl p-6 mt-4">
            <h4 className="text-white font-medium mb-4">Integrations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["SIEM Platforms", "Ticketing Systems", "SOC Workflows"].map((item, i) => (
                <div key={i} className="bg-slate-800/50 rounded-lg px-4 py-3 text-center border border-slate-700/50">
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "privacy",
      title: "Privacy & Compliance",
      icon: <Lock className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-1.5 bg-blue-50 rounded-md">
                <Lock className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Data Handling and Privacy</h3>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Cydenti is designed to minimize data exposure. The platform:
            </p>
            <ul className="space-y-2 text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[10px]">✓</div>
                Does not read email, file, or document content
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[10px]">✓</div>
                Focuses on metadata, configuration, permissions, and activity signals
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">European Sovereignty</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Cydenti supports European data protection and sovereignty requirements and aligns with GDPR expectations. Regional data handling controls are available to meet regulatory needs.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "technology",
      title: "AI & Technology",
      icon: <Cpu className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-3">Role of AI</h3>
            <p className="text-slate-600 mb-4 text-sm">AI is used to:</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                "Analyze complex identity relationships",
                "Detect anomalies and risky patterns",
                "Prioritize risk across environments"
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-lg p-4 text-center">
                  <span className="text-sm text-blue-900 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">AI Security</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Cydenti’s AI components are designed with security-first principles. Customer data is processed according to strict controls and is not exposed outside approved environments.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <ArrowRight className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-slate-900 mb-4">Typical Evaluation Flow</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-100" />
              {[
                "Connect a small number of critical SaaS applications",
                "Generate an initial risk snapshot",
                "Validate detections and SIEM workflows",
                "Review reporting for compliance and audit needs",
                "Scale coverage to additional SaaS applications"
              ].map((step, i) => (
                <div key={i} className="relative pl-12 pb-6 last:pb-0">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-500 z-10">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 text-sm font-medium pt-1.5">{step}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-xl p-8 text-center text-white mt-8">
            <h3 className="text-2xl font-bold mb-3">Ready to start?</h3>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              Get a free SaaS identity risk audit and see Cydenti in action.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo" className="bg-white text-blue-600 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">
                Book a Demo
              </Link>
              <Link href="/contact" className="bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-800 transition-colors border border-blue-500">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Background */}
      <div className="absolute top-0 left-0 w-full h-80 bg-slate-50 -z-10 border-b border-slate-100" />
      
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-6">
            Documentation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Cydenti Platform Guide
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Welcome to the Cydenti documentation. Learn how to discover, monitor, and protect identities across your SaaS environment.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className={`transition-colors ${activeSection === section.id ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"}`}>
                      {section.icon}
                    </span>
                    {section.title}
                    {activeSection === section.id && (
                      <motion.div
                        layoutId="active-indicator"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600"
                      />
                    )}
                  </button>
                ))}
              </nav>


            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-24 pb-24">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  {section.content}
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
