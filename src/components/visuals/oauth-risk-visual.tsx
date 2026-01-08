"use client";

import React from "react";
import { Zap, Unplug } from "lucide-react";

export function OAuthRiskVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-30 blur-3xl" />
      
      <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-8 w-full max-w-md">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Sketchy App Integration</div>
                <div className="text-xs text-slate-500">Authorized 2 years ago</div>
              </div>
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Active</div>
          </div>
          
          <div className="space-y-3">
            <div className="text-sm font-semibold text-slate-900">Access Scope:</div>
            <div className="flex flex-wrap gap-2">
              {["Read All Files", "Send Email", "Manage Contacts", "Admin Access"].map((scope, i) => (
                <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md border border-slate-200">
                  {scope}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 bg-red-50 border border-red-100 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
              <Unplug className="w-4 h-4" />
              <span>Risk Analysis</span>
            </div>
            <p className="text-xs text-red-600 leading-relaxed">
              This application has excessively broad permissions and has not been used in 180 days.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
             <button className="py-2 rounded-lg bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">
               Ignore
             </button>
             <button className="py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20">
               Revoke Access
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
