"use client";

import { useEffect, useState } from "react";
import ShimmerButton from "@/components/magicui/ShimmerButton";

export const Footer = () => {
    const [uptime, setUptime] = useState<string>("");

    useEffect(() => {
        const birthDate = new Date("2005-10-08T00:00:00");

        const updateUptime = () => {
            const now = new Date();
            const diff = now.getTime() - birthDate.getTime();

            const seconds = Math.floor((diff / 1000) % 60);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const days = Math.floor((diff / (1000 * 60 * 60 * 24)));

            const years = Math.floor(days / 365);
            const remainingDays = days % 365;

            setUptime(`${years}y ${remainingDays}d ${hours}h ${minutes}m ${seconds}s`);
        };

        const interval = setInterval(updateUptime, 1000);
        updateUptime(); // Initial call

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="py-12 px-6 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col min-h-[50vh] md:portrait:min-h-0 md:portrait:py-20 justify-between">

                {/* Center: Giant CTA */}
                <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-12">
                    <a
                        href="mailto:bamgudeatharva@gmail.com"
                        className="group relative inline-block cursor-pointer"
                    >
                        <h2 className="text-[9vw] md:text-[8vw] font-bold leading-[0.8] tracking-tighter text-neutral-900 dark:text-white text-center">
                            LET&apos;S WORK <br /> TOGETHER
                        </h2>
                    </a>

                    <a href="mailto:bamgudeatharva@gmail.com">
                        <ShimmerButton className="shadow-2xl" background="#000000" shimmerColor="#ffffff">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20">
                                    <img src="/profile.png" alt="Avatar" className="w-full h-full object-cover object-[center_10%] scale-110" />
                                </div>
                                Contact
                            </span>
                        </ShimmerButton>
                    </a>
                </div>

                {/* Bottom: Meta & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-neutral-100 dark:border-neutral-900 pt-8 gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                            © 2026 Atharva Bamgude
                        </span>
                        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span>On this planet for: {uptime}</span>
                        </div>
                    </div>

                    {/* Socials moved to bottom */}
                    <div className="flex gap-6 flex-wrap justify-end">
                        {[
                            { name: "X", url: "https://x.com/__thefiasco" },
                            { name: "LinkedIn", url: "https://www.linkedin.com/in/atharva-bamgude/" },
                            { name: "GitHub", url: "https://github.com/Atharva0808" },
                            { name: "Medium", url: "https://medium.com/@bamgudeatharva" },
                            { name: "Hashnode", url: "https://hashnode.com/@Atharva088" },
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-mono text-neutral-400 hover:text-black dark:hover:text-white uppercase tracking-wider transition-colors"
                            >
                                {social.name}
                            </a>
                        ))}
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider cursor-help" title="starlex0470">
                            Discord
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
