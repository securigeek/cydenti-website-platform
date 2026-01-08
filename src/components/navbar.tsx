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
                <NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50">
                  <Link href="/platform">Platform</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50">
                  <Link href="/solution">Solution</Link>
                </NavigationMenuLink>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 outline-none">
                    Resources
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 p-2">
                    <DropdownMenuItem asChild className="cursor-pointer rounded-md p-2 focus:bg-slate-100">
                      <Link href="/resources/gallery" className="w-full">Gallery</Link>
                    </DropdownMenuItem>
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
            <a href="https://www.linkedin.com/company/cydenti/" target="_blank" rel="noopener noreferrer">Get a Demo</a>
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
                  {/* <div className="pl-2 text-xs text-gray-500">Core Capabilities</div>
                  <Link href="/platform/itdr" onClick={() => setOpen(false)} className="px-2 py-1">Identity Threat Detection (ITDR)</Link>
                  <Link href="/platform/ispm" onClick={() => setOpen(false)} className="px-2 py-1">Identity Security Posture Management (ISPM)</Link>
                  <Link href="/platform/cloud-identity-exposure" onClick={() => setOpen(false)} className="px-2 py-1">Cloud Identity Exposure Monitoring</Link>
                  <Link href="/platform/oauth-risk-management" onClick={() => setOpen(false)} className="px-2 py-1">Third-Party & OAuth Risk Management</Link>
                  <Link href="/platform/identity-risk-scoring" onClick={() => setOpen(false)} className="px-2 py-1">Identity Risk Scoring & Prioritization</Link>
                  <Link href="/platform/compliance-reporting" onClick={() => setOpen(false)} className="px-2 py-1">Compliance & Reporting</Link>
                  <div className="pl-2 text-xs text-gray-500">Platform Foundations</div>
                  <Link href="/platform/identity-graph" onClick={() => setOpen(false)} className="px-2 py-1">Identity Graph</Link>
                  <Link href="/platform/ai-risk-engine" onClick={() => setOpen(false)} className="px-2 py-1">AI Risk Engine</Link>
                  <Link href="/platform/integrations" onClick={() => setOpen(false)} className="px-2 py-1">Integrations</Link> */}
                </div>
                {/* <Link href="/solution" onClick={() => setOpen(false)} className="px-2 py-1">Solution</Link> */}
                <div className="grid gap-1">
                  <div className="font-medium">Resources</div>
                  <Link href="/resources/gallery" onClick={() => setOpen(false)} className="px-2 py-1">Gallery</Link>
                  <Link href="/resources/documentation" onClick={() => setOpen(false)} className="px-2 py-1">Documentation</Link>
                  <Link href="/resources/blogs" onClick={() => setOpen(false)} className="px-2 py-1">Blogs</Link>
                </div>
                <div className="grid gap-1">
                  <div className="font-medium">Company</div>
                  <Link href="/company/about" onClick={() => setOpen(false)} className="px-2 py-1">About Us</Link>
                  <Link href="/company/updates" onClick={() => setOpen(false)} className="px-2 py-1">New Feature/Update</Link>
                </div>
                <Button asChild className="mt-2">
                  <a href="https://www.linkedin.com/company/cydenti/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get a Demo</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
