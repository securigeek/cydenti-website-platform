"use client";

import { useState } from "react";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowRight, Search, Filter, Layers, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Integration Data
type Category = "SaaS Applications" | "Cloud Providers" | "Identity Providers" | "Data Platforms" | "Developer & DevOps" | "Security & Monitoring";

interface Integration {
  name: string;
  category: Category;
  logo: string;
  description: string;
  featured?: boolean;
}

const categories: Category[] = [
  "SaaS Applications",
  "Cloud Providers",
  "Identity Providers",
  "Data Platforms",
  "Developer & DevOps",
  "Security & Monitoring"
];

const integrations: Integration[] = [
  // Cloud Providers
  { name: "Google Cloud Platform", category: "Cloud Providers", logo: "/CYDENTI DASHBOARD P 2/google_cloud-icon 1.svg", description: "Cloud IAM & Resource Monitoring", featured: true },
  { name: "Microsoft Azure", category: "Cloud Providers", logo: "/CYDENTI DASHBOARD P 2/azure.svg", description: "Azure AD & Infrastructure", featured: true },
  { name: "AWS", category: "Cloud Providers", logo: "/CYDENTI DASHBOARD P 2/aws.svg", description: "IAM & Organization Security" },
  
  // Identity Providers
  { name: "Microsoft Entra ID", category: "Identity Providers", logo: "/CYDENTI DASHBOARD P 2/Microsoft_Entra_ID_color_icon 1.svg", description: "Identity Governance & Administration", featured: true },
  { name: "Google Workspace", category: "Identity Providers", logo: "/CYDENTI DASHBOARD P 2/Google__G__logo 2.svg", description: "Directory & Access Management", featured: true },
  { name: "Okta", category: "Identity Providers", logo: "/CYDENTI DASHBOARD P 2/okta-logo.png", description: "Single Sign-On & Lifecycle" },
  
  // SaaS Applications
  { name: "Salesforce", category: "SaaS Applications", logo: "/CYDENTI DASHBOARD P 2/salesforce.svg", description: "CRM Access & Permissions" },
  { name: "Slack", category: "SaaS Applications", logo: "/CYDENTI DASHBOARD P 2/Slack_icon_2019.svg", description: "Collaboration Security" },
  { name: "ServiceNow", category: "SaaS Applications", logo: "/CYDENTI DASHBOARD P 2/servicenow.svg", description: "ITSM & Workflow Automation" },
  { name: "Atlassian", category: "SaaS Applications", logo: "/CYDENTI DASHBOARD P 2/atlassian.svg", description: "Suite Access Management" },
  { name: "Microsoft 365", category: "SaaS Applications", logo: "/CYDENTI DASHBOARD P 2/M365.svg", description: "Productivity Suite Security" },
  { name: "Zendesk", category: "SaaS Applications", logo: "/CYDENTI DASHBOARD P 2/zendesk.png", description: "Customer Service Access" },

  // Developer & DevOps
  { name: "GitHub", category: "Developer & DevOps", logo: "/CYDENTI DASHBOARD P 2/GitHub-Mark-ea2971cee799.png", description: "Source Code & Repository Access", featured: true },
  { name: "GitLab", category: "Developer & DevOps", logo: "/CYDENTI DASHBOARD P 2/gitlab.png", description: "DevSecOps Platform" },
  { name: "Bitbucket", category: "Developer & DevOps", logo: "/CYDENTI DASHBOARD P 2/bitbucket.svg.png", description: "Source Control Security" },

  // Data Platforms
  { name: "Databricks", category: "Data Platforms", logo: "/CYDENTI DASHBOARD P 2/128px-Databricks-c40eaf44.png", description: "Lakehouse Security" },

  // Security & Monitoring
  { name: "Splunk", category: "Security & Monitoring", logo: "/CYDENTI DASHBOARD P 2/Logo-4.svg", description: "SIEM & Log Analysis" },
  { name: "CrowdStrike", category: "Security & Monitoring", logo: "/CYDENTI DASHBOARD P 2/crowdstrike.png", description: "Endpoint Security Integration" },
];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIntegrations = integrations.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-slate-50">
      
      {/* Hero Section */}
      <section className="w-full bg-white pt-32 pb-12 md:pt-40 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Built to Connect Where <span className="text-transparent bg-clip-text bg-[linear-gradient(120deg,var(--color-cydenti-primary),var(--color-cydenti-secondary),var(--color-cydenti-primary))] animate-text-shimmer">Identity Lives</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Cydenti integrates seamlessly across SaaS, cloud, identity providers, and security tools — without disrupting production environments.
            </p>
            <div className="flex justify-center items-center gap-6">
              <Link href="/solution" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Learn how we secure integrations <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <div className="h-4 w-px bg-slate-200 hidden md:block" />
              <a href="https://www.linkedin.com/company/cydenti/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-500 hover:text-slate-700 font-medium">
                Get a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Context Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  Unified Visibility
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Modern identity risk spans dozens of systems. Cydenti connects to them agentlessly and read-only, building a unified identity graph without requiring invasive deployment, custom scripting, or service interruption.
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  Safe & Scalable
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Integrations are designed to be fast to deploy, safe by default, and easy to scale across your entire ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Grid Section */}
      <section className="w-full py-20 bg-slate-50 min-h-[800px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Supported Integrations</h2>
            <p className="text-slate-500">Explore our growing library of connectors.</p>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-8 mb-12 max-w-7xl mx-auto">
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCategory("All")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === "All"
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                )}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search integrations..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white shadow-sm"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredIntegrations.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-5 p-3 group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src={item.logo} 
                    alt={item.name} 
                    width={48} 
                    height={48} 
                    className="object-contain w-full h-full"
                  />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 mb-3">
                  {item.category}
                </div>
                
                <p className="text-sm text-slate-500 line-clamp-2">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">No integrations found</h3>
              <p className="text-slate-500">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
