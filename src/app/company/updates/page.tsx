import { FeatureUpdatesTimeline, UpdateItem, UpdateCategory } from "@/components/feature-updates-timeline";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Product Updates - Cydenti",
  description: "Stay up to date with the latest features, improvements, and announcements from Cydenti.",
};

async function getUpdates(): Promise<UpdateItem[]> {
  try {
    type SanityUpdate = {
      _id: string
      title: string
      date: string
      category: UpdateCategory
      description: string
      version?: string
      image?: unknown
    }
    const updates: SanityUpdate[] = await client.fetch(`
      *[_type == "productUpdate"] | order(date desc) {
        _id,
        title,
        date,
        category,
        description,
        version,
        image
      }
    `, {}, {
      next: { revalidate: 60 }
    });

    return updates.map((update) => ({
      id: update._id,
      date: new Date(update.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      title: update.title,
      description: update.description,
      category: update.category as UpdateCategory,
      version: update.version,
      image: update.image ? urlFor(update.image).url() : undefined,
    }));
  } catch (error) {
    console.error("Failed to fetch updates:", error);
    return [];
  }
}

export default async function UpdatesPage() {
  const updates = await getUpdates();

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
      <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">System Log</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-zinc-900 mb-6 tracking-tight">
            Product Updates
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed font-light">
            A chronological timeline of Cydenti&apos;s evolution, features, and improvements.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="flex-1 pb-24">
        <FeatureUpdatesTimeline items={updates} />
      </section>

      {/* Newsletter / CTA (Optional) */}
      <section className="bg-zinc-50 border-t border-zinc-100 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-medium text-zinc-900 mb-4 tracking-tight">Stay synchronized</h2>
          <p className="text-zinc-500 mb-8 font-light">Receive critical system updates directly to your inbox.</p>
          
          <form className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="email@organization.com" 
              className="flex-1 px-4 py-3 rounded-none border-b border-zinc-200 bg-transparent focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-400 font-light"
            />
            <button className="px-6 py-3 bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
