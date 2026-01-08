"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Quote } from "lucide-react";

interface LinkedinPost {
  _id: string;
  title: string;
  content: string;
  postUrl: string;
  authorName?: string;
  date?: string;
}

export function LinkedinPostsSection() {
  const [posts, setPosts] = useState<LinkedinPost[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "linkedinPost" && isActive == true] | order(date desc)[0...5]`)
      .then((data) => {
        if (data && data.length > 0) {
          setPosts(data);
        } else {
          // Fallback data for demo/empty state
          setPosts([
            {
              _id: 'demo-1',
              title: 'The Rise of Identity Threats',
              content: '🚨 Identity is the new perimeter. With 80% of breaches involving compromised credentials, traditional security tools are no longer enough. We are seeing a massive shift towards Identity Threat Detection and Response (ITDR) as the critical layer for modern defense. Are you monitoring your non-human identities as closely as your users? #IdentitySecurity #ITDR #CyberSecurity #CisoLife',
              postUrl: 'https://www.linkedin.com/company/cydenti',
              authorName: 'Cydenti',
              date: new Date().toISOString().split('T')[0]
            },
            {
              _id: 'demo-2',
              title: 'Non-Human Identity Risk',
              content: 'Did you know that non-human identities (service accounts, bots, API keys) outnumber human identities by 45:1 in cloud environments? ☁️ Yet, they often lack the governance we apply to employees. Our latest research shows that "over-privileged machine identities" are the #1 attack vector in cloud breaches this year. Time to close the gap. 🛡️ #CloudSecurity #IAM #MachineIdentity',
              postUrl: 'https://www.linkedin.com/company/cydenti',
              authorName: 'Cydenti',
              date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0]
            },
            {
              _id: 'demo-3',
              title: 'Zero Trust & AI',
              content: 'Zero Trust isn’t just a buzzword—it’s a necessity. But static policies break at scale. 🧠 Enter AI-driven Risk Scoring. By analyzing behavioral context in real-time, we can move from "trust but verify" to "verify continuously." Excited to share how Cydenti’s new risk engine reduces false positives by 60% while stopping lateral movement dead in its tracks. 🚀 #ZeroTrust #AI #InfoSec',
              postUrl: 'https://www.linkedin.com/company/cydenti',
              authorName: 'Cydenti',
              date: new Date(Date.now() - 86400000 * 5).toISOString().split('T')[0]
            },
             {
              _id: 'demo-4',
              title: 'Compliance Automation',
              content: 'Struggling with audit fatigue? 😓 You are not alone. Automated compliance reporting is no longer a "nice to have"—it is a survival mechanism for modern CISOs. Learn how we map identity signals directly to SOC2, ISO27001, and HIPAA controls in real-time. Stop chasing spreadsheets and start managing risk. 📉 #Compliance #GRC #AuditReady',
              postUrl: 'https://www.linkedin.com/company/cydenti',
              authorName: 'Cydenti',
              date: new Date(Date.now() - 86400000 * 10).toISOString().split('T')[0]
            }
          ]);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch linkedin posts", err);
        // Also use fallback on error
         setPosts([
            {
              _id: 'demo-1',
              title: 'The Rise of Identity Threats',
              content: '🚨 Identity is the new perimeter. With 80% of breaches involving compromised credentials, traditional security tools are no longer enough. We are seeing a massive shift towards Identity Threat Detection and Response (ITDR) as the critical layer for modern defense. Are you monitoring your non-human identities as closely as your users? #IdentitySecurity #ITDR #CyberSecurity #CisoLife',
              postUrl: 'https://www.linkedin.com/company/cydenti',
              authorName: 'Cydenti',
              date: new Date().toISOString().split('T')[0]
            },
            {
              _id: 'demo-2',
              title: 'Non-Human Identity Risk',
              content: 'Did you know that non-human identities (service accounts, bots, API keys) outnumber human identities by 45:1 in cloud environments? ☁️ Yet, they often lack the governance we apply to employees. Our latest research shows that "over-privileged machine identities" are the #1 attack vector in cloud breaches this year. Time to close the gap. 🛡️ #CloudSecurity #IAM #MachineIdentity',
              postUrl: 'https://www.linkedin.com/company/cydenti',
              authorName: 'Cydenti',
              date: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0]
            },
            {
              _id: 'demo-3',
              title: 'Zero Trust & AI',
              content: 'Zero Trust isn’t just a buzzword—it’s a necessity. But static policies break at scale. 🧠 Enter AI-driven Risk Scoring. By analyzing behavioral context in real-time, we can move from "trust but verify" to "verify continuously." Excited to share how Cydenti’s new risk engine reduces false positives by 60% while stopping lateral movement dead in its tracks. 🚀 #ZeroTrust #AI #InfoSec',
              postUrl: 'https://www.linkedin.com/company/cydenti',
              authorName: 'Cydenti',
              date: new Date(Date.now() - 86400000 * 5).toISOString().split('T')[0]
            },
             {
              _id: 'demo-4',
              title: 'Compliance Automation',
              content: 'Struggling with audit fatigue? 😓 You are not alone. Automated compliance reporting is no longer a "nice to have"—it is a survival mechanism for modern CISOs. Learn how we map identity signals directly to SOC2, ISO27001, and HIPAA controls in real-time. Stop chasing spreadsheets and start managing risk. 📉 #Compliance #GRC #AuditReady',
              postUrl: 'https://www.linkedin.com/company/cydenti',
              authorName: 'Cydenti',
              date: new Date(Date.now() - 86400000 * 10).toISOString().split('T')[0]
            }
          ]);
      });
  }, []);

  if (posts.length === 0) return null;

  // Duplicate posts to ensure smooth infinite scroll
  // We need enough items to fill the screen width + extra for the loop
  const marqueePosts = [...posts, ...posts, ...posts, ...posts];

  return (
    <section className="py-24 relative overflow-hidden w-full bg-[#F8FAFC]">
       {/* Background Elements */}
       <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/40 blur-[120px] rounded-full mix-blend-multiply opacity-60" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-100/40 blur-[120px] rounded-full mix-blend-multiply opacity-60" />
      </div>

      <div className="relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 px-6">
          <div className="inline-flex items-center gap-2 text-[#0A4CFF] font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-6">
            <Linkedin size={12} className="fill-current" />
            Social Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Join the Conversation
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Stay ahead of identity threats with our latest research, insights, and community discussions.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="w-full overflow-hidden relative group">
           {/* Fade Edges */}
           <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {marqueePosts.map((post, index) => (
              <div 
                key={`${post._id}-${index}`}
                className="w-[400px] mx-4 h-full"
              >
                <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                        <Linkedin size={24} fill="white" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-base">
                          {post.authorName || "Cydenti"}
                        </p>
                        {post.date && (
                          <p className="text-xs text-slate-400 font-medium">{post.date}</p>
                        )}
                      </div>
                    </div>
                    <Quote className="text-slate-200 fill-slate-50" size={40} />
                  </div>

                  <div className="flex-grow">
                    <p className="text-slate-600 leading-relaxed text-[15px] mb-6 line-clamp-4">
                      {post.content}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-50 mt-auto">
                    <Link
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] hover:text-[#004182] transition-colors group/link"
                    >
                      Read full post
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <Button asChild className="rounded-full px-8 py-6 text-base bg-[#0A66C2] hover:bg-[#004182] shadow-lg shadow-blue-200/50">
                <Link href="https://www.linkedin.com/company/cydenti" target="_blank" className="flex items-center gap-2">
                    <Linkedin size={20} fill="white" />
                    Follow Cydenti on LinkedIn
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
