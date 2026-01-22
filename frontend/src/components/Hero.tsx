"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, Trophy } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 pt-20">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[150px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center"
            >
                <span className="inline-block rounded-full border border-blue-500/30 bg-blue-950/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-400">
                    Built on Stacks
                </span>
                <h1 className="mt-6 bg-linear-to-b from-white to-zinc-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
                    Your Social Reputation,<br /> Anchored to Bitcoin.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
                    Build a verifiable on-chain identity through community check-ins, peer endorsements, and social achievements. The future of decentralized reputation is here.
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <button className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-zinc-200 active:scale-95">
                        Launch App
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95">
                        View Analytics
                    </button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-20 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3"
            >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-500">
                        <MapPin size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white">Proof of Presence</h3>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                        Verify your physical activity with geo-tagged check-ins that build your location-based reputation.
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 text-purple-500">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white">Trustless Identity</h3>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                        Leverage Bitcoin's security through Stacks to create a permanent, tamper-proof social score.
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/20 text-green-500">
                        <Trophy size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white">Earn Rewards</h3>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                        Collect achievement badges and earn $LOIT tokens for your contributions to the ecosystem.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
