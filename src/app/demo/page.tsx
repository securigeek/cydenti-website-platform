import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Get a Demo</h1>
      <p className="mt-4 text-zinc-600">Schedule a live walkthrough of the platform.</p>
      <div className="mt-6">
        <Button asChild>
          <a href="https://www.linkedin.com/company/cydenti/" target="_blank" rel="noopener noreferrer">Request Demo</a>
        </Button>
      </div>
    </main>
  );
}
