import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/landing/hero";
import { UseCases } from "@/components/landing/use-cases";
import { Features } from "@/components/landing/features";
import { CTA } from "@/components/landing/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <UseCases />
      <Features />
      <CTA />

      <footer className="py-8 border-t text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} NovaKiwi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
