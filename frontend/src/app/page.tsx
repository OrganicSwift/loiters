import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReputationCard from "@/components/ReputationCard";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <ReputationCard />
      </main>

      <footer className="border-t border-white/5 bg-black py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-zinc-500">
            © 2026 Loiters Protocol. Built for the Stacks Hackathon.
          </p>
        </div>
      </footer>
    </div>
  );
}
