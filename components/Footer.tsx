"use client";

export const Footer = () => {
    return (
        <footer className="py-12 px-6 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col h-[50vh] md:portrait:h-auto md:portrait:py-20 justify-between">

                {/* Center: Giant CTA */}
                <div className="flex-1 flex items-center justify-center">
                    <a
                        href="mailto:hello@atharva.dev"
                        className="group relative inline-block cursor-pointer"
                    >
                        <h2 className="text-[10vw] md:text-[9vw] font-bold leading-[0.8] tracking-tighter text-neutral-900 dark:text-white text-center">
                            LET'S WORK <br /> TOGETHER
                        </h2>
                    </a>
                </div>

                {/* Bottom: Meta & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-neutral-100 dark:border-neutral-900 pt-8 gap-4">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                            © 2026 Atharva Bamgude
                        </span>
                        <span className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                            Mumbai, India • {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })} IST
                        </span>
                    </div>

                    {/* Socials moved to bottom */}
                    <div className="flex gap-6">
                        {["X", "LinkedIn", "GitHub", "Instagram"].map((link) => (
                            <a key={link} href="#" className="text-xs font-mono text-neutral-400 hover:text-black dark:hover:text-white uppercase tracking-wider transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
