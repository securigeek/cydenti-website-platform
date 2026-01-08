import React from "react";
import { Shield, ArrowRight, Settings2, CloudFog } from "lucide-react";
import Link from "next/link";

export function FeatureCardsSection() {
  return (
    <section className="py-32 bg-transparent relative overflow-visible z-0">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Total Visibility. <br/>
            <span className="text-blue-600">Intelligent Defense.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Secure your entire identity fabric—human, machine, and AI—with one unified platform.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 mt-10">
          
          {/* LEFT CARD: ISPM */}
          <div className="w-full max-w-sm lg:w-[380px] z-10 lg:transform lg:-rotate-6 lg:translate-x-12 lg:translate-y-8 transition-all duration-500 hover:z-30 hover:rotate-0 hover:scale-105">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-full min-h-[420px] flex flex-col">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                <Settings2 className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">ISPM</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Identity Security Posture Management. Proactively manage your identity attack surface and gain visibility into permissions and configurations.
              </p>
              <div className="pt-6 border-t border-slate-100">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Continuous posture assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Misconfiguration detection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Least privilege enforcement
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT CARD: AI Agents (Rendered before center in DOM for stacking, but visually right) 
              Actually, in flex row, order matters. Let's place it third in DOM. 
          */}

          {/* MIDDLE CARD: ITDR (Centerpiece) */}
          <div className="w-full max-w-md lg:w-[440px] z-20 transform hover:scale-105 transition-all duration-500 shadow-2xl">
            <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-800 h-full min-h-[480px] flex flex-col relative overflow-hidden">
              {/* Abstract Background Graphic */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-blue-500/20">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">ITDR</h3>
              <p className="text-blue-100/80 text-lg mb-8 flex-grow">
                Identity Threat Detection & Response. Stop identity threats before they become incidents by detecting suspicious privileges and abnormal behaviors in real-time.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-blue-50/90">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span>Real-time anomaly detection</span>
                </div>
                <div className="flex items-center gap-3 text-blue-50/90">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span>Unified Identity Graph analysis</span>
                </div>
                <div className="flex items-center gap-3 text-blue-50/90">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span>Automated threat response</span>
                </div>
              </div>

              <Link href="/platform" className="inline-flex items-center justify-center w-full py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors">
                Explore Platform
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* RIGHT CARD: Blast Radius & Exposure */}
          <div className="w-full max-w-sm lg:w-[380px] z-10 lg:transform lg:rotate-6 lg:-translate-x-12 lg:translate-y-8 transition-all duration-500 hover:z-30 hover:rotate-0 hover:scale-105">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-full min-h-[420px] flex flex-col">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <CloudFog className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Blast Radius & Exposure</h3>
              <p className="text-slate-600 mb-6 flex-grow">
                Visualize and reduce the impact of potential breaches. Map identity relationships and limit lateral movement paths to critical assets.
              </p>
              <div className="pt-6 border-t border-slate-100">
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Identity graph visualization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Lateral movement analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Impact radius reduction
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
