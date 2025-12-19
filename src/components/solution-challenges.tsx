"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  CloudFog, 
  Ghost, 
  Unlock,
  ClipboardList,
  UserX,
  ShieldAlert
} from 'lucide-react';

const challenges = [
  {
    title: "Fragmented Visibility",
    description: "Siloed views across SaaS and cloud environments leave security teams in the dark.",
    icon: CloudFog,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Over-Provisioned Access",
    description: "Excessive permissions and unused accounts create a massive attack surface.",
    icon: Unlock,
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    title: "Manual Audits",
    description: "Spreadsheets and screenshots can't keep up with the speed of modern development.",
    icon: ClipboardList,
    color: "bg-slate-50 text-slate-600"
  },
  {
    title: "Shadow IT",
    description: "Unsanctioned apps and hidden integrations bypass security controls completely.",
    icon: Ghost,
    color: "bg-sky-50 text-sky-600"
  },
  {
    title: "Insider Threats",
    description: "Malicious or negligent insiders exploit legitimate access to steal sensitive data.",
    icon: UserX,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Compliance Gaps",
    description: "Failing to meet continuous compliance requirements leads to fines and loss of trust.",
    icon: ShieldAlert,
    color: "bg-teal-50 text-teal-600"
  }
];

export function SolutionChallenges() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Traditional Security Fails
          </h2>
          <p className="text-lg text-gray-600">
            Security teams are struggling to keep up with the speed of SaaS adoption and cloud complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${challenge.color}`}>
                <challenge.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
              <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
