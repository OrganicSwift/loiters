"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Users } from "lucide-react";

export default function ReputationCard() {
    return (
        <section className="bg-black py-24 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Reputation Tiers</h2>
                    <p className="mt-4 text-zinc-400">Unlock benefits as you build your presence in the ecosystem.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {[
                        { tier: "Bronze", pts: "0+", color: "bg-orange-900/20 text-orange-500", icon: Award },
                        { tier: "Sliver", pts: "1,000+", color: "bg-zinc-800/50 text-zinc-300", icon: TrendingUp },
                        { tier: "Gold", pts: "5,000+", color: "bg-yellow-900/20 text-yellow-500", icon: Users },
                    ].map((item, i) => (
                        <motion.div
                            key={item.tier}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30 p-8 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-zinc-900/50"
                        >
                            <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}>
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">{item.tier} Tier</h3>
                            <p className="mt-2 text-2xl font-black text-white">{item.pts} <span className="text-sm font-medium text-zinc-500">Rep Points</span></p>
                            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
                                <li className="flex items-center gap-2">• Basic community access</li>
                                <li className="flex items-center gap-2">• Standard check-in rewards</li>
                                {i > 0 && <li className="flex items-center gap-2">• Priority voting power</li>}
                                {i > 1 && <li className="flex items-center gap-2">• $LOIT staking bonus</li>}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
