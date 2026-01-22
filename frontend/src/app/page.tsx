import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        {/* Additional sections can be added here */}
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
