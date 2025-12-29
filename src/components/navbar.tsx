"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Hide navbar on homepage variation pages
  if (pathname?.includes("/homepage-variation")) {
    return null;
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex h-16 w-full max-w-7xl items-center justify-between rounded-full border border-slate-200/50 bg-white/80 px-6 backdrop-blur-md shadow-sm transition-all hover:shadow-md">
        <Link href="/" className="flex items-center gap-2">
          {/* Brandmark (Colored) */}
          <Image src="/cydenti-brandmark.svg" alt="Cydenti" width={24} height={24} priority />
          <span className="text-xl font-bold tracking-tight text-slate-900">Cydenti</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 outline-none">
                    Platform
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[90vw] md:w-[700px] lg:w-[800px] p-4" sideOffset={8}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="rounded-md border bg-slate-50/50 p-4">
                        <Link href="/platform" className="block h-full">
                          <div className="text-sm font-semibold text-slate-900 mb-2">Cydenti Identity Security Platform</div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Unified visibility across identities, permissions, SaaS, and cloud.
                          </p>
                          <div className="mt-4 text-xs font-medium text-blue-600 group-hover:underline">
                            Explore Platform &rarr;
                          </div>
                        </Link>
                      </div>
                      <div className="rounded-md p-2">
                        <div className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider px-2">Core Capabilities</div>
                        <div className="grid gap-1">
                          <DropdownMenuItem asChild>
                            <Link href="/platform/itdr" className="w-full cursor-pointer font-medium text-slate-700">Identity Threat Detection</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/platform/sspm" className="w-full cursor-pointer font-medium text-slate-700">SaaS Security Posture</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/platform/cloud-identity-exposure" className="w-full cursor-pointer font-medium text-slate-700">Cloud Identity Exposure</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/platform/oauth-risk-management" className="w-full cursor-pointer font-medium text-slate-700">Third-Party & OAuth Risk</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/platform/identity-risk-scoring" className="w-full cursor-pointer font-medium text-slate-700">Identity Risk Scoring</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/platform/compliance-reporting" className="w-full cursor-pointer font-medium text-slate-700">Compliance & Reporting</Link>
                          </DropdownMenuItem>
                        </div>
                      </div>
                      <div className="rounded-md p-2">
                        <div className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider px-2">Foundations</div>
                        <div className="grid gap-1">
                          <DropdownMenuItem asChild>
                            <Link href="/platform/identity-graph" className="w-full cursor-pointer font-medium text-slate-700">Identity Graph</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/platform/ai-risk-engine" className="w-full cursor-pointer font-medium text-slate-700">AI Risk Engine</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/platform/integrations" className="w-full cursor-pointer font-medium text-slate-700">Integrations</Link>
                          </DropdownMenuItem>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50">
                  <Link href="/solution">Solution</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 outline-none">
                    Resources
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 p-2">
                    <DropdownMenuItem asChild className="cursor-pointer rounded-md p-2 focus:bg-slate-100">
                      <Link href="/resources/documentation" className="w-full">Documentation</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer rounded-md p-2 focus:bg-slate-100">
                      <Link href="/resources/blogs" className="w-full">Blogs</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 outline-none">
                    Company
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 p-2">
                    <DropdownMenuItem asChild className="cursor-pointer rounded-md p-2 focus:bg-slate-100">
                      <Link href="/company/about" className="w-full">About Us</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer rounded-md p-2 focus:bg-slate-100">
                      <Link href="/company/updates" className="w-full">New Feature/Update</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            </NavigationMenuList>

          </NavigationMenu>
          <Button asChild className="rounded-full bg-cydenti-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 px-6">
            <Link href="/demo">Get a Demo</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">Menu</Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader>
                <SheetTitle>Cydenti</SheetTitle>
              </SheetHeader>
              <div className="mt-4 grid gap-3">
                <div className="grid gap-1">
                  <Link href="/platform" onClick={() => setOpen(false)} className="px-2 py-1 font-medium">Platform</Link>
                  <div className="pl-2 text-xs text-gray-500">Core Capabilities</div>
                  <Link href="/platform/itdr" onClick={() => setOpen(false)} className="px-2 py-1">Identity Threat Detection (ITDR)</Link>
                  <Link href="/platform/sspm" onClick={() => setOpen(false)} className="px-2 py-1">SaaS Security Posture Management (SSPM)</Link>
                  <Link href="/platform/cloud-identity-exposure" onClick={() => setOpen(false)} className="px-2 py-1">Cloud Identity Exposure Monitoring</Link>
                  <Link href="/platform/oauth-risk-management" onClick={() => setOpen(false)} className="px-2 py-1">Third-Party & OAuth Risk Management</Link>
                  <Link href="/platform/identity-risk-scoring" onClick={() => setOpen(false)} className="px-2 py-1">Identity Risk Scoring & Prioritization</Link>
                  <Link href="/platform/compliance-reporting" onClick={() => setOpen(false)} className="px-2 py-1">Compliance & Reporting</Link>
                  <div className="pl-2 text-xs text-gray-500">Platform Foundations</div>
                  <Link href="/platform/identity-graph" onClick={() => setOpen(false)} className="px-2 py-1">Identity Graph</Link>
                  <Link href="/platform/ai-risk-engine" onClick={() => setOpen(false)} className="px-2 py-1">AI Risk Engine</Link>
                  <Link href="/platform/integrations" onClick={() => setOpen(false)} className="px-2 py-1">Integrations</Link>
                </div>
                <Link href="/solution" onClick={() => setOpen(false)} className="px-2 py-1">Solution</Link>
                <div className="grid gap-1">
                  <div className="font-medium">Resources</div>
                  <Link href="/resources/documentation" onClick={() => setOpen(false)} className="px-2 py-1">Documentation</Link>
                  <Link href="/resources/blogs" onClick={() => setOpen(false)} className="px-2 py-1">Blogs</Link>
                </div>
                <div className="grid gap-1">
                  <div className="font-medium">Company</div>
                  <Link href="/company/about" onClick={() => setOpen(false)} className="px-2 py-1">About Us</Link>
                  <Link href="/company/updates" onClick={() => setOpen(false)} className="px-2 py-1">New Feature/Update</Link>
                </div>
                <Button asChild className="mt-2">
                  <Link href="/demo" onClick={() => setOpen(false)}>Get a Demo</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
