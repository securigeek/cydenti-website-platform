import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cydenti.com"),
  title: "Cydenti - Identity Security Platform",
  description:
    "The Sovereign Intelligence Layer for SaaS, Cloud & Identity Blind Spots.",
  icons: {
    icon: "/cydenti-brandmark.png",
  },
  openGraph: {
    title: "Cydenti - Identity Security Platform",
    description:
      "The Sovereign Intelligence Layer for SaaS, Cloud & Identity Blind Spots.",
    url: "https://www.cydenti.com",
    siteName: "Cydenti",
    type: "website",
    images: [
      {
        url: "/cydenti-brandmark.png",
        width: 1200,
        height: 630,
        alt: "Cydenti brandmark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cydenti - Identity Security Platform",
    description:
      "The Sovereign Intelligence Layer for SaaS, Cloud & Identity Blind Spots.",
    images: ["/cydenti-brandmark.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <div className="min-h-[calc(100vh-4rem)]">{children}</div>
      </body>
    </html>
  );
}
