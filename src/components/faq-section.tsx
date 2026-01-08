"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Platform Overview",
    items: [
      {
        question: "What exactly does Cydenti do?",
        answer: (
          <>
            <p className="mb-4">
              Cydenti is a SaaS Identity Security platform that unifies Identity Security Posture Management (ISPM) and Identity Threat Detection &amp; Response (ITDR). It maps identities, permissions, and integrations across SaaS so you can see who has access to what and where risk can spread.
            </p>
            <p>
              By continuously analyzing configurations and activity, Cydenti helps you minimize blast radius, detect identity-driven threats earlier, and keep SaaS access aligned with least privilege.
            </p>
          </>
        ),
      },
      {
        question: "Is this a SIEM replacement? We already have Splunk / Microsoft Sentinel / QRadar.",
        answer: (
          <>
            <p className="mb-4">
              No—Cydenti is designed to <strong>augment your SIEM, not replace it</strong>.
            </p>
            <p className="mb-4">
              A SIEM is excellent at storage, correlation, and SOC workflows, but it still needs high-quality SaaS identity signals.
            </p>
            <p>
              Cydenti provides SaaS identity context, risk scoring, and curated detections, and can forward alerts and events into your SIEM or ticketing tools so your SOC can investigate and respond using existing workflows.
            </p>
          </>
        ),
      },
      {
        question: "How is this different from CNAPP/CSPM tools (Wiz, Prisma, Orca, etc.)?",
        answer: (
          <>
            <p className="mb-4">
              CNAPP and CSPM tools focus primarily on <strong>cloud infrastructure security</strong>—such as misconfigurations, workloads, containers, and cloud-native identities inside IaaS environments.
            </p>
            <p className="mb-4">
              Cydenti is purpose-built for <strong>SaaS identity security</strong>. It deeply understands SaaS-specific identity models, OAuth consent frameworks, non-human identities, and third-party integrations that cloud security tools typically do not analyze in detail.
            </p>
            <p>
              The approaches are complementary: CNAPP secures cloud infrastructure, while Cydenti secures how identities and integrations operate across SaaS platforms and limits blast radius.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Identity Security",
    items: [
      {
        question: "What are \"non-human identities\" and why do you focus on them?",
        answer: (
          <>
            <p className="mb-4">
              Non-human identities include service accounts, API keys, automation users, bots, and OAuth applications. These identities often have broad, persistent access and are rarely monitored as closely as human users.
            </p>
            <p>
              Attackers increasingly target non-human identities because they are harder to detect, rarely rotate credentials, and can provide long-term access. Cydenti prioritizes visibility and detection around these identities to reduce hidden and high-impact risk.
            </p>
          </>
        ),
      },
      {
        question: "How do you handle OAuth apps and third-party integrations?",
        answer: (
          <>
            <p className="mb-4">
              Cydenti inventories OAuth applications and third-party integrations across supported SaaS platforms, analyzing granted scopes, privilege levels, and usage patterns.
            </p>
            <p>
              The platform highlights risky OAuth grants, unused or over-privileged apps, and abnormal behavior so teams can see which integrations expand their attack surface and which ones pose real risk.
            </p>
          </>
        ),
      },
      {
        question: "Can you show \"blast radius\" or attack paths if an identity is compromised?",
        answer: (
          <>
            <p className="mb-4">
              Yes. Cydenti maps identity relationships, permissions, and integrations to show how access can propagate if an identity is compromised.
            </p>
            <p>
              This includes understanding which SaaS apps, data, and administrative actions could be reached through a single user, service account, or OAuth token so you can prioritize remediation based on potential blast radius.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Deployment & Integration",
    items: [
      {
        question: "Which SaaS applications can you support?",
        answer: (
          <>
            <p className="mb-4">
              Cydenti supports a growing set of widely used SaaS applications and identity providers, focusing on platforms with complex identity and integration models.
            </p>
            <p>
              Support is continuously expanding based on customer needs and risk coverage priorities.
            </p>
          </>
        ),
      },
      {
        question: "How quickly can we deploy and see value?",
        answer: (
          <>
            <p className="mb-4">
              Most customers can connect initial SaaS applications and generate meaningful insights within hours.
            </p>
            <p>
              An initial risk snapshot—covering identity exposure, integrations, and posture—can typically be produced on the first day, allowing teams to validate value quickly.
            </p>
          </>
        ),
      },
      {
        question: "Do you require agents?",
        answer: (
          <>
            <p className="mb-4">
              No. Cydenti is agentless.
            </p>
            <p>
              It connects to SaaS platforms using secure APIs and native integration mechanisms, minimizing operational overhead and deployment complexity.
            </p>
          </>
        ),
      },
      {
        question: "Can you integrate with our existing tools (SIEM, ticketing, SOC workflows)?",
        answer: (
          <>
            <p className="mb-4">
              Yes. Cydenti is designed to integrate into existing security operations.
            </p>
            <p>
              Alerts and findings can be forwarded to SIEM platforms, ticketing systems, and SOC tooling so teams can respond using established processes and workflows.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Privacy & Compliance",
    items: [
      {
        question: "Is Cydenti compliant with European sovereignty requirements?",
        answer: (
          <>
            <p className="mb-4">
              Yes. Cydenti is designed with European data protection and sovereignty requirements in mind.
            </p>
            <p>
              The platform supports regional data handling controls and aligns with GDPR and related regulatory expectations.
            </p>
          </>
        ),
      },
      {
        question: "Do you read the content of emails, files, or documents?",
        answer: (
          <>
            <p className="mb-4">
              No. Cydenti does <strong>not</strong> read or analyze the content of emails, files, or documents.
            </p>
            <p>
              The platform focuses on metadata, configuration, permissions, and activity signals required for identity security, minimizing data exposure while maintaining security effectiveness.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "AI & Technology",
    items: [
      {
        question: "Where does the \"AI\" fit in, and why use it?",
        answer: (
          <>
            <p className="mb-4">
              AI is used to help analyze complex identity relationships, detect anomalies, and prioritize risk across large and dynamic SaaS environments.
            </p>
            <p>
              This allows Cydenti to surface meaningful insights faster and reduce manual analysis for security teams.
            </p>
          </>
        ),
      },
      {
        question: "Is the AI secure? Do you send our data outside?",
        answer: (
          <>
            <p className="mb-4">
              Cydenti’s AI components are designed with security and privacy as first principles.
            </p>
            <p>
              Customer data is handled according to strict security controls, and AI processing does not expose sensitive data outside approved environments.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      {
        question: "Who is Cydenti built for?",
        answer: (
          <>
            <p className="mb-4">
              Cydenti is built for security, IAM, and cloud teams responsible for protecting SaaS environments, identities, and integrations.
            </p>
            <p>
              It is particularly valuable for organizations with complex SaaS usage, third-party integrations, and compliance requirements.
            </p>
          </>
        ),
      },
      {
        question: "What does a typical evaluation look like?",
        answer: (
          <>
            <p className="mb-4">
              A common evaluation path is:
            </p>
            <ol className="list-decimal pl-5 mb-4 space-y-1">
              <li>Connect a small number of critical SaaS apps (and optionally an IdP)</li>
              <li>Generate an initial risk snapshot (posture + identity and integration exposure)</li>
              <li>Validate detections, use cases, and SIEM workflows</li>
              <li>Review reporting outputs for compliance and audit needs</li>
              <li>Scale coverage to additional SaaS applications</li>
            </ol>
            <p>
              This approach keeps evaluations fast, measurable, and focused on real risk reduction.
            </p>
          </>
        ),
      },
    ],
  },
];

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>(faqData[0].title);
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  const activeCategoryData = faqData.find((c) => c.title === activeCategory);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Everything you need to know about Cydenti&apos;s SaaS Identity Security platform, from deployment to compliance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="sticky top-24 space-y-2">
              {faqData.map((category) => (
                <button
                  key={category.title}
                  onClick={() => {
                    setActiveCategory(category.title);
                    setOpenItemIndex(null);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.title
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Questions List */}
          <div className="lg:w-3/4">
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-6 px-2">
                    {activeCategory}
                  </h3>
                  <div className="space-y-4">
                    {activeCategoryData?.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200 hover:border-blue-200 hover:shadow-sm"
                      >
                        <button
                          onClick={() => toggleItem(index)}
                          className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                          <span className="text-lg font-medium text-slate-900 pr-8">
                            {item.question}
                          </span>
                          <span className="flex-shrink-0 text-blue-600">
                            {openItemIndex === index ? (
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </span>
                        </button>
                        <AnimatePresence>
                          {openItemIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
