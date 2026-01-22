"use client";

import { Wallet, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import * as StacksConnect from "@stacks/connect";

const appConfig = new AppConfig(["store_write", "publish_data"]);
const userSession = new UserSession({ appConfig });

export default function Navbar() {
  const [userData, setUserData] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((data) => {
        setUserData(data);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, []);

  const connectWallet = () => {
    console.log("Connect Wallet button clicked!");

    // Try multiple possible export names from the library
    const connectFn =
      (StacksConnect as any).authenticate ||
      (StacksConnect as any).showConnect ||
      showConnect;

    console.log("Found connect function type:", typeof connectFn);

    if (typeof connectFn !== 'function') {
      console.warn("Wallet library still loading or blocked by extension. Exports:", Object.keys(StacksConnect));
      return;
    }

    try {
      connectFn({
        appDetails: {
          name: "Loiters",
          icon: typeof window !== "undefined" ? window.location.origin + "/logo.svg" : "",
        },
        redirectTo: "/",
        onFinish: () => {
          console.log("Connection finished successfully");
          // Add a tiny delay to ensure session is persisted
          setTimeout(() => {
            if (userSession.isUserSignedIn()) {
              setUserData(userSession.loadUserData());
            }
          }, 100);
        },
        userSession,
      });
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const disconnect = () => {
    userSession.signUserOut();
    setUserData(null);
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <span className="text-xl font-bold text-white">L</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Loiters</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Explore</a>
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Communities</a>
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Reputation</a>
        </div>

        <div className="flex items-center gap-4">
          {userData ? (
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-400">
                {userData.profile.stxAddress.mainnet.slice(0, 5)}...{userData.profile.stxAddress.mainnet.slice(-5)}
              </span>
              <button
                onClick={disconnect}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 text-zinc-400 transition-all hover:bg-red-500/10 hover:text-red-500"
                title="Disconnect"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={connectWallet}
              className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
            >
              <Wallet size={18} />
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
