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
      <div className="flex h-16 w-full max-w-7xl items-center justify-between rounded-full border border-gray-200/50 bg-white/80 px-6 backdrop-blur-md shadow-sm transition-all hover:shadow-md">
        <Link href="/" className="flex items-center gap-2">
          {/* Brandmark (Colored) */}
          <Image src="/cydenti-brandmark.svg" alt="Cydenti" width={32} height={32} priority />
          <span className="text-xl font-bold tracking-tight text-gray-900">Cydenti</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50">
                  <Link href="/platform">Platform</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50">
                  <Link href="/solution">Solution</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 outline-none">
                    Resources
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 p-2">
                    <DropdownMenuItem asChild className="cursor-pointer rounded-md p-2 focus:bg-gray-100">
                      <Link href="/resources/documentation" className="w-full">Documentation</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer rounded-md p-2 focus:bg-gray-100">
                      <Link href="/resources/blogs" className="w-full">Blogs</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 outline-none">
                    Company
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 p-2">
                    <DropdownMenuItem asChild className="cursor-pointer rounded-md p-2 focus:bg-gray-100">
                      <Link href="/company/about" className="w-full">About Us</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer rounded-md p-2 focus:bg-gray-100">
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
                <Link href="/platform" onClick={() => setOpen(false)} className="px-2 py-1">Platform</Link>
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
