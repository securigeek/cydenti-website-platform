"use client";

import React from "react";
import { Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Addy Sharma",
    role: "Founder & CEO",
    bio: "15+ years in banking cybersecurity at BNP Paribas, AXA, and BPCE. Expert in identity security and cloud transformation.",
    image: "/addy sharma.png",
  },
  {
    name: "Christophe Graignic",
    role: "Advisory Board & Partner",
    bio: "Senior technology advisor with deep expertise in enterprise security and digital transformation.",
    image: "/christophe.png",
  },
  {
    name: "Pascal Moulin",
    role: "Advisory Board & Partner",
    bio: "Cybersecurity veteran with extensive experience in regulated industries and compliance frameworks.",
    image: "/pascal.png",
  },
  {
    name: "Audric Tohungba",
    role: "Advisory Board and Product Manager",
    bio: "Product strategist focused on building user-centric security solutions for modern enterprises.",
    image: "/Audric.png",
  },
];

export function LeadershipTeam() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 mb-6">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-700">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Driving Innovation</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Discover the driving force behind Cydenti&apos;s success. Our leadership team brings years of expertise in cybersecurity, technology, and business management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person, index) => (
            <motion.div 
              key={person.name} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-[420px] w-full [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-sm hover:shadow-xl rounded-3xl">
                
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col [backface-visibility:hidden]">
                   {/* Full Width Image Top */}
                   <div className="relative w-full h-[75%] bg-slate-100">
                     <Image 
                       src={person.image} 
                       alt={person.name}
                       fill
                       className="object-cover object-top"
                       priority={index < 2}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   </div>
                   
                   {/* Text Bottom */}
                   <div className="h-[25%] flex flex-col items-center justify-center bg-white border-t border-slate-100 px-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 text-center">{person.name}</h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600 text-center">{person.role}</p>
                   </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-3xl bg-slate-900 p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                   <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-blue-500 relative shrink-0">
                      <Image 
                       src={person.image} 
                       alt={person.name}
                       fill
                       className="object-cover object-top"
                     />
                   </div>
                   <h3 className="text-lg font-bold text-white mb-1">{person.name}</h3>
                   <p className="text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-4">{person.role}</p>
                   <p className="text-slate-300 leading-relaxed text-sm">
                     {person.bio}
                   </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
