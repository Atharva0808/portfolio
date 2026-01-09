"use client";
import { motion } from "framer-motion";
import ShimmerButton from "@/components/magicui/ShimmerButton";
import { Download, Mail } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = (e: React.MouseEvent) => {
        e.preventDefault();
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }

        const startAudio = () => {
            if (audioRef.current) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            setIsPlaying(true);
                        })
                        .catch((error) => {
                            console.log("Auto-play prevented:", error);
                        });
                }
                document.removeEventListener("click", startAudio);
                document.removeEventListener("keydown", startAudio);
                document.removeEventListener("scroll", startAudio);
            }
        };

        document.addEventListener("click", startAudio);
        document.addEventListener("keydown", startAudio);
        document.addEventListener("scroll", startAudio);

        return () => {
            document.removeEventListener("click", startAudio);
            document.removeEventListener("keydown", startAudio);
            document.removeEventListener("scroll", startAudio);
        };
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col justify-center px-6 md:px-20 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
            <div className="max-w-4xl w-full z-10 flex flex-col items-start mx-auto">

                {/* Avatar and Status Pill Row */}
                <div className="flex items-center gap-6 mb-8">
                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border-2 border-white dark:border-neutral-800 shadow-lg overflow-hidden flex-shrink-0"
                    >
                        <img src="/profile.png" alt="Avatar" className="w-full h-full object-cover object-top" />
                    </motion.div>

                    {/* Open to opportunities pill */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="mt-12 md:mt-14"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-[#1C1C1C] border border-neutral-200 dark:border-neutral-800">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-medium text-neutral-600 dark:text-white tracking-wide">
                                Open to opportunities
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Split Heading: Static Intro + Typewriter Name */}
                <div className="flex flex-wrap items-baseline gap-3 mb-6 text-3xl md:text-5xl font-bold">
                    <span className="text-neutral-600 dark:text-white">Hi, I&apos;m</span>
                    <TypewriterEffect
                        words={[
                            {
                                text: "Atharva",
                                className: "text-neutral-900 dark:text-white font-bold",
                            },
                            {
                                text: "Bamgude.",
                                className: "text-neutral-900 dark:text-white font-bold",
                            },
                        ]}
                        className="!text-3xl md:!text-5xl !leading-tight"
                        cursorClassName="bg-neutral-900 dark:bg-white h-7 md:h-12"
                    />
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-xl md:text-2xl text-neutral-600 dark:text-white font-medium max-w-2xl leading-relaxed mb-12"
                >
                    A Full Stack web developer. <br />
                    I build interactive web apps using
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-sm font-medium text-white align-middle mx-1.5 hover:bg-neutral-800 transition-colors mx-1">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-4 h-4" alt="TS" />
                        TypeScript
                    </span>,
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-sm font-medium text-white align-middle mx-1.5 hover:bg-neutral-800 transition-colors mx-1">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-4 h-4" alt="React" />
                        React
                    </span>,
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-sm font-medium text-white align-middle mx-1.5 hover:bg-neutral-800 transition-colors mx-1">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-4 h-4 invert" alt="Next.js" />
                        Next.js
                    </span>
                    and
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-sm font-medium text-white align-middle mx-1.5 hover:bg-neutral-800 transition-colors mx-1">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-4 h-4" alt="PostgreSQL" />
                        PostgreSQL
                    </span>.
                    With a focus on UI design. Enthusiastic about <span className="font-semibold text-neutral-900 dark:text-white underline decoration-neutral-400/30 decoration-2 underline-offset-4">Agentic AI</span>.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="flex flex-wrap gap-4"
                >
                    <ShimmerButton className="shadow-2xl" background="#000000" shimmerColor="#ffffff">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base flex items-center gap-2">
                            <Download className="w-4 h-4" /> Resume / CV
                        </span>
                    </ShimmerButton>
                    <ShimmerButton className="shadow-2xl" background="#000000" shimmerColor="#ffffff">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base flex items-center gap-2">
                            <Mail className="w-4 h-4" /> Get in touch
                        </span>
                    </ShimmerButton>
                </motion.div>
            </div>

            {/* Spotify Player - Interactive Pill Design */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-8 right-6 md:right-12 z-20 hidden md:block"
            >
                <div
                    onClick={toggleAudio}
                    className="flex items-center gap-4 p-3 pr-5 bg-[#0a0a0a] border border-white/5 rounded-full w-[20rem] shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                >
                    {/* Album Art Container */}
                    <div className="relative shrink-0">
                        <motion.div
                            animate={{ rotate: isPlaying ? 360 : 0 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                            className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#1DB954]/20"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg"
                                alt="Graduation"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Spotify Logo Badge */}
                        <div className="absolute -bottom-1 -right-1 bg-[#0a0a0a] rounded-full p-0.5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" className="w-4 h-4" alt="Spotify" />
                        </div>
                    </div>

                    {/* Text Info */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
                        <p className="text-[10px] font-bold text-[#1DB954] tracking-wider uppercase">Last Played</p>
                        <h3 className="text-white font-bold text-sm truncate">Stronger</h3>
                        <p className="text-neutral-500 text-xs truncate font-medium">Kanye West</p>
                    </div>

                    {/* Play/Pause Button */}
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1DB954] group-hover:text-black transition-colors duration-300">
                        {isPlaying ? (
                            <svg className="w-4 h-4 fill-current text-white group-hover:text-black" viewBox="0 0 24 24">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4 fill-current text-white group-hover:text-black ml-0.5" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </div>
                </div>

                {/* Audio Element */}
                <audio
                    ref={audioRef}
                    loop
                    className="hidden"
                    onError={(e) => console.error("Audio playback error:", e)}
                >
                    <source src="/music.mp3" type="audio/mpeg" />
                </audio>
            </motion.div>
        </div>
    );
};
